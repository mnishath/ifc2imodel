<template>
  <div class="dashboard">
    <AppHeader />
    <div class="content">
      <h2>Select a Project and iModel</h2>
      
      <ProjectSelector 
        :projects="itwins" 
        v-model="selectedItwinId" 
        @create="showCreateItwinModal = true"
      />

      <div v-if="selectedItwinId" class="imodel-section">
        <ModelList 
          :models="imodels"
          @create="showCreateImodelModal = true"
          @select="(id) => selectedImodelId = id"
        />
        <ConflictToggle v-if="selectedImodelId" />
      </div>
      
      <p v-if="isLoading">Loading...</p>

      <CreateItemModal 
        v-if="showCreateItwinModal" 
        itemType="iTwin"
        @close="showCreateItwinModal = false"
        @create="(name) => createItwin(name)"
      />
      <CreateItemModal 
        v-if="showCreateImodelModal" 
        itemType="iModel"
        @close="showCreateImodelModal = false"
        @create="(name) => createImodel(name)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import api from '../services/api';

// Import Components
import AppHeader from '../components/AppHeader.vue';
import ProjectSelector from '../components/ProjectSelector.vue';
import ModelList from '../components/ModelList.vue';
import ConflictToggle from '../components/ConflictToggle.vue';
import CreateItemModal from '../components/CreateItemModal.vue';

// Reactive State
const isLoading = ref(false);
const itwins = ref([]);
const imodels = ref([]);
const selectedItwinId = ref<string | null>(null);
const selectedImodelId = ref<string | null>(null);
const showCreateItwinModal = ref(false);
const showCreateImodelModal = ref(false);


// Fetch iTwin Projects when the component loads
onMounted(async () => {
    await fetchItwins();
});

const fetchItwins = async () => {
    isLoading.value = true;
    try {
        const response = await api.get('/itwins');
        itwins.value = response.data;
    } catch (error) {
        console.error("Failed to fetch iTwins:", error);
    } finally {
        isLoading.value = false;
    }
};

// Watch for changes in the selected iTwin ID
watch(selectedItwinId, async (newId) => {
  if (newId) {
    selectedImodelId.value = null;
    isLoading.value = true;
    try {
      imodels.value = [];
      const response = await api.get(`/itwins/${newId}/imodels`);
      imodels.value = response.data;
    } catch (error) {
      console.error("Failed to fetch iModels:", error);
    } finally {
        isLoading.value = false;
    }
  } else {
    imodels.value = [];
  }
});

const createItwin = (name: string) => {
    console.log(`Creating iTwin named: ${name}`);
    // API call to create iTwin would go here
    showCreateItwinModal.value = false;
};
const createImodel = (name: string) => {
    console.log(`Creating iModel named: ${name}`);
    // API call to create iModel would go here
    showCreateImodelModal.value = false;
};
</script>

<style scoped>
.dashboard { padding: 1rem; }
.content { max-width: 800px; margin: 1rem auto; }
.imodel-section { margin-top: 1.5rem; }
</style>
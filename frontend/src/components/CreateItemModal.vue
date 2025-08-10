<template>
  <div class="modal-backdrop">
    <div class="modal">
      <h3>Create New {{ itemType }}</h3>
      <input type="text" v-model="itemName" :placeholder="`Enter new ${itemType} name`" />
      <button @click="$emit('create', itemName)">Create</button>
      <button @click="$emit('close')">Cancel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{ itemType: string }>();
defineEmits(['create', 'close']);
const itemName = ref('');
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 2rem;
  border-radius: 5px;
}
</style>
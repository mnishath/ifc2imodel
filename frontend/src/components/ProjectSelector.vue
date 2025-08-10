<template>
    <div>
        <div class="list-header">
            <h4>Select an iTwin Project</h4>
            <button @click="$emit('create')">+ Create New iTwin</button>
        </div>
        <select @change="onChange" :value="modelValue">
            <option disabled :value="null">-- Please select a project --</option>
            <option v-for="project in projects" :key="project.id" :value="project.id">
                {{ project.displayName }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
defineProps<{ projects: Array<{id: string, displayName: string}>, modelValue: string | null }>();
const emit = defineEmits(['update:modelValue', 'create']);

const onChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLSelectElement).value);
};
</script>

<style scoped>
select { width: 100%; padding: 0.5rem; }
.list-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
</style>
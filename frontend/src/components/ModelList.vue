<template>
    <div>
        <div class="list-header">
            <h4>Select an iModel</h4>
            <button @click="$emit('create')">+ Create New iModel</button>
        </div>
        <ul>
            <li v-for="model in models" :key="model.id" @click="$emit('select', model.id)">
                {{ model.displayName }}
            </li>
        </ul>
        <p v-if="!models.length">No iModels found in this project.</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{ models: Array<{id: string, displayName: string}> }>();
defineEmits(['create', 'select']);
</script>

<style scoped>
ul { list-style: none; padding: 0; }
li { padding: 0.5rem; border: 1px solid #ccc; margin-top: 0.5rem; cursor: pointer; }
li:hover { background-color: #f0f0f0; }
.list-header { display: flex; justify-content: space-between; align-items: center; }
</style>
<template>
  <header class="app-header">
    <h1>IFC to iModel Processor</h1>
    <button @click="handleLogout">Logout</button>
  </header>
</template>

<script setup lang="ts">
import api from '../services/api';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogout = async () => {
  await api.post('/auth/logout');
  router.push('/');
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
}
</style>
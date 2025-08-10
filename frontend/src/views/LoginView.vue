<template>
  <div>
    <p>Redirecting to Bentley to log in...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    window.location.href = 'http://localhost:3001/api/auth/login';
});
</script>
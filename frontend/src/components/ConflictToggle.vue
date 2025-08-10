<template>
  <div>
    <h3>Update Policy</h3>
    <p>Select how to handle conflicts when updating an existing iModel.</p>
    <label>
      <input type="radio" value="overwrite" v-model="policy" /> Overwrite
    </label>
    <label style="margin-left: 1rem">
      <input type="radio" value="ignore" v-model="policy" /> Ignore
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const policy = ref('overwrite');
</script>
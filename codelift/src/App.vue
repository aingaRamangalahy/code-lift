<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFilterMenu from './components/TheFilterMenu.vue';
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <div class="main">
    <TheFilterMenu />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  margin-top: 64px;
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 10%;
  }
}
</style>

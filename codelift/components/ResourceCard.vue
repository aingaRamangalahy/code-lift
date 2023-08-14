<template>
  <div :class="['resource-card', darkMode ? 'dark' : '']">
    <div class="resource-card-title">{{ title }}</div>
    <div class="resource-card-description">{{ description }}</div>
    <div class="resource-card-tag">{{ tag }}</div>
  </div>
</template>

<script setup>
 defineProps({
    title: String,
    description: String,
    tag: String,
    darkMode: Boolean,
});
</script>

<style lang="scss" scoped>
.resource-card {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.resource-card.dark {
  background-color: #1a1a1a;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
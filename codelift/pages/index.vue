<template>
  <div :class="['page', darkMode ? 'dark' : '']">
    <DarkModeSwitch />
    <ResourceCard
      v-for="(resourceItem, index) in resourcesItems"
      :key="index"
      :title="resourceItem.title"
      :description="resourceItem.description"
      :tag="resourceItem.tag"
      :darkMode="darkMode"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const darkMode = ref(true);
const resourcesItems = ref([
  {
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tag: 'Technology',
  },
  // Add more news items here...
]);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};

</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  transition: background-color 0.3s ease;
}

.page.dark {
  background-color: #121212;
}
</style>
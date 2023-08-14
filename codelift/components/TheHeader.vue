<template>
  <div class="dark:bg-slate-800 bg-white dark:text-white py-4">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-semibold">My Nuxt 3 App</h1>
        <el-switch 
          v-model="isDarkMode" 
          @change="toggleDarkMode($colorMode.preference === 'dark'? 'light' : 'dark')" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Theme = 'light' | 'dark'
const isDarkMode = ref(false)

const toggleDarkMode = (newTheme: string) => {
  useColorMode().preference = newTheme;
  isDarkMode.value = newTheme === 'dark'
  console.log('is dark mode', isDarkMode.value)
}
</script>
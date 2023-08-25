<template>
  <div class="fixed dark:bg-black bg-white dark:text-white p-3 border-b border-solid border-b-gray-700 min-w-full z-2">
    <div class="mx-4">
      <div class="flex justify-between items-center">
        <SvgoThreeBar class="laptop:hidden h-7" @click="showSideNab" />        
        <h1 class="text-2xl font-semibold">My Nuxt 3 App</h1>
        <!-- <el-switch 
          v-model="isDarkMode" 
          @change="toggleDarkMode($colorMode.preference === 'dark'? 'light' : 'dark')" 
        /> -->
        <button @click.native="toggleDarkMode($colorMode.preference === 'dark'? 'light' : 'dark')">
          <SvgoMoon v-if="!isDarkMode" />
          <SvgoSun v-else />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isDarkMode = ref(false)

const toggleDarkMode = (newTheme: string) => {
  useColorMode().preference = newTheme;
  isDarkMode.value = newTheme === 'dark'
}

const showSideNab = () => {
  console.log('should toggle side nav')
}
</script>
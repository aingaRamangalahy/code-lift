<template>
  <div class="fixed dark:bg-black bg-white dark:text-white p-3 border-b border-solid border-b-slate-700 min-w-full z-2">
    <div class="mx-4">
      <div class="flex justify-between items-center">
        <button class="laptop:hidden" @click="showSidenav">
          <SvgoThreeBar />
        </button>
        <h1 class="text-2xl font-semibold">My Nuxt 3 App</h1>
        <div class="flex">
          <button class="hidden laptop:block mx-2 px-1 dark:bg-slate-800 bg-slate-300 rounded-md" @click.native="addResource" >
            <SvgoPlusSmall />
          </button>

          <button class="mx-2" @click.native="toggleDarkMode($colorMode.preference === 'dark'? 'light' : 'dark')">
            <SvgoSun v-if="isDarkMode" />
            <SvgoMoon v-else />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isDarkMode = ref(false)
const { toggle: showSidenav } = useSidenav()
const config = useRuntimeConfig()

onMounted(() => {
  isDarkMode.value = useColorMode().preference === 'dark'; 
})

const { addResource } = useResource()

const toggleDarkMode = (newTheme: string) => {
  useColorMode().preference = newTheme;
  isDarkMode.value = newTheme === 'dark'
}

</script>
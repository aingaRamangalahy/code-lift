<template>
  <div
    class="w-64 -translate-x-64 laptop:top-14 laptop:h-[calc(100vh-theme(space.14))] laptop:flex flex-col z-sidebar laptop:-translate-x-0 left-0 border-r border-slate-700 transition-[width,transform] duration-300 ease-in-out group fixed top-0  h-full"
    :class="{ 'translate-x-0 dark:bg-black bg-white': isToggled }">
    <nav class="p-4 flex flex-col">
      <button class="laptop:hidden self-end mb-4" @click="closeSidenav">
        <SvgoXmark class="h-7 w-7" />
      </button>
      <div class="space-y-2 flex flex-col w-full">
        <button v-for="(filter, index) of filters" :key="index" @click="filterList(filter.value)"
          class="text-left px-2 py-1 rounded hover:bg-slate-400 dark:hover:bg-slate-700">
          {{ filter.name }}
        </button>
        <button @click="addResource" class="text-left px-2 py-1 rounded hover:bg-slate-400 dark:hover:bg-slate-700">
          Add resource
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { toggle: closeSidenav, sidenavStatus: isToggled } = useSidenav() ;

const { addResource } = useResource();

const filters = [
  { name: 'Angular', value: 'angular' },
  { name: 'React', value: 'react' },
  { name: 'Vue', value: 'vue' },
  { name: 'Nuxt', value: 'nuxt' },
  { name: 'Search', value: 'search' }, // todo: make it input
]

const filterList = (filter: string) => {
  console.log('filter applied', filter)
}
</script>
<template>
  <div class="max-w-sm bg-gray-10 dark:bg-gray-900 shadow-md rounded-md m-4 p-4 hover:cursor-pointer">
    <!-- Header -->
    <div class="flex items-center">
      <img
        :src="resource?.avatar"
        alt="User Avatar" class="w-10 h-10 rounded-full">
      <div class="ml-2">
        <p class="text-lift-text-secondary dark:text-lift-dark-text-secondary font-semibold">John Doe</p>
        <p class="text-lift-text-secondary dark:text-lift-dark-text-secondary text-sm">Published on Aug 17, 2023</p>
      </div>
    </div>
    <!-- Title -->
    <h2 class="mt-3 text-xl font-semibold text-lift-text-primary dark:text-lift-dark-text-primary">
      {{ resource?.title }}
    </h2>
    <!-- Description-->
    <p class="my-2 text-gray-500 dark:text-gray-400">
      {{ resource?.description }}
    </p>
    <!-- Resource Image -->
    <img
      :src="resource?.img"
      alt="Resource Image" class="mt-4 rounded-md shadow-md">
    <!-- Footer -->
    <div class="flex justify-between items-center mt-4">
      <div class="flex items-center">
        <button
          class="text-lift-text-secondary dark:text-lift-dark-text-secondary hover:text-lift-accent dark:hover:text-lift-text-accent transition duration-300">
          <SvgoChevronDoubleUp />
        </button>
        <p class="ml-2 text-lift-text-secondary dark:text-lift-dark-text-secondary">25 Upvotes</p>
      </div>
      <div class="flex items-center">
        <button
          class="text-lift-text-secondary dark:text-lift-dark-text-secondary hover:text-lift-accent dark:hover:text-lift-text-accent transition duration-300">
          <SvgoForward />
        </button>
        <p class="ml-2 text-lift-text-secondary dark:text-lift-dark-text-secondary">view</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  resource: Object,
});

const handleLike = () => {
  // Implement like functionality here
}
</script>

<style lang="scss" scoped></style>
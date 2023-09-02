<template>
  <form class="p-4 flex flex-col shadow-md rounded-md">
    <div class="mb-4">
      <label for="resourceUrl" class="block font-semibold mb-1">Resource URL</label>
      <input v-model="form.resourceUrl"  type="text" id="resourceUrl" class="w-full dark:bg-slate-900 rounded border p-2" />
    </div>
    <div class="mb-4">
      <label for="title" class="block font-semibold mb-1">Title</label>
      <input v-model="form.title" type="text" id="title" class="w-full dark:bg-slate-900 rounded border p-2" />
    </div>
    <div class="mb-4">
      <label for="description" class="block font-semibold mb-1">Description</label>
      <textarea v-model="form.description" id="description" class="w-full dark:bg-slate-900 rounded border p-2"></textarea>
    </div>
    <div class="mb-4">
      <label for="img" class="block font-semibold mb-1">Image URL</label>
      <input v-model="form.img" type="text" id="img" class="w-full dark:bg-slate-900 rounded border p-2" />
    </div>
    <button @click.prevent="submitForm" class="mt-4 self-end dark:text-white py-2 px-4 rounde border rounded-md">Submit</button>
  </form>
</template>

<script setup>
const form = reactive({
  resourceUrl: '',
  title: '',
  description: '',
  img: '',
});

const submitForm = () => {
  const formData = { ...form }
  console.log('should send formData', formData)
}
</script>
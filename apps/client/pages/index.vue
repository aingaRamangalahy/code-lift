<script setup lang="ts">
const resourceStore = useResourceStore();
onBeforeMount(async () => {
    await resourceStore.fetchResources();
})
</script>
<template>
    <div class="container py-8">
        <div class="resource my-4" v-for="resource in resourceStore.resources">
            <CardResourceItem :resource="resource" />
        </div>
    </div>
</template>

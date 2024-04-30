<script setup lang="ts">
const resourceStore = useResourceStore();
const isLoading = ref(false);
onBeforeMount(async () => {
    isLoading.value = true
    await resourceStore.fetchResources();
    isLoading.value = false
})

</script>
<template>
    <div class="py-8">
        <div v-if="!isLoading">
            <div class="resource  my-4" v-for="resource in resourceStore.resources">
                <CardResourceItem :resource="resource" />
            </div>
        </div>
        <div v-else>
            <div class="resource  my-4">
                <CardResourceSkeleton />
            </div>
        </div>
    </div>
</template>

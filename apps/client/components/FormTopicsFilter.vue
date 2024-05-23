<script setup lang="ts">

onBeforeMount(async () => {
    await useTopicStore().fetchTopics()
})



</script>

<template>
    <div class="flex flex-col container p-4 my-4" v-if="useTopicStore().getTopics.length > 0">
        <p class="font-medium text-sm">Topics</p>
        <div class="flex flex-col gap-4 mt-4 ml-4 w-full">
            <div v-for="topic in useTopicStore().getTopics">
                <BaseMenuItem>
                    {{ topic.name }}
                </BaseMenuItem>
            </div>
        </div>
    </div>
</template>

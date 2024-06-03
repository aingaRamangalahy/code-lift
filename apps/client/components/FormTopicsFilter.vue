<script setup lang="ts">
import type { ITopic } from '@cl/types';



onBeforeMount(async () => {
    await useTopicStore().fetchTopics()
})

const filterData = (topic?: ITopic) => {
    useTopicStore().currentTopic = topic;
    useResourceStore().filterResourceByTopic(topic);
}


</script>

<template>
    <div class="flex flex-col container p-4 my-4" v-if="useTopicStore().getTopics.length > 0">
        <p class="font-medium text-sm">Topics</p>
        <div class="flex flex-col gap-4 mt-4 ml-4 w-full">
            <div @click="filterData()">
                <BaseMenuItem :active="!useTopicStore().currentTopic">
                    All
                </BaseMenuItem>
            </div>
            <div v-for="topic in useTopicStore().getTopics" @click="filterData(topic)">
                <BaseMenuItem :active="topic._id === useTopicStore().currentTopic?._id">
                    <UIcon class="mr-2" :name="topic.icon" dynamic />
                    {{ topic.name }}
                </BaseMenuItem>
            </div>
        </div>
    </div>
</template>

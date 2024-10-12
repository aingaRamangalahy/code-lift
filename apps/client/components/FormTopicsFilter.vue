<script setup lang="ts">
import type { ITopic } from '@cl/types';

const topicStore = useTopicStore()
const layoutStore = useLayoutStore()
const showAddBtn = ref(false)

onBeforeMount(async () => {
    await useTopicStore().fetchTopics()
})

const filterData = (topic?: ITopic) => {
    useTopicStore().currentTopic = topic;
    useResourceStore().filterResourceByTopic(topic);
}


</script>

<template>
    <div class="flex flex-col container p-4 my-4" v-if="topicStore.getTopics.length > 0">
        <p class="font-medium text-sm">Topics</p>
        <div class="flex flex-col gap-4 mt-4 ml-4 w-full">
            <div @click="filterData()">
                <BaseMenuItem :active="!topicStore.currentTopic">
                    All
                </BaseMenuItem>
            </div>
            <div v-for="topic in topicStore.getTopics" @mouseenter="showAddBtn = true" @mouseleave="showAddBtn = false"
                @click="filterData(topic)">
                <BaseMenuItem :active="topic._id === topicStore.currentTopic?._id">
                    <UIcon class="mr-2" :name="topic.icon" dynamic />
                    {{ topic.name }}
                    <UButton v-if="showAddBtn" variant="ghost" icon="i-heroicons-plus"
                        @click="layoutStore.showModal('addTopic')" />
                </BaseMenuItem>
            </div>
            <UButton label="New topic" variant="ghost" icon="i-heroicons-plus"
                @click="layoutStore.showModal('addTopic')" />
        </div>
    </div>
</template>

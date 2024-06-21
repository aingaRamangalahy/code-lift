<script setup lang="ts">
import type { IResource } from '@cl/types';
import type { PropType } from 'vue';

const props = defineProps({
    resource: { type: Object as PropType<IResource>, required: true }
})

const openLink = (link: string) => {
    if (!link) return
    window.open(link, "_blank")
}
</script>
<template>
    <BaseCard>
        <div class="flex" @click.stop="openLink(resource?.url)">
            <div class="flex flex-col items-start mb-2">
                <h3 class="text-lg font-medium">{{ resource?.title }}</h3>
                <div class="flex mt-2 gap-1">
                    <template v-for="topic in resource.topics" :key="topic._id">
                        <UKbd> #{{ topic.name }}</UKbd>
                    </template>
                </div>
                <div class="mt-2 text-sm text-slate-400">{{ useDate().formatDate(resource?.createdAt) }}</div>
                <p class="text-slate-400 my-2">
                    {{ resource?.description }}
                </p>
            </div>
        </div>
    </BaseCard>
</template>

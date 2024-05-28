<script setup lang="ts">
import type { IResource } from '@cl/types';
import type { PropType } from 'vue';

defineProps({
    resource: { type: Object as PropType<IResource>, required: true }
})
</script>
<template>
    <BaseCard>
        <div class="flex">

            <div class="flex flex-col items-start mb-2">
                <h3 class="text-lg font-medium">{{ resource?.title }}</h3>
                <p class="text-slate-400 my-2">
                    {{ resource?.description }}
                </p>

                <div class="flex mt-2 gap-1">
                    <template v-for="topic in resource.topics" :key="topic._id">
                        <UKbd> #{{ topic.name }}</UKbd>
                    </template>
                </div>
            </div>
        </div>
    </BaseCard>
</template>

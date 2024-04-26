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
            <!-- <UIcon name="i-heroicons-light-bulb" class="w-1/6" /> -->

            <div class="flex flex-col items-start mb-2">
                <h3 class="text-lg font-medium">{{ resource?.title }}</h3>
                <p class="text-slate-400 my-2">
                    {{ resource?.description }}
                </p>

                <div class="flex mt-2 gap-1">
                    <UKbd value="#frontend" />
                    <UKbd value="#intermediate" />
                </div>
            </div>
        </div>
    </BaseCard>
</template>

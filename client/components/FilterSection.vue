<script setup lang="ts">

import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const technologies = ["angular", "node", "vue", "javascript"]
const levels = ["biginer", "intermediate", "advanced"]
const contentTypes = ["blog", "course", "video", "podcast"]


const schema = z.object({
    technology: z.string(),
    level: z.string(),
    contentType: z.string()
})

type Schema = z.output<typeof schema>

const state = reactive({
    technology: technologies[0],
    level: levels[0],
    contentType: contentTypes[0]
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with data
    console.log(event.data)
}

</script>

<template>
    <div class="flex flex-col container p-4 my-4">
        <p>Filter resources:</p>
        <div class="flex gap-4 mt-4 w-full">
            <USelectMenu class="w-1/4" v-model="state.technology" :options="technologies" />
            <USelectMenu class="w-1/4" v-model="state.level" :options="levels" />
            <USelectMenu class="w-1/4" v-model="state.contentType" :options="contentTypes" />
            <UButton label="Search" @click="onSubmit" />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import type { IResource, IResourcePayloadData } from '@cl/types';
const authStore = useAuthStore()
const resourceStore = useResourceStore()
const topicStore = useTopicStore();

const state = reactive({
    title: undefined,
    description: undefined,
    url: undefined,
    publisher: authStore.currentUser?._id || "",
    topics: [],
    topicList: topicStore.getTopics
})


const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.title) errors.push({ path: 'title', message: 'Required' })
    if (!state.description) errors.push({ path: 'description', message: 'Required' })
    if (!state.url) errors.push({ path: 'url', message: 'Required' })
    if (!state.topics) errors.push({ path: 'topics', message: 'Required' })
    return errors
}


async function onSubmit(event: FormSubmitEvent<any>) {
    const resource: IResourcePayloadData = {
        title: event.data.title,
        description: event.data.description,
        url: event.data.url,
        publisher: state.publisher,
        topics: state.topics
    }
    resourceStore.addResource(resource)
}
</script>

<template>
    <UForm :validate="validate" :state="state" class="flex flex-col space-y-4" @submit="onSubmit">
        <UFormGroup label="Url" name="url">
            <UInput v-model="state.url" />
        </UFormGroup>

        <UFormGroup label="Title" name="title">
            <UInput v-model="state.title" />
        </UFormGroup>

        <UFormGroup label="Description" name="description">
            <UTextarea autoresize v-model="state.description" />
        </UFormGroup>

        <UFormGroup label="Topics" name="topics">
            <USelectMenu v-model="state.topics" multiple :options="state.topicList" value-attribute="_id"
                option-attribute="name" />
            <template v-for="topicId in state.topics" :key="topicId">
                <UKbd class="m-2">#{{ topicStore.getTopicById(topicId)?.name }}</UKbd>
            </template>
        </UFormGroup>


        <UButton type="submit" class="self-end" :loading="resourceStore.isLoading">
            Add resource
        </UButton>
    </UForm>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import type { IResource } from '@cl/types';
const authStore = useAuthStore()
const resourceStore = useResourceStore()

const state = reactive({
    title: undefined,
    description: undefined,
    url: undefined,
    publisher: authStore.currentUser?._id || ""
})


const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.title) errors.push({ path: 'title', message: 'Required' })
    if (!state.description) errors.push({ path: 'description', message: 'Required' })
    if (!state.url) errors.push({ path: 'url', message: 'Required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    const resource: IResource = {
        title: event.data.title,
        description: event.data.description,
        url: event.data.url,
        publisher: state.publisher
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

        <UButton type="submit" class="self-end" :loading="resourceStore.isLoading">
            Add resource
        </UButton>
    </UForm>
</template>

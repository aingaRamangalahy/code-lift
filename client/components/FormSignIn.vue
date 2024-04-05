<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
    email: undefined,
    password: undefined
})

const authStore = useAuthStore();

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    authStore.login(event.data.email, event.data.password)
}
</script>

<template>

    <UForm :validate="validate" :state="state" class="flex flex-col space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton type="submit" class="self-end" :loading="authStore.isLoading">
            Sign in
        </UButton>
    </UForm>
</template>
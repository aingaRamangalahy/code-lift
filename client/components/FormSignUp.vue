<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
    name: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    // Do something with data
    console.log(event.data)
}
</script>

<template>
    <BaseForm>
        <UForm :validate="validate" :state="state" class="flex flex-col space-y-4" @submit="onSubmit">
            <UFormGroup label="Name" name="name">
                <UInput v-model="state.name" />
            </UFormGroup>

            <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" />
            </UFormGroup>

            <UFormGroup label="Password" name="password">
                <UInput v-model="state.password" type="password" />
            </UFormGroup>

            <UFormGroup label="Confirm password" name="confirmPassword">
                <UInput v-model="state.confirmPassword" type="password" />
            </UFormGroup>

            <UButton type="submit" class="self-end">
                Submit
            </UButton>
        </UForm>
    </BaseForm>

</template>
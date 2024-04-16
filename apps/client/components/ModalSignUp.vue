<script setup lang="ts">
const layoutStore = useLayoutStore()
</script>

<template>
    <BaseModal v-model="layoutStore.signUpModal">
        <template #header>
            <div class="flex justify-between">
                <h1>Sign Up</h1>
                <UButton
                    variant="ghost"
                    icon="i-heroicons-x-mark-20-solid"
                    class="-my-1"
                    @click="layoutStore.hideModal('signUpModal')"
                />
            </div>
        </template>
        <template #content>
            <FormSignUp />
        </template>
    </BaseModal>
</template>

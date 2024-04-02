<script lang="ts" setup>
const layoutStore = useLayoutStore();
</script>

<template>
    <BaseModal v-model="layoutStore.signInModal">
        <template #header>
            <div class="flex justify-between">
                <h1>Sign In</h1>
                <UButton 
                    variant="ghost"
                    icon="i-heroicons-x-mark-20-solid" 
                    class="-my-1" 
                    @click="layoutStore.hideModal('signInModal')" 
                />
            </div>
        </template>
        <template #content> 
            <FormSignIn />
        </template>
    </BaseModal>
</template>
<script setup lang="ts">
const layoutStore = useLayoutStore()
</script>

<template>
    <header
        class="border-b border-slate-500 p-4 flex justify-between items-center h-[var(--header-height)]"
    >
        <h1 class="text-3xl font-bold">codelift</h1>
        <div class="flex space-x-4">
            <UButton variant="ghost" icon="i-heroicons-plus" />
            <UButton
                v-if="!useAuthStore().currentUser"
                label="Sign In"
                @click="layoutStore.showModal('signInModal')"
            />
            <UButton
                v-if="!useAuthStore().currentUser"
                label="Sign Up"
                variant="outline"
                @click="layoutStore.showModal('signUpModal')"
            />
            {{ useAuthStore().currentUser.name }}
        </div>
    </header>
</template>

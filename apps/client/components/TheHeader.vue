<script setup lang="ts">
const layoutStore = useLayoutStore()
const authStore = useAuthStore();
</script>

<template>
    <header
        class="border-b sticky top-0 border-slate-700 p-4 flex justify-between items-center h-[var(--header-height)]">
        <h1 class="text-3xl font-bold">codelift</h1>
        <div class="flex space-x-4">
            <UButton variant="ghost" icon="i-heroicons-plus" />
            <UButton v-if="!authStore.currentUser" label="Sign In" @click="layoutStore.showModal('signInModal')" />
            <UButton v-if="!authStore.currentUser" label="Sign Up" variant="outline"
                @click="layoutStore.showModal('signUpModal')" />
            {{ authStore.currentUser?.name || "" }}
        </div>
    </header>
</template>

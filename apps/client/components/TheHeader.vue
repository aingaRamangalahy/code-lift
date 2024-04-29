<script setup lang="ts">
const layoutStore = useLayoutStore()
const authStore = useAuthStore();
</script>

<template>
    <header class="border-b sticky top-0 border-slate-700 py-4  h-[var(--header-height)]">
        <div class="container flex justify-between items-center">
            <h1 class="text-3xl font-bold">codelift</h1>
            <div class="flex space-x-4">
                <UButton variant="ghost" icon="i-heroicons-plus" />
                <UButton v-if="!authStore.currentUser" label="Sign In" @click="layoutStore.showModal('signInModal')" />
                <UButton v-if="!authStore.currentUser" label="Sign Up" variant="outline"
                    @click="layoutStore.showModal('signUpModal')" />
                {{ authStore.currentUser?.name || "" }}
            </div>
        </div>
    </header>
</template>

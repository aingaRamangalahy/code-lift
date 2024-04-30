<script setup lang="ts">
import type { IUser } from '@cl/types';

const layoutStore = useLayoutStore()
const authStore = useAuthStore();

onBeforeMount(() => {
    const currentUserString = localStorage.getItem("user")
    const currentUser = currentUserString ? (JSON.parse(currentUserString) as IUser) : undefined
    authStore.setCurrentUser(currentUser)
})

const menuActions = [
    [{
        label: 'Sign out',
        icon: 'i-mdi-logout',
        click: () => {
            if (authStore.currentUser) {
                authStore.logout(authStore.currentUser._id)
            }
        }
    },]
]
</script>

<template>
    <header class="border-b sticky top-0 border-slate-700 py-4  h-[var(--header-height)]">
        <div class="container flex justify-between items-center">
            <h1 class="text-3xl font-bold">codelift</h1>
            <ClientOnly>
                <div class="flex space-x-4">
                    <UButton v-if="authStore.currentUser" label="Add resource" variant="ghost" icon="i-heroicons-plus"
                        @click="layoutStore.showModal('addResource')" />
                    <UButton v-if="!authStore.currentUser" label="Sign Up" variant="outline"
                        @click="layoutStore.showModal('signUpModal')" />
                    <UButton v-if="!authStore.currentUser" icon="i-mdi-login" label="Sign In"
                        @click="layoutStore.showModal('signInModal')" />


                    <UDropdown v-if="authStore.currentUser" :items="menuActions"
                        :popper="{ placement: 'bottom-start' }">
                        <UAvatar alt="authStore.currentUser?.name" size="sm" />
                    </UDropdown>
                </div>
            </ClientOnly>

        </div>
    </header>
</template>

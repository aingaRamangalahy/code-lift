<script setup lang="ts"></script>

<template>
    <TheHeader />
    <div class="flex">
        <TheAside class="w-1/4" />
        <div class="w-full lg:w-3/4">
            <slot />
        </div>
    </div>

    <ModalSignIn />
    <ModalSignUp />
    <UNotifications />
</template>

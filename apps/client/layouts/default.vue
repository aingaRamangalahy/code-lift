<script setup lang="ts"></script>

<template>
    <TheHeader />
    <div class="flex container">
        <TheAside class="w-1/4" />
        <div class="w-full lg:w-3/4 lg:px-8">
            <slot />
        </div>
    </div>

    <ModalSignIn />
    <ModalSignUp />
    <UNotifications />
</template>

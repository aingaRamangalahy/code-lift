<script setup lang="ts">
defineProps({
    transition: { type: Boolean, default: true }
})

const slots = useSlots();

</script>

<template>
    <UModal :transition=transition>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header v-if="slots.header">
                <slot name="header" />
            </template>
            <slot name="content" />
            <template #footer v-if="slots.footer">
                <slot name="footer" />
            </template>
        </UCard>
    </UModal>
</template>
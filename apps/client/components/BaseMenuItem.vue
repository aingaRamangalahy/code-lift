<script setup>
defineProps({
    active: Boolean
})
</script>
<template>
    <div class="flex items-center cursor-pointer hover:text-primary-400 "
        :class="active ? 'text-primary-500 font-bold' : 'text-slate-500'">
        <slot />
    </div>
</template>

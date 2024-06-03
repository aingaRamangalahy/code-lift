<script setup>
defineProps({
    active: Boolean
})
</script>
<template>
    <div class="flex items-center cursor-pointer hover:text-slate-200"
        :class="active ? 'text-primary-500 font-bold' : 'text-slate-400'">
        <slot />
    </div>
</template>

<script setup lang="ts">
const classConfig = ref({
    aside: 'hidden border-r border-slate-700 overflow-y-auto lg:block lg:h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-4',
})
</script>
<template>
    <aside :class="classConfig.aside">
        <FormTopicsFilter />
    </aside>
</template>
<style scoped lang="scss"></style>

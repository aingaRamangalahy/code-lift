<script lang="ts" setup>
const layoutStore = useLayoutStore()
</script>

<template>
    <BaseModal v-model="layoutStore.addResource">
        <template #header>
            <div class="flex justify-between">
                <h1>Add resource</h1>
                <UButton variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                    @click="layoutStore.hideModal('addResource')" />
            </div>
        </template>
        <template #content>
            <FormResourceAdd />
        </template>
    </BaseModal>
</template>

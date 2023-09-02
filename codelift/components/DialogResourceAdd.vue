<template>
  <div>
    <BaseDialog name="addResource" v-if="isModalOpen" @close="closeDialog">
      <template #title>
        Add Resource
      </template>
      <template #default>
        <FormResourceAdd />
      </template>
    </BaseDialog>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDialogStore } from '~/stores/dialog';

const dialogStore = useDialogStore()
const { getAddResource: isModalOpen } = storeToRefs(dialogStore)

const closeDialog = () => {
  dialogStore.hide('addResource')
}

</script>
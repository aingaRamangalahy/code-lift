<template>
  <transition name="dialog-fade">
    <div class="dark:bg-slate-700 dark:bg-opacity-50 bg-slate-500 bg-opacity-50 fixed top-0 left-0 w-full h-full flex justify-center items-center z-dialog" @click="$emit('close')">
      <div 
        class="shadow-md rounded-sm py-4 px-5 relative dark:bg-slate-900 bg-white dark:text-white" 
        :class="size" 
        @click.stop
      >
        <div class="dialog-content">
          <div class="border-b pb-3 mb-4 flex justify-between">
            <p class="text-2xl">
              <slot name="title"></slot>
            </p>
            <button v-if="closeBtn" @click="closeDialog">
              <svgoXmark />
            </button>
          </div>
          <main>
            <slot></slot>
          </main>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useDialogStore, IDialogState } from '~/stores/dialog';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
  closeBtn: {
    type: Boolean,
    default: true
  },
  name: {
    type: String,
    required: true,
  }
})

const dialogStore = useDialogStore()

const closeDialog = () => {
  dialogStore.hide(props.name as keyof IDialogState)
}
</script>

<style scoped>
.sm {
  width: 20rem;
  max-width: 90vw;
}
.md {
  width: 40rem;
  max-width: 90vw;
}
.lg {
  width: 60rem;
  max-width: 90vw;
}

.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.5s ease;
}

.dialog-fade-enter,
.dialog-fade-leave-to {
  opacity: 0;
}
</style>

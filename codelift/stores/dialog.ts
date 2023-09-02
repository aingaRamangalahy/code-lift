import { defineStore } from "pinia";
interface IDialogStatus {
  visible: boolean
}

export interface IDialogState {
  addResource: IDialogStatus
}

export const useDialogStore = defineStore('dialog', {
  state: (): IDialogState => ({
    addResource:  { visible: false }
  }),
  getters: {
    getAddResource (): boolean {
      return this.addResource.visible
    }
  },
  actions: {
    show(name: keyof IDialogState): void {
      this.$state[name].visible = true
    },
    hide(name: keyof IDialogState): void {
      this.$state[name].visible = false;
    }
  }
})
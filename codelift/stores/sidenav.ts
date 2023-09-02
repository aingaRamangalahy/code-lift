import { defineStore } from "pinia";

export const useSidenavStore = defineStore('sidenav', {
  state: () => ({ open: false }),
  getters: {
    sidenavStatus: (state) => state.open,
  },
  actions: {
    toggle() {
      this.open = !this.open
    }
  }
})
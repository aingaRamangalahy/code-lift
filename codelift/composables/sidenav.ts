import { storeToRefs } from "pinia";
import { useSidenavStore } from "~/stores/sidenav"

export const useSidenav = () => {
  const sidenavStore = useSidenavStore()

  const { sidenavStatus } = storeToRefs(sidenavStore);

  const toggle = () => {
    sidenavStore.toggle()
  }

  return {
    sidenavStatus,
    toggle
  }
}
import { useDialogStore } from "~/stores/dialog"

export const useResource = () => {

  const dialogStore = useDialogStore();

  const addResource = () => {
    console.log('should add resource')
    dialogStore.show('addResource')
  } 

  return {
    addResource,
  }
}
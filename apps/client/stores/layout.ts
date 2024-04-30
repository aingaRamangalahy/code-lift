export const useLayoutStore = defineStore('layout', {
    state: () => ({
        signInModal: false,
        signUpModal: false,
        addResource: false,
    }),

    getters: {
        isShown(state) {
            return (type: string) => {
                return state[type as keyof typeof state]
            }
        },
    },
    actions: {
        showModal(type: string) {
            this.$state[type as keyof typeof this.$state] = true
        },

        hideModal(type: string) {
            this.$state[type as keyof typeof this.$state] = false
        },
    },
})

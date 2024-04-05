import type { IUser } from '../../shared-types/index'
import { login, register } from '~/api/auth'
export const useAuthStore = defineStore('auth', {
    state: () => ({
        currentUser: {} as IUser,
        isLoading: false,
    }),

    getters: {
        getCurrentUser(state) {
            return state.currentUser
        },
    },
    actions: {
        async login(email: string, password: string) {
            try {
                this.isLoading = true
                const user: IUser = await login(email, password)
                if (user) this.currentUser = user
                useLayoutStore().hideModal("signInModal")
            } finally {
                this.isLoading = false
            }
        },

        async register(name: string, email: string, password: string) {
            try {
                this.isLoading = true
                const user: IUser = await register(name, email, password);
                if (user) this.currentUser = user
                useLayoutStore().hideModal("signUpModal")
            } finally {
                this.isLoading = false
            }
        }
    },
})

import type { IUser } from '@cl/types'
import { login, register } from '~/services/auth'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        currentUser: undefined as IUser | undefined,
        isLoading: false,
    }),

    getters: {
        getCurrentUser(state) {
            return state.currentUser
        },
    },
    actions: {
        async login(email: string, password: string) {
            const toast = useToast()
            try {
                this.isLoading = true
                const user = await login(email, password)
                this.currentUser = user
                useLayoutStore().hideModal('signInModal')
                toast.add({ title: 'User connected successfully' })
            } catch (error) {
                toast.add({ title: 'Error occured' })
            } finally {
                this.isLoading = false
            }
        },

        async register(name: string, email: string, password: string) {
            try {
                this.isLoading = true
                const user = await register(name, email, password)
                if (user) this.currentUser = user
                useLayoutStore().hideModal('signUpModal')
            } finally {
                this.isLoading = false
            }
        },
    },
})

import type { IUser } from '@cl/types'
import { login, register, logout } from '~/services/auth'

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
        setCurrentUser(user: IUser | undefined) {
            this.currentUser = user
        },

        async login(email: string, password: string) {
            const toast = useToast()
            try {
                this.isLoading = true
                const user = await login(email, password)
                this.setCurrentUser(user)
                useLayoutStore().hideModal('signInModal')
                toast.add({ title: 'User connected successfully' })
            } finally {
                this.isLoading = false
            }
        },

        async register(name: string, email: string, password: string) {
            try {
                this.isLoading = true
                const user = await register(name, email, password)
                if (user) this.setCurrentUser(user)
                useLayoutStore().hideModal('signUpModal')
            } finally {
                this.isLoading = false
            }
        },

        async logout(userId: string) {
            try {
                this.isLoading = true
                await logout(userId)
                this.currentUser = undefined
            } finally {
                this.isLoading = false
            }
        },
    },
})

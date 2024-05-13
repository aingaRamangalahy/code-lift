import type { IUser } from '@cl/types'
import { loginService, registerService, logoutService } from '~/services/auth'

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
                const user = await loginService(email, password)
                this.setCurrentUser(user)
                localStorage.setItem('user', JSON.stringify(user))
                useLayoutStore().hideModal('signInModal')
                toast.add({ title: 'User connected successfully' })
            } finally {
                this.isLoading = false
            }
        },

        async register(name: string, email: string, password: string) {
            try {
                this.isLoading = true
                const user = await registerService(name, email, password)
                this.setCurrentUser(user)
                localStorage.setItem('user', JSON.stringify(user))
                useLayoutStore().hideModal('signUpModal')
            } finally {
                this.isLoading = false
            }
        },

        async logout(userId: string) {
            try {
                this.isLoading = true
                await logoutService(userId)
                this.currentUser = undefined
                localStorage.removeItem('user')
                useToken().removeToken()
            } finally {
                this.isLoading = false
            }
        },
    },
})

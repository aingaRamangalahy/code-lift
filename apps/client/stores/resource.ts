import type { IResource } from '@cl/types'
import { getAllResources } from '~/services/resource'

export const useResourceStore = defineStore('resource', {
    state: () => ({
        resources: [] as IResource[],
        isLoading: false,
    }),

    getters: {
        getResources(state) {
            return state.resources
        },

        getResourceById() {
            return (resourceId: string) => {
                return this.resources.find(
                    (item: IResource) => item._id === resourceId
                )
            }
        },
    },
    actions: {
        async fetchResources() {
            try {
                this.resources = await getAllResources()
                console.log('got resources', this.resources)
            } catch (error) {
                console.error('&$-*ù', error)
            } finally {
                this.isLoading = false
            }
        },
    },
})

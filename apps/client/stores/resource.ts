import type { IResource } from '@cl/types'
import { getResourcesService, addResourceService } from '~/services/resource'

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
                this.isLoading = true
                this.resources = await getResourcesService()
            } finally {
                this.isLoading = false
            }
        },

        async addResource(resource: IResource) {
            try {
                this.isLoading = true
                const result = await addResourceService(resource)
                this.resources.unshift(result)
                useLayoutStore().hideModal('addResource')
            } finally {
                this.isLoading = false
            }
        },
    },
})

import type { ITopic } from '@cl/types'
import { getTopicsService } from '~/services/topic'

export const useTopicStore = defineStore('topic', {
    state: () => ({
        topics: [] as ITopic[],
        isLoading: false,
    }),

    getters: {
        getTopics(state) {
            return state.topics
        },
    },
    actions: {
        async fetchTopics() {
            try {
                this.isLoading = true
                this.topics = await getTopicsService()
            } finally {
                this.isLoading = false
            }
        },
    },
})

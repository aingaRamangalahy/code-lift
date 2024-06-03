import type { ITopic } from '@cl/types'
import { getTopicsService } from '~/services/topic'

export const useTopicStore = defineStore('topic', {
    state: () => ({
        topics: [] as ITopic[],
        currentTopic: undefined as ITopic | undefined,
        isLoading: false,
    }),

    getters: {
        getTopics(state) {
            return state.topics
        },

        getTopicById(state) {
            return (id: string) =>
                state.topics.find((topic) => topic._id === id)
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

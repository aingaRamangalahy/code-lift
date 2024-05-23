import type { ITopic } from '@cl/types'
import { TOPICS_ROUTES } from '~/enums/routes'

export const getTopicsService = async (): Promise<ITopic[]> => {
    const { data } = await useApi(TOPICS_ROUTES.BASE)
    return data
}

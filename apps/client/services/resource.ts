import type { IResource } from '@cl/types'
import { RESOURCES_ROUTES } from '~/enums/routes'

export const getAllResources = async (): Promise<IResource[]> => {
    const { data } = await useApi(RESOURCES_ROUTES.GET_ALL)
    return data
}

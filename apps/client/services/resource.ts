import type { IResource } from '@cl/types'
import { RESOURCES_ROUTES } from '~/enums/routes'

export const getAllResources = async (): Promise<IResource[]> => {
    const { data } = await useApi(RESOURCES_ROUTES.BASE)
    return data
}

export const addResource = async (resource: IResource): Promise<IResource> => {
    const { data } = await useApi(RESOURCES_ROUTES.BASE, {
        method: 'POST',
        body: resource,
    })
    return data
}

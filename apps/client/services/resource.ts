import type { IResource, IResourcePayloadData } from '@cl/types'
import { RESOURCES_ROUTES } from '~/enums/routes'

export const getResourcesService = async (): Promise<IResource[]> => {
    const { data } = await useApi(RESOURCES_ROUTES.BASE)
    return data
}

export const addResourceService = async (
    resource: IResourcePayloadData
): Promise<IResource> => {
    const { data } = await useApi(RESOURCES_ROUTES.BASE, {
        method: 'POST',
        body: resource,
    })
    return data
}

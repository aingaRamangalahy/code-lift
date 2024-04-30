import { Service } from 'typedi';
import { IResourceDocument } from './resource.interface';
import Resource from './resource.model';
import { ErrorResponse } from '@core/utils';
import { ResourceRepository } from './resource.repository';
import { IFindPayload } from '@core/interfaces';

@Service()
export default class ResourceService {
    private readonly resourceRepository: ResourceRepository;

    constructor() {
        this.resourceRepository = new ResourceRepository(Resource);
    }

    createResource = async (resourcePayload: IResourceDocument) => {
        try {
            const resource =
                await this.resourceRepository.addResource(resourcePayload);
            return {
                success: true,
                data: resource,
            };
        } catch (error) {
            /**thorw errors to let erroHandler handle them */
            throw error;
        }
    };

    getAllResources = async () => {
        try {
            const getResourcePayload: IFindPayload = {
                populateFields: ['topics'],
                sortBy: {
                    field: 'createdAt',
                    direction: 'desc',
                },
            };
            const resources =
                await this.resourceRepository.getResources(getResourcePayload);
            return {
                success: true,
                data: [],
            };
        } catch (error) {
            throw error;
        }
    };

    getResourceById = async (id: string) => {
        try {
            const populateFields = ['topics'];
            const resource = await this.resourceRepository.getResourceById(
                id,
                populateFields,
            );

            if (!resource) {
                throw new ErrorResponse(
                    `Resource with id: ${id} not found`,
                    404,
                );
            }

            return {
                success: true,
                data: resource,
            };
        } catch (error) {
            throw error;
        }
    };

    updateResource = async (id: string, resourcePayload: IResourceDocument) => {
        try {
            const resource = await this.resourceRepository.updateResource(
                id,
                resourcePayload,
            );

            if (!resource) {
                throw new ErrorResponse(
                    `Resource with id: ${id} not found`,
                    404,
                );
            }

            return {
                success: true,
                data: resource,
            };
        } catch (error) {
            throw error;
        }
    };

    deleteResource = async (id: string) => {
        try {
            const resource = await this.resourceRepository.deleteResource(id);
            if (!resource) {
                throw new ErrorResponse(
                    `Resource with id: ${id} not found`,
                    404,
                );
            }
            return {
                success: true,
                data: `Resource removed successfully`,
            };
        } catch (error) {
            throw error;
        }
    };
}

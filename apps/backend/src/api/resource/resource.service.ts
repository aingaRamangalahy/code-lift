import { IResourceDocument } from './resource.interface';
import Resource from './resource.model';
import { ErrorResponse } from '@core/utils';

export const createResource = async (resourcePayload: IResourceDocument) => {
    try {
        const resource = await Resource.create(resourcePayload);
        return {
            success: true,
            data: resource,
        };
    } catch (error) {
        throw error;
    }
};

export const getResources = async () => {
    try {
        console.log('getting all Resources...🔥 ');
        const resources = await Resource.find().populate('topics').sort({
            createdAt: -1,
        });
        return {
            success: true,
            data: resources,
        };
    } catch (error) {
        throw error;
    }
};

export const getResourceById = async (id: string) => {
    try {
        const resource = await Resource.findById(id).populate('topics');
        if (!resource) {
            throw new ErrorResponse(`Resource with id: ${id} not found`, 404);
        }
        return {
            success: true,
            data: resource,
        };
    } catch (error) {
        throw error;
    }
};

export const updateResource = async (
    id: string,
    resourcePayload: IResourceDocument,
) => {
    try {
        const resource = await Resource.findByIdAndUpdate(id, resourcePayload, {
            new: true,
            runValidators: true,
        }).populate('topics');
        if (!resource) {
            throw new ErrorResponse(`Resource with id: ${id} not found`, 404);
        }
        return {
            success: true,
            data: resource,
        };
    } catch (error) {
        throw error;
    }
};

export const deleteResource = async (id: string) => {
    try {
        const resource = await Resource.findByIdAndDelete(id);
        if (!resource) {
            throw new ErrorResponse(`Resource with id: ${id} not found`, 404);
        }
        return {
            success: true,
            data: `Resource removed successfully`,
        };
    } catch (error) {
        throw error;
    }
};

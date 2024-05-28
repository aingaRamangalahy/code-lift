import type { ObjectId } from 'mongoose'
import type { ITopic } from './topic'

interface IBaseResource {
    title: string
    description: string
    publisher: string | ObjectId
    url: string
    type?: string
    difficulty?: string
    vote?: number
    createdAt?: Date
    updatedAt?: Date
}

// Interface for payload data when creating or updating a resource
export interface IResourcePayloadData extends IBaseResource {
    topics?: string[]
}

// Interface for a resource retrieved from the database
export interface IResource extends IBaseResource {
    _id: string
    topics?: ITopic[]
}

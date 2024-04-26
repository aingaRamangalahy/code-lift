import type { ObjectId } from 'mongoose'

export interface IResourceData {
    title: string
    description: string
    publisher: string | ObjectId
    url: string
    type?: string
    difficulty?: string
    vote?: number
    topics?: string[]
    createdAt?: Date
    updatedAt?: Date
}

export interface IResource extends IResourceData {
    _id?: string
}

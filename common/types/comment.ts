import type { ObjectId } from 'mongoose'

export interface IComment {
    content: string
    resource: string | ObjectId
    user: string | ObjectId
    parentComment?: string | ObjectId
    createdAt?: Date
    updatedAt?: Date
}

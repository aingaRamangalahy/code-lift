import type { ObjectId } from 'mongoose'

export interface ITopicData {
    name: string
    description: string
    isShared: boolean
    level: number
    user: string | ObjectId
    parent: string | ObjectId
    category: string | ObjectId
    icon?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface ITopic extends ITopicData {
    _id?: string
}

export interface ITopicData {
    name: string
    description: string
    icon?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface ITopic extends ITopicData {
    _id?: string
}

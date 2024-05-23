export interface ITopicData {
    name: String
    description: String
    createdAt?: Date
    updatedAt?: Date
}

export interface ITopic extends ITopicData {
    _id?: string
}

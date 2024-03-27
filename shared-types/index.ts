export interface IResource {
    title: string
    description: string
    publisher: string
    url: string
    type?: string
    difficulty?: string
    vote?: number
    topics?: string[]
    createdAt?: Date
    updatedAt?: Date
}

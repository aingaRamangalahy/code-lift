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

export interface IUser {
    name: string;
    email: string;
    role: string;
    password: string;
    connected: boolean;
    activated: boolean;
    photo: string;
    about: string;
    createdAt: Date;
    updatedAt?: Date;
    resetPasswordToken?: String,
    resetPasswordExpire?: number,
}

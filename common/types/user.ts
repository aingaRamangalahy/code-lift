export interface IUserData {
    name: string
    email: string
    role: string
    password: string
    connected: boolean
    activated: boolean
    photo: string
    about: string
    createdAt: Date
    updatedAt?: Date
    resetPasswordToken?: String
    resetPasswordExpire?: number
}

export interface IUser extends IUserData {
    _id: string
}

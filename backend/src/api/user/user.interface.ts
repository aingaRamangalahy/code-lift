import { Document } from "mongoose";

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

export interface IUserDocument extends IUser, Document {
    generateToken(): string;
    generateResetPasswordToken(): string;
    matchPassword: (password: string) => Promise<boolean>;
}
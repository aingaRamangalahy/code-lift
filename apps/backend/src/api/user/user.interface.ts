import { Document } from "mongoose";
import { IUser } from "@cl/types";

export interface IUserDocument extends IUser, Document {
    generateToken(): string;
    generateResetPasswordToken(): string;
    matchPassword: (password: string) => Promise<boolean>;
}
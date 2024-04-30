import { Document } from 'mongoose';
import { IUserData } from '@cl/types';

export interface IUserDocument extends IUserData, Document {
    generateToken(): string;
    generateResetPasswordToken(): string;
    matchPassword: (password: string) => Promise<boolean>;
}

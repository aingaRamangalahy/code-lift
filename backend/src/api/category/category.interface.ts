import { Document } from 'mongoose';
export interface ICategory {
    name: string;
    topics: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ICategoryDocument extends ICategory, Document {}

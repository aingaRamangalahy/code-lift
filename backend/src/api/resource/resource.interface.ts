import { Document, ObjectId } from "mongoose";
export interface IResource {
  title: string;
  description: string;
  publisher: string | ObjectId;
  url: string;
  type?: string;
  difficulty?: string;
  vote?: number;
  topics?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IResourceDocument extends IResource, Document {
}
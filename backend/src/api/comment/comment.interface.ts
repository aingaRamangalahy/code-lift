import { Document } from "mongoose";
export interface IComment {
  content: string;
  resource: string;
  user: string;
  parentComment?: string
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICommentDocument extends IComment, Document {
}
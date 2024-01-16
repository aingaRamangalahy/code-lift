import { Document } from 'mongoose';
export interface ITopic {
  name: String,
  description: String,
  createdAt?: Date,
  updatedAt?: Date,
}

export interface ITopicDocument extends ITopic, Document {}

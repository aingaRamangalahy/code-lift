import { Schema, model } from 'mongoose';
import { IResourceDocument } from './resource.interface';

let ResourceSchema = new Schema<IResourceDocument>(
    {
        title: {
            type: String,
            required: [true, 'Resource title is required'],
        },
        description: {
            type: String,
            required: [true, 'Resource description is required'],
        },
        publisher: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        url: {
            type: String,
            match: [
                /^(https?:\/\/)?[^\s/$.?#].[^\s]*$/i,
                'Please add a valid url',
            ],
        },
        type: String,
        difficulty: String,
        vote: Number,
        topics: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Topic',
            },
        ],
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, required: false },
    },
    { _id: true },
);

export default model<IResourceDocument>('Resource', ResourceSchema);

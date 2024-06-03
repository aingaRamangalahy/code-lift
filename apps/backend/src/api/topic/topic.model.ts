import { Schema, model } from 'mongoose';
import { ITopicDocument } from './topic.interface';

let TopicSchema = new Schema<ITopicDocument>(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
        icon: String,
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, required: false },
    },
    { _id: true },
);

export default model<ITopicDocument>('Topic', TopicSchema);

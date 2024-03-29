import { Schema, model } from 'mongoose';
import { ITopic, ITopicDocument } from './topic.interface';

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
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, required: false },
    },
    { _id: true }
);

export default model<ITopicDocument>('Topic', TopicSchema);

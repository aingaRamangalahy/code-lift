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
        parent: { type: Schema.Types.ObjectId, ref: 'Topic', default: null },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            default: null,
        },
        level: { type: Number, default: 0 },
        isShared: { type: Boolean, default: false },
        icon: String,
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, required: false },
    },
    { _id: true },
);

export default model<ITopicDocument>('Topic', TopicSchema);

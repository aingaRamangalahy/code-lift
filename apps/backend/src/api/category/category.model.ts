import { Schema, model } from 'mongoose';
import { ICategoryDocument } from './category.interface';

let CategorySchema = new Schema<ICategoryDocument>(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, required: false },
    },
    { _id: true },
);

export default model<ICategoryDocument>('Category', CategorySchema);

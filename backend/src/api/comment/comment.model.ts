import { Schema, model } from "mongoose"
import { IComment, ICommentDocument } from "./comment.interface";


let CommentSchema = new Schema<ICommentDocument>(
    {
        content: {
            type: String,
            required: [true, 'Content is required']
        },
        resource: {
            type: Schema.Types.ObjectId,
            ref: "Resource"
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        parentComment: {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, required: false },
    },
    { _id: true }
);


export default model<ICommentDocument>("Comment", CommentSchema);
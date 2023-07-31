import { Schema, Types } from "mongoose";
import { IComment, ICommentMethods, ICommentStatics } from "./comment.interface";
import { z } from "zod";

export const CommentMongooseSchema = new Schema<IComment, ICommentMethods, ICommentStatics>({
    comment: {
        type: String,
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}, {
    toJSON: {
        virtuals: true
    },
    timestamps: true
});


export const CommentZodSchema = z.object({
    comment: z.string(),
    postId: z.string(),
    user: z.string()
}).strict();
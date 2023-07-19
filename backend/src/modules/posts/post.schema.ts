import { Schema } from "mongoose";
import { IPost, IPostMethods, IPostStatics } from "./post.interface";
import { z } from "zod";

export const PostMongooseSchema = new Schema<IPost, IPostMethods, IPostStatics>({
    postBody: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: {
        type: [{
            type: String,
            required: true,
        }],
    },
    media: {
        type: [String],
        default: null,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ["In Progress", "Resolved", "Unresolved", "Rejected"],
        default: "In Progress"
    },
    priority: {
        type: String,
        enum: ["High", "Low", "Medium"],
        default: "Medium"
    },
    comments: {
        type: Number,
        default: 0
    },
    upvotes: {
        type: Number,
        default: 0
    }
}, {
    toJSON: {
        virtuals: true
    },
    timestamps: true
});

export const PostZodSchema = z.object({
    postBody: z.string(),
    category: z.string(),
    user: z.string(),
    tags: z.array(z.string()).min(1),
    media: z.array(z.string()).nullable(),
});
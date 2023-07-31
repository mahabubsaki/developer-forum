import { Model, Types, Document } from "mongoose";
import { IUser } from "../users/user.interface";
import { IComment } from "../comments/comment.interface";

export interface IPost {
    postBody: string;
    category: string;
    tags: string[];
    media: string[] | null;
    user: Types.ObjectId | IUser;
    status: "In Progress" | "Resolved" | "Unresolved" | "Rejected";
    priority: "High" | "Medium" | "Low";
    comments: number;
    upvotes: number;
    id: string;
}

export interface IPostWithComment extends IPost {
    allComment: IComment[];
}

export interface IPostMethods {
    demo: () => string;
}

export interface IPostStatics extends Model<IPost, object, IPostMethods> {
    demo: () => string;
}
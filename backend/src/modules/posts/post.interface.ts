import { Model, Types } from "mongoose";
import { IUser } from "../users/user.interface";

export interface IPost extends Document {
    postBody: string;
    category: string;
    tags: string[];
    media: string[] | null;
    user: Types.ObjectId | IUser;
    status?: "In Progress" | "Resolved" | "Unresolved" | "Rejected";
    priority?: "High" | "Medium" | "Low";
    comments?: number;
    upvotes?: number;
}

export interface IPostMethods {
    demo: () => string;
}

export interface IPostStatics extends Model<IPost, object, IPostMethods> {
    demo: () => string;
}
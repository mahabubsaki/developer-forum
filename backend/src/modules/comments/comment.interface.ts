import { Model, Types } from "mongoose";
import { IPost } from "../posts/post.interface";
import { IUser } from "../users/user.interface";

export interface IComment {
    postId: Types.ObjectId | IPost;
    user: Types.ObjectId | IUser;
    comment: string;
}

export interface ICommentMethods {
    demo: () => string;
}

export interface ICommentStatics extends Model<IComment, object, ICommentMethods> {
    demo: () => string;
}
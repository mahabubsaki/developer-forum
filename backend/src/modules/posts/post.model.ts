import { model } from "mongoose";
import { IPost, IPostStatics } from "./post.interface";
import { PostMongooseSchema } from "./post.schema";

export const Post = model<IPost, IPostStatics>('Post', PostMongooseSchema);
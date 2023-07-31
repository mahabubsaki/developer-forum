import { model } from "mongoose";
import { IComment, ICommentStatics } from "./comment.interface";
import { CommentMongooseSchema } from "./comment.schema";

export const Comment = model<IComment, ICommentStatics>('Comment', CommentMongooseSchema);
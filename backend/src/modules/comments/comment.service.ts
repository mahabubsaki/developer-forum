import { startSession } from "mongoose";
import { ApiError } from "../../shared/ApiError";
import { commentIncrease } from "../posts/post.service";
import { IComment } from "./comment.interface";
import { Comment } from "./comment.model";

export const createComment = async (payload: IComment) => {
    let session = await startSession();
    let result = null;
    try {
        session.startTransaction();
        const createResult = await (await (await Comment.create(payload)).populate('postId')).populate('user');
        const updateResult = await commentIncrease(payload.postId.toString());
        result = { createResult, updateResult };
        session.commitTransaction();
        session.endSession();
    }
    catch (err) {
        session.abortTransaction();
        session.endSession();
        throw err;
    }
    return result;
};
import { startSession } from "mongoose";
import { IPost, IPostWithComment } from "./post.interface";
import { Post } from "./post.model";
import { Comment } from "../comments/comment.model";
import { ApiError } from "../../shared/ApiError";

export const createPost = async (payload: IPost): Promise<IPost> => {
    const result = (await Post.create(payload)).populate('user');
    return result;
};

export const getAllPost = async (): Promise<IPost[]> => {
    const result = await Post.find().populate('user');
    return result;
};

export const commentIncrease = async (postId: string): Promise<IPost | null> => {
    const result = await Post.findByIdAndUpdate(postId, { $inc: { comments: 1 } }, { new: true });
    return result;
};
export const getSinglePostWithComment = async (id: string): Promise<IPostWithComment | null> => {

    let session = await startSession();
    let result = null;
    try {
        session.startTransaction();
        const post = await Post.findById(id).populate('user');
        const comment = await Comment.find({ postId: id }).populate('user');
        if (post && comment) {
            const postWithComment: IPostWithComment = { ...post.toObject(), allComment: comment, id: post._id.toString() };
            result = postWithComment;
        } else {
            throw new ApiError(500, "No post found with the given id");
        }
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
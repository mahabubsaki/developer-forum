import { IPost } from "./post.interface";
import { Post } from "./post.model";

export const createPost = async (payload: IPost): Promise<IPost> => {
    const result = (await Post.create(payload)).populate('user');
    return result;
};

export const getAllPost = async (): Promise<IPost[]> => {
    const result = await Post.find().populate('user');
    return result;
};
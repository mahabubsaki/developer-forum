import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { IPost, IPostWithComment } from "./post.interface";
import { createPost, getAllPost, getSinglePostWithComment } from "./post.service";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

export const createPostController = catchAsync(async (req: Request, res: Response) => {
    const postData: IPost = req.body;
    const result = await createPost(postData);
    sendResponse<IPost>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Post created successfully"
    });
});


export const getAllPostsController = catchAsync(async (req: Request, res: Response) => {
    const result = await getAllPost();
    sendResponse<IPost[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "All posts retrieved successfully"
    });
});

export const getSinglePostWithCommentController = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await getSinglePostWithComment(id);
    sendResponse<IPostWithComment>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: `Post retrieved with id ${id}`
    });
});
import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { IPost } from "./post.interface";
import { createPost } from "./post.service";
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

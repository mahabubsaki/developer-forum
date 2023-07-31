import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { IComment } from "./comment.interface";
import { createComment } from "./comment.service";

export const createCommentController = catchAsync(async (req: Request, res: Response) => {
    const commentData: IComment = req.body;
    const result = await createComment(commentData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Commented successfully"
    });
});
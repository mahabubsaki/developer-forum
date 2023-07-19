import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { ILoginUser, IUser, IUserWithToken } from "./user.interface";
import { logIn, signUp, userVerify } from "./user.service";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

export const signUpController = catchAsync(async (req: Request, res: Response) => {
    const postData: IUser = req.body;
    const result = await signUp(postData);
    sendResponse<IUserWithToken>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "User signed up successfully"
    });
});

export const logInController = catchAsync(async (req: Request, res: Response) => {
    const postData: ILoginUser = req.body;
    const result = await logIn(postData);
    sendResponse<IUserWithToken>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "User logged in successfully"
    });
});


export const userVerifyController = catchAsync(async (req: Request, res: Response) => {
    const { email } = req.body;
    const result = await userVerify(email);
    sendResponse<IUser>(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "User is successfully authenticated"
    });
});
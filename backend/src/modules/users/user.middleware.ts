import { RequestHandler } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from "./user.model";
import { ApiError } from "../../shared/ApiError";
import httpStatus from "http-status";
import { LoginZodSchema, UserZodSchema } from "./user.schema";
import config from "../../config";


export const validateSignedUpUser: RequestHandler = async (req, _, next): Promise<void> => {
    try {
        await UserZodSchema.parseAsync(req.body);
        next();
    }
    catch (err) {
        next(err);
    }
};

export const validateDuplicateUser: RequestHandler = async (req, _, next): Promise<void> => {
    const isExist = await User.findOne({ email: req.body.email });
    if (isExist) {
        const error = new ApiError(httpStatus.CONFLICT, "User Already exist with this email");
        return next(error);
    }
    next();
};
export const validateLoginUser: RequestHandler = async (req, _, next): Promise<void> => {
    try {
        await LoginZodSchema.parseAsync(req.body);
        next();
    }
    catch (err) {
        next(err);
    }
};

export const validateToken: RequestHandler = async (req, _, next): Promise<void> => {
    try {
        const token = req?.headers?.authorization?.split(' ')[1] === 'null' ? null : req?.headers?.authorization?.split(' ')[1];
        if (!token) {

            return next({ message: "Please log in access home page" });
        }
        const decoded = jwt.verify(token, config.jwtSecret as string) as JwtPayload;
        req.body.email = decoded.email;
        next();
    }
    catch (err) {
        next(err);
    }
};
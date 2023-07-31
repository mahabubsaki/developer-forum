import { RequestHandler } from "express";
import { PostZodSchema } from "./post.schema";
import { Types } from "mongoose";

export const validateCreatedPost: RequestHandler = async (req, _, next): Promise<void> => {
    try {
        await PostZodSchema.parseAsync(req.body);
        next();
    }
    catch (err) {
        next(err);
    }
};

export const validateObjectId: RequestHandler = async (req, _, next): Promise<void> => {
    if (Types.ObjectId.isValid(req.params.id)) {
        next();
    } else {
        next({ message: "Invalid object id" });
    }
};

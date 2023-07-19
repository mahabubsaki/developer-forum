import { RequestHandler } from "express";
import { PostZodSchema } from "./post.schema";

export const validateCreatedPost: RequestHandler = async (req, _, next): Promise<void> => {
    try {
        await PostZodSchema.parseAsync(req.body);
        next();
    }
    catch (err) {
        next(err);
    }
};
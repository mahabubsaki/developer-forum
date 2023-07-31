import { RequestHandler } from "express";
import { CommentZodSchema } from "./comment.schema";


export const validateCreatedComment: RequestHandler = async (req, _, next): Promise<void> => {
    try {
        await CommentZodSchema.parseAsync(req.body);
        next();
    }
    catch (err) {
        next(err);
    }
};
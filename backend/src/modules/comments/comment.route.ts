import express from 'express';
import { validateCreatedComment } from './comment.middleware';
import { createCommentController } from './comment.controller';
const commentRouter = express.Router();


commentRouter.post('/create-comment', validateCreatedComment, createCommentController);

export default commentRouter;
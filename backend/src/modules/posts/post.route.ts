import express from 'express';
import { createPostController } from './post.controller';
import { validateCreatedPost } from './post.middleware';

const postRouter = express.Router();


postRouter.post('/create-post', validateCreatedPost, createPostController);

export default postRouter;
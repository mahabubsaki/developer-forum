import express from 'express';
import { createPostController, getAllPostsController } from './post.controller';
import { validateCreatedPost } from './post.middleware';

const postRouter = express.Router();


postRouter.post('/create-post', validateCreatedPost, createPostController);
postRouter.get('/', getAllPostsController);

export default postRouter;
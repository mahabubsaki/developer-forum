import express from 'express';
import { createPostController, getAllPostsController, getSinglePostWithCommentController } from './post.controller';
import { validateCreatedPost } from './post.middleware';

const postRouter = express.Router();


postRouter.post('/create-post', validateCreatedPost, createPostController);
postRouter.get('/', getAllPostsController);
postRouter.get('/:id', getSinglePostWithCommentController);

export default postRouter;
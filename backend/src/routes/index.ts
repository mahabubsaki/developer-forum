import express from "express";
import postRouter from "../modules/posts/post.route";
import userRouter from "../modules/users/user.route";
import commentRouter from "../modules/comments/comment.route";
const router = express.Router();

const applicationRoutes = [
    { path: '/posts', controller: postRouter },
    { path: '/users', controller: userRouter },
    { path: '/comments', controller: commentRouter }
];

applicationRoutes.forEach(route => {
    router.use(route.path, route.controller);
});

export default router;

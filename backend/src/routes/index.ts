import express from "express";
import postRouter from "../modules/posts/post.route";
import userRouter from "../modules/users/user.route";
const router = express.Router();

const applicationRoutes = [
    { path: '/posts', controller: postRouter },
    { path: '/users', controller: userRouter }
];

applicationRoutes.forEach(route => {
    router.use(route.path, route.controller);
});

export default router;

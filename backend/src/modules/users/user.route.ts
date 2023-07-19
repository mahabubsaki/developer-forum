import express from 'express';
import { validateDuplicateUser, validateLoginUser, validateSignedUpUser, validateToken } from './user.middleware';
import { logInController, signUpController, userVerifyController } from './user.controller';
const userRouter = express.Router();


userRouter.post('/signup', validateSignedUpUser, validateDuplicateUser, signUpController);
userRouter.post('/login', validateLoginUser, logInController);
userRouter.get('/user', validateToken, userVerifyController);

export default userRouter;

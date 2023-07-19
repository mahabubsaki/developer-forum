import config from "../../config";
import { ILoginUser, IUser, IUserWithToken } from "./user.interface";
import { User } from "./user.model";
import jwt from 'jsonwebtoken';
import { generateJwtToken } from "./user.utils";
import { ApiError } from "../../shared/ApiError";
import httpStatus from "http-status";



export const signUp = async (payload: IUser): Promise<IUserWithToken> => {
    const instance = new User(payload);
    instance.uid = instance.generateId();
    const token = generateJwtToken(instance.email, instance.id);
    await instance.save();
    return { ...instance.toObject(), token: token };
};

export const logIn = async (payload: ILoginUser): Promise<IUserWithToken | null> => {
    const result = await User.findOne({ email: payload.email });
    if (!result) {
        throw new ApiError(httpStatus.FORBIDDEN, "User not found with given email");
    }

    if (result.password !== payload.password) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid password given");
    }
    const token = generateJwtToken(result.email, result.id);
    return { ...result.toObject(), token };

};

export const userVerify = async (payload: string): Promise<IUser | null> => {
    const result = await User.findOne({ email: payload });
    return result;

};
import { Model } from "mongoose";

export interface IUser extends Document {
    email: string;
    password: string;
    uid: string;
    name: string;
    role: "user" | "admin";
    batch: string;
}
export interface IUserWithToken extends IUser {
    token: string;
}

export interface ILoginUser {
    email: string;
    password: string;
}

export interface IUserMethods {
    generateId: () => string;
}

export interface IUserStatics extends Model<IUser, object, IUserMethods> {
    demo: () => string;
}
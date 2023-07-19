import { Schema } from "mongoose";
import { z } from "zod";
import { IUser, IUserMethods, IUserStatics } from "./user.interface";

export const UserMongooseSchema = new Schema<IUser, IUserMethods, IUserStatics>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin"]
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    toJSON: {
        virtuals: true
    },
    timestamps: true
});


UserMongooseSchema.method('generateId', function () {
    const timestamp = new Date().getTime().toString(16);
    const randomPart = Math.floor(Math.random() * 0x1000000).toString(16);
    return `${timestamp}-${randomPart}`;
});


export const UserZodSchema = z.object({
    email: z.string().email(),
    password: z.string().refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value), {
        message: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit',
    }),
    name: z.string(),
    role: z.enum(['user', 'admin'])
});


export const LoginZodSchema = z.object({
    email: z.string().email(),
    password: z.string().refine((value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value), {
        message: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit',
    })
}).strict();

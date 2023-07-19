export type TPost = {
    postBody: string;
    category: string;
    tags: string[];
    media: string[] | null;
    user: TUser;
    status?: "In Progress" | "Resolved" | "Unresolved" | "Rejected";
    priority?: "High" | "Medium" | "Low";
    comments?: number;
    upvotes?: number;
    createdAt: Date;
};

export type TUser = {
    email: string;
    password: string;
    uid: string;
    name: string;
    role: "user" | "admin";
    batch: string;
};
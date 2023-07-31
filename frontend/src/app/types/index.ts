export type TPost = {
    postBody: string;
    category: string;
    tags: string[];
    media: string[] | null;
    user: TUser;
    status: "In Progress" | "Resolved" | "Unresolved" | "Rejected";
    priority: "High" | "Medium" | "Low";
    comments: number;
    upvotes: number;
    createdAt: Date;
    id: string;
};

export type TPostWithComment = TPost & {
    allComment: TComment[];
};

export type TComment = {
    comment: string;
    postId: TPost;
    user: TUser;
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



export type hanldePostCommentType = (newComment: string, id: string | undefined, postId: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setComment: React.Dispatch<React.SetStateAction<string>>, setComments: React.Dispatch<React.SetStateAction<number>> | undefined, needComment: boolean) => Promise<void | { createResult: TComment, updateResult: TPost; }>;
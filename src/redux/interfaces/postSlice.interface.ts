import { UploadFile } from "antd";

export interface IPost {
    postBody: string,
    category: string,
    tags: string[],
    media: Partial<UploadFile[]>;
}
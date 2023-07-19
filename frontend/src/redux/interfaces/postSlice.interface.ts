import { UploadFile } from "antd";

export default interface IPostSlice {
    postBody: string,
    category: string,
    tags: string[],
    media: Partial<UploadFile[]>;
    loading: boolean;
}

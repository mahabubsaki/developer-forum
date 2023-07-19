import axios from "axios";

const getPosts = async () => {
    const { data } = await axios({ baseURL: "https://developer-forum-backend.vercel.app/api/v1/posts", method: "GET" });
    return data;
};

export default getPosts;
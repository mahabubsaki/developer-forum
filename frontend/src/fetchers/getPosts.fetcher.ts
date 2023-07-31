import axios from "axios";

const getPosts = async () => {
    const { data } = await axios({ baseURL: "http://localhost:5000/api/v1/posts", method: "GET" });
    return data;
};

export default getPosts;
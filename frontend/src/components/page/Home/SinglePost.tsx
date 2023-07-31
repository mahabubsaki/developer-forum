
'use client';
import { TPost, TPostWithComment, hanldePostCommentType } from '@/app/types';
import React, { useState } from 'react';
import { BiMessageAltDetail } from 'react-icons/bi';
import Inputs from "@/components/common/Input";
import { useSelector } from "react-redux";
import { selectAuth } from "@/redux/reducers/authSlice";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { Spin } from "antd";
import CommonPostPart from "./CommonPostPart";

interface Props {
    post: TPost;
    setSinglePost: React.Dispatch<React.SetStateAction<TPostWithComment | null>>;
    handlePostComment: hanldePostCommentType;
    setAllPosts: React.Dispatch<React.SetStateAction<TPost[]>>;
    posts: TPost[];
}

const SinglePost = ({ post, setSinglePost, handlePostComment, posts, setAllPosts }: Props) => {
    const [loading, setLoading] = useState(false);
    const [comment, setComment] = useState('');
    const { user } = useSelector(selectAuth);

    const handleOpenSinglePostModal = async (id: string) => {
        try {
            const data = await axios({ method: 'GET', baseURL: `https://developer-forum-backend.vercel.app/api/v1/posts/${id}` });
            setSinglePost(data.data.data);
        } catch (err) {
            if (err instanceof AxiosError) {
                console.log(err);
                toast.error(err.response?.data.errorMessages[0]?.message);
            }
        }
    };

    const handleSinglePostComment = async () => {
        const { createResult, updateResult } = await handlePostComment(comment, user?.id, post.id, setLoading, setComment, undefined, true) || {};
        if (updateResult) {
            const index = posts.findIndex(each => each.id === updateResult?.id);

            const copyArray = [...posts];
            copyArray.splice(index, 1, updateResult);
            setAllPosts(copyArray);
        }
    };
    return (
        <div className="bg-[#F1F1F1] rounded-2xl">
            <CommonPostPart name={post.user.name} createdAt={post.createdAt} batch={post.user.batch} status={post.status} postBody={post.postBody} media={post.media} />
            <div className="m-6 pb-6 border-b-2 border-[rgba(0, 0, 0, 0.20)]">
                <p onClick={() => handleOpenSinglePostModal(post.id)} className="flex gap-4 items-center  hover:border-b hover:border-black w-fit pb-[2px] cursor-pointer border-b border-transparent"><BiMessageAltDetail className="text-xl" />
                    <span>{post.comments} comment</span></p>
            </div>
            <div className="flex mx-6 mb-6 gap-4">
                <span className="w-[56px] block h-[56px]  rounded-full bg-[#CECECE]"></span>
                <Inputs value={comment} onChange={(e) => setComment(e.target.value)} onPressEnter={handleSinglePostComment} size="small" className="bg-[#DFDFDF] rounded-3xl pl-6 text-opacity-50" placeholder="Write a Comment" />

            </div>
            {loading ? <div className="flex justify-center mb-5">
                <Spin />
            </div> : null}
        </div>
    );
};

export default SinglePost;
import { TPost, TPostWithComment, hanldePostCommentType } from '@/app/types';
import React, { useState } from 'react';
import SinglePost from './SinglePost';
import SinglePostModal from './SinglePostModal';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';


interface Props {
    posts: TPost[];
    setAllPosts: React.Dispatch<React.SetStateAction<TPost[]>>;
}
const AllPosts = ({ posts, setAllPosts }: Props) => {
    const [singlePost, setSinglePost] = useState<null | TPostWithComment>(null);
    const handlePostComment: hanldePostCommentType = async (newComment, id, postId, setLoading, setComment, setComments, needComment) => {
        setLoading(true);
        let retrunData = null;
        try {
            const commentData = {
                comment: newComment,
                user: id,
                postId: postId
            };
            const data = await axios({ method: 'POST', data: commentData, baseURL: 'http://localhost:5000/api/v1/comments/create-comment' });
            retrunData = data.data.data;
            toast.success(data.data.message);
            setLoading(false);
            setComment('');
            if (setComments) setComments(pre => pre + 1);
        } catch (err) {
            if (err instanceof AxiosError) {
                console.log(err);
                toast.error(err.response?.data.errorMessages[0]?.message);
            }
        }
        finally {
            setLoading(false);
            setComment('');
        }
        if (needComment) return retrunData;
    };

    return (
        <div>
            <div>
                <p>{posts.length}</p>
                <div className='flex flex-col gap-8'>
                    {posts.map((each, idx) => <SinglePost setAllPosts={setAllPosts} posts={posts} handlePostComment={handlePostComment} setSinglePost={setSinglePost} key={idx} post={each} />)}
                </div>
                {singlePost ? <SinglePostModal posts={posts} setAllPosts={setAllPosts} handlePostComment={handlePostComment} setSinglePost={setSinglePost} singlePost={singlePost} /> : null}
            </div>

        </div>
    );
};

export default AllPosts;
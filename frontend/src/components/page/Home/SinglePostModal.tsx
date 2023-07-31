import { TPost, TPostWithComment, hanldePostCommentType } from '@/app/types';
import Button from '@/components/common/Button';
import { Modal, Spin } from 'antd';
import React, { useState } from 'react';
import CommonPostPart from './CommonPostPart';
import SingleComment from './SingleComment';
import Inputs from '@/components/common/Input';
import { useSelector } from 'react-redux';
import { selectAuth } from '@/redux/reducers/authSlice';


interface Props {
    setSinglePost: React.Dispatch<React.SetStateAction<TPostWithComment | null>>;
    singlePost: TPostWithComment | null;
    handlePostComment: hanldePostCommentType;
    setAllPosts: React.Dispatch<React.SetStateAction<TPost[]>>;
    posts: TPost[];

}
const SinglePostModal = ({ setSinglePost, singlePost, handlePostComment, setAllPosts, posts }: Props) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(singlePost?.allComment);
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(selectAuth);

    const handlePostCommentModal = async () => {
        const { createResult, updateResult } = await handlePostComment(comment, user?.id, singlePost?.id!!, setLoading, setComment, undefined, true) || {};

        if (createResult) {
            setComments((pre) => {
                if (pre) {
                    return [...pre, createResult];
                }
            });
        }


        if (updateResult) {
            const index = posts.findIndex(each => each.id === updateResult?.id);

            const copyArray = [...posts];
            copyArray.splice(index, 1, updateResult);
            setAllPosts(copyArray);
        }
    };
    return (
        <Modal
            title={<p className='text-center font-bold text-xl border-b pb-4'>{singlePost?.user.name}&apos;s Post</p>}
            centered
            open={!!singlePost}
            maskClosable={false}
            footer={null}
            width={1000}
            onCancel={() => setSinglePost(null)}
        >
            <div className='flex flex-col gap-3'>
                <CommonPostPart name={singlePost?.user.name!!} batch={singlePost?.user.batch!!} createdAt={singlePost?.createdAt!!} media={singlePost?.media!!} postBody={singlePost?.postBody!!} status={singlePost?.status!!} />

                <div>
                    {comments?.length ?
                        <div>
                            <p className='pb-2 font-semibold text-lg'>Comments</p>
                            <div className='h-40 border rounded-lg p-4 flex flex-col gap-6 overflow-y-auto'>
                                {comments.map((each, idx) => <SingleComment key={idx} comment={each} />)}
                            </div>
                        </div> :
                        <div className='text-center font-bold text-2xl'>
                            <p>Not yet commented on this post</p>
                        </div>}
                </div>
                <div>
                    <div className="flex mx-6 gap-4">
                        <span className="w-[56px] block h-[56px]  rounded-full bg-[#CECECE]"></span>
                        <Inputs value={comment} onChange={(e) => setComment(e.target.value)} onPressEnter={handlePostCommentModal} size="small" className="bg-[#DFDFDF] rounded-3xl pl-6 text-opacity-50" placeholder="Write a Comment" />
                    </div>
                    {loading ? <div className="flex justify-center mb-5">
                        <Spin />
                    </div> : null}
                </div>
            </div>
        </Modal>
    );
};

export default SinglePostModal;
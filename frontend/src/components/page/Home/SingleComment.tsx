import { TComment } from '@/app/types';
import timeDifference from '@/app/utils/timeDifference';
import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

interface Props {
    comment: TComment;
}

const SingleComment = ({ comment }: Props) => {
    const { comment: content, createdAt, postId, user } = comment;
    return (
        <div className='border-b flex justify-between pb-4'>
            <div className='flex items-center gap-4 '>
                <span className="w-[56px] block h-[56px]  rounded-full bg-[#CECECE]"></span>
                <div className='bg-[#3a3b3c17] px-3 py-2 rounded-2xl'>
                    <p className='text-slate-500 text-base cursor-pointer font-medium no-underline hover:underline'>{user.name}</p>
                    <p>{content}</p>
                </div>
            </div>
            <div className="flex gap-1 items-center text-[rgba(0,0,0,0.50)]">
                <AiOutlineClockCircle className="text-lg" />
                <p className="text-sm">{timeDifference(createdAt)}</p>
            </div>
        </div>
    );
};

export default SingleComment;
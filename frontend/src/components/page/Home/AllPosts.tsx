import { TPost } from '@/app/types';
import React from 'react';
import SinglePost from './SinglePost';


interface Props {
    posts: TPost[];
}
const AllPosts = ({ posts }: Props) => {
    return (
        <div>
            <div>
                <p>{posts.length}</p>
                <div className='flex flex-col gap-8'>
                    {posts.map((each, idx) => <SinglePost key={idx} post={each} />)}
                </div>
            </div>

        </div>
    );
};

export default AllPosts;
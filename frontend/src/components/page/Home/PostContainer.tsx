import { TPost } from '@/app/types';
import PostField from '@/components/client/PostField';
import React from 'react';

interface Props {
    setAllPosts: React.Dispatch<React.SetStateAction<TPost[]>>;
}

const PostContainer = ({ setAllPosts }: Props) => {
    return (
        <div>
            <PostField setAllPosts={setAllPosts} />
        </div>
    );
};

export default PostContainer;
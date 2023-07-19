'use client';

import React, { useState } from 'react';
import PostContainer from '../page/Home/PostContainer';
import AllPosts from '../page/Home/AllPosts';
import { TPost } from '@/app/types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Props {
    posts: TPost[];
}

const PostContainerWrapper = ({ posts }: Props) => {
    const [allPosts, setAllPosts] = useState(posts);
    console.log(posts);
    return (
        <React.Fragment>
            <PostContainer setAllPosts={setAllPosts} />
            <AllPosts posts={allPosts} />
        </React.Fragment>
    );
};

export default PostContainerWrapper;
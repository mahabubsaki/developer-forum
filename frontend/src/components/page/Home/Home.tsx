import React from 'react';
import Navbar from './Navbar';
import PostContainer from './PostContainer';
import Sidebar from './Sidebar';
import { TPost } from '@/app/types';
import AllPosts from './AllPosts';
import PostContainerWrapper from '@/components/client/PostContainerWrapper';
import FilterTabs from './FilterTabs';

interface Props {
    posts: TPost[];
}

const Home = ({ posts }: Props) => {
    return (
        <React.Fragment>
            <Navbar />
            <main className='px-[50px] pt-[32px] grid grid-cols-10 gap-8'>
                <section className='col-span-7'>
                    <FilterTabs />
                    <PostContainerWrapper posts={posts} />
                </section>
                <section className='col-span-3'>
                    <Sidebar />
                </section>
            </main>

        </React.Fragment>
    );
};

export default Home;
import Image from 'next/image';
import Navbar from '../components/page/Home/Navbar';
import React from 'react';
import PostContainer from '@/components/page/Home/PostContainer';
import Sidebar from '@/components/page/Home/Sidebar';
import WithAuth from '@/components/client/WithAuth';
import Home from '@/components/page/Home/Home';
import getPosts from '@/fetchers/getPosts.fetcher';



async function Page() {
  const posts = await getPosts();
  console.log({ num: posts.data });
  return (
    <WithAuth>
      <p>{posts.data.length}</p>
      <Home posts={posts.data}></Home>
    </WithAuth>
  );
}


export default Page;

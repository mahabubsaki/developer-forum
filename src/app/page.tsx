import Image from 'next/image';
import Navbar from '../components/page/Home/Navbar';
import React from 'react';
import PostContainer from '@/components/page/Home/PostContainer';
import Sidebar from '@/components/page/Home/Sidebar';
import WithAuth from '@/components/client/WithAuth';
import Home from '@/components/page/Home/Home';



function Page() {
  return (
    <WithAuth>
      <Home></Home>
    </WithAuth>
  );
}


export default Page;

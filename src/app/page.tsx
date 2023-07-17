import Image from 'next/image';
import Navbar from '../components/page/Home/Navbar';
import React from 'react';
import PostContainer from '@/components/page/Home/PostContainer';
import Sidebar from '@/components/page/Home/Sidebar';

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <main className='px-[50px] pt-[32px] grid grid-cols-10 gap-8'>
        <section className='col-span-7'>
          <PostContainer />
        </section>
        <section className='col-span-3'>
          <Sidebar />
        </section>
      </main>
    </React.Fragment>
  );
}

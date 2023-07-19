import React from 'react';
import Navbar from './Navbar';
import PostContainer from './PostContainer';
import Sidebar from './Sidebar';

const Home = () => {
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
};

export default Home;
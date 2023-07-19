import React from 'react';
import NavSearchBar from '../../client/NavSearchBar';


import Bookmark from '@/components/icons/Bookmark';
import Notification from '@/components/icons/Notification';
import Avatar from '@/components/common/Avatar';

const Navbar = () => {
    return (
        <nav className='bg-grays items-center px-[50px] py-[35px] flex justify-between'>
            <section>
                <h1 className='text-black text-3xl font-bold'>P.H Forum</h1>
            </section>
            <ul className='flex items-center gap-[40px]'>
                <li className='opacity-60 cursor-pointer duration-300 hover:text-blue-600'>
                    About
                </li>
                <li className='opacity-60 cursor-pointer hover:text-blue-600 duration-300'>
                    Terms & Condirtions
                </li>
                <li>
                    <NavSearchBar />
                </li>
                <ul className='flex items-center gap-5'>
                    <li>
                        <div className='w-[48px] h-[48px] justify-center items-center flex text-xl bg-[#e2e2e2] rounded-full'>
                            <Bookmark />
                        </div>
                    </li>
                    <li>
                        <div className='w-[48px] h-[48px] justify-center items-center flex text-xl bg-[#e2e2e2] rounded-full'>
                            <Notification />
                        </div>
                    </li>
                    <li>
                        <Avatar />
                    </li>
                </ul>
            </ul>
        </nav>
    );
};

export default Navbar;
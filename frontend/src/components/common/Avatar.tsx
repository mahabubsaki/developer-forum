'use client';
import Image from 'next/image';
import React from 'react';
import avatar from '../../assets/download.jpeg';

const Avatar = () => {
    return (
        <Image alt='User Avatar' src={avatar} width={48} height={48} className='rounded-full' />
    );
};

export default Avatar;
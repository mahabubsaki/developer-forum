'use client';

import { Spin } from 'antd';
import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Spin />
        </div>
    );
};

export default Loading;
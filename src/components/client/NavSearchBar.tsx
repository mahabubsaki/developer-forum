'use client';
import React from 'react';
import Inputs from '../common/Input';
import { SearchOutlined } from '@ant-design/icons';

const NavSearchBar = () => {
    return (
        <div className='w-[500px] '>
            <Inputs size="large" placeholder="Search Here" prefix={< SearchOutlined />} />
        </div>
    );
};

export default NavSearchBar;
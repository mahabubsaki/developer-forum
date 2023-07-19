'use client';
import { Input } from 'antd';
import React from 'react';
import { InputProps } from 'antd/lib/input';


interface Props extends InputProps { }

const Inputs = (props: Props) => {
    return (

        <Input {...props} />

    );
};

export default Inputs;


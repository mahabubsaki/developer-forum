'use client';
import React from 'react';
import { Button as AntButton, ButtonProps } from 'antd';


interface Props extends ButtonProps {
    children: React.ReactNode;
}
const Button = (props: Props) => {
    return (
        <AntButton {...props} >
            {props.children}
        </AntButton>
    );
};

export default Button;
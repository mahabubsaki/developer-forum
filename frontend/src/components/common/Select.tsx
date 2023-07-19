'use client';
import React from 'react';
import { Select as AntSelect, SelectProps } from 'antd';


interface Props extends SelectProps { }
const Select = (props: Props) => {
    return (
        <AntSelect
            {...props}
        />
    );
};

export default Select;
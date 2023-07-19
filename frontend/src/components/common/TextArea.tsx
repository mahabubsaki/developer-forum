import React from 'react';
import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';

const { TextArea: AntTextArea } = Input;

interface Props extends TextAreaProps { }

const TextArea = (props: Props) => {
    return (
        <AntTextArea {...props} />
    );
};

export default TextArea;
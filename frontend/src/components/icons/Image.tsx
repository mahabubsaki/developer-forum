import React from 'react';
import { IconBaseProps } from 'react-icons';
import { BsCardImage } from 'react-icons/bs';


interface Props extends IconBaseProps { }
const Image = (props: Props) => {
    return (
        <BsCardImage {...props} />
    );
};

export default Image;
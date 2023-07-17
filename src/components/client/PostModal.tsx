'use client';
import { Modal } from 'antd';
import React from 'react';
import TextArea from '../common/TextArea';
import UploadMedia from './UploadMedia';
import Button from '../common/Button';


interface Props {
    modalOpen: boolean;
    text: string;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setText: React.Dispatch<React.SetStateAction<string>>;
}

const PostModal = (props: Props) => {

    return (
        <Modal
            title={<p className='text-center font-bold text-xl border-b pb-4'>Create a Post</p>}
            centered
            footer={<Button type='ghost' className='bg-black bg-opacity-100 hover:bg-opacity-70 duration-300 text-white font-semibold'>
                Post
            </Button>}
            open={props.modalOpen}
            maskClosable={false}

            onCancel={() => props.setModalOpen(false)}
        >
            <TextArea onChange={(e) => props.setText(e.target.value)} value={props.text} bordered={false} className={`${props.text.length > 40 ? 'text-base' : 'text-2xl'}`} placeholder="Share or ask something to everyone.?" autoSize={{ minRows: 4, maxRows: 7 }} />
            <UploadMedia />
        </Modal>
    );
};

export default PostModal;
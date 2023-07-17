'use client';
import React, { useState } from 'react';
import Avatar from '../common/Avatar';
import Image from '../icons/Image';
import Button from '../common/Button';
import PostModal from './PostModal';
import TextArea from '../common/TextArea';


const PostField = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => setModalOpen(true);
    const [text, setText] = useState('');
    return (
        <React.Fragment>
            <div className='bg-[#f1f1f1] rounded-lg p-6'>
                <div className='flex gap-4 mb-4 items-center'>
                    <Avatar />
                    <div className='w-full'>
                        <TextArea value={text} onFocus={handleOpenModal} placeholder='Share or ask something to everyone.?' autoSize={{ minRows: 3, maxRows: 5 }} />

                    </div>
                </div>
                <div className='flex justify-between'>

                    <Image onClick={handleOpenModal} className='text-2xl cursor-pointer' />
                    <div>
                        <Button onClick={handleOpenModal} type='ghost' className='bg-[#404040] font-semibold text-white bg-opacity-100 hover:bg-opacity-70 duration-300'>
                            Create Post
                        </Button>
                    </div>
                </div>
            </div>
            {modalOpen ? <PostModal text={text} setText={setText} modalOpen={modalOpen} setModalOpen={setModalOpen} /> : null}
        </React.Fragment>
    );
};

export default PostField;
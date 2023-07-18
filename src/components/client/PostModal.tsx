'use client';
import { Modal } from 'antd';
import React from 'react';
import TextArea from '../common/TextArea';
import UploadMedia from './UploadMedia';
import Button from '../common/Button';
import Select from '../common/Select';
import { selectPost, setPostBody } from '@/redux/reducers/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import uploadImgToCloudinary from '@/configs/cloudinery.config';


interface Props {
    modalOpen: boolean;

    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

}

const PostModal = (props: Props) => {
    const { postBody, media } = useSelector(selectPost);
    const dispatch = useDispatch();
    return (
        <Modal
            title={<p className='text-center font-bold text-xl border-b pb-4'>Create a Post</p>}
            centered
            footer={<Button onClick={async () => {
                const [...img] = await Promise.all([...media.map(each => uploadImgToCloudinary(each?.originFileObj as File))]);
                console.log(img);
            }} type='ghost' className='bg-black bg-opacity-100 hover:bg-opacity-70 duration-300 text-white font-semibold'>
                Post
            </Button>}
            open={props.modalOpen}
            maskClosable={false}

            onCancel={() => props.setModalOpen(false)}
        >
            <div className='flex flex-col gap-3'>
                <TextArea onChange={(e) => dispatch(setPostBody(e.target.value))} value={postBody} bordered={false} className={`${postBody.length > 40 ? 'text-base' : 'text-2xl'}`} placeholder="Share or ask something to everyone.?" autoSize={{ minRows: 4, maxRows: 7 }} />
                <Select placeholder='Choose a category' defaultValue={''} className='w-full' allowClear options={[{ label: "Programming Languages", value: "Programming Languages" }, { label: "Front-end Development", value: "Front-end Development" }, { label: "Back-end Development", value: "Back-end Development" }, { label: "Database Management", value: "Database Management" }, { label: "Mobile App Development", value: "Mobile App Development" }, { label: "DevOps", value: "DevOps" }, { label: "Version Control", value: "Version Control" }, { label: "Cloud Computing", value: "Cloud Computing" }, { label: "Operating Systems", value: "Operating Systems" }, { label: "Game Development", value: "Game Development" }]} />
                <Select placeholder="Please choose a tag (maximum 5)" mode='multiple' allowClear className='w-full' defaultValue={[]} options={[{ label: "JavaScript", value: "JavaScript" }, { label: "Java", value: "Java" }, { label: "Python", value: "Python" }, { label: "HTML", value: "HTML" }, { label: "CSS", value: "CSS" }, { label: "TailwindCSS", value: "TailwindCSS" }, { label: "Node.js", value: "Node.js" }, { label: "PHP", value: "PHP" }, { label: "Django", value: "Django" }, { label: "Docker", value: "Docker" }, { label: "Kubernetes", value: "Kubernetes" }, { label: "Jenkins", value: "Jenkins" }, { label: "GitHub", value: "GitHub" }, { label: "Bitbucket", value: "Bitbucket" }, { label: "GitBucket", value: "GitBucket" }, { label: "React Native", value: "React Native" }, { label: "Flutter", value: "Flutter" }, { label: "Swift", value: "Swift" }, { label: "MySQL", value: "MySQL" }, { label: "MongoDB", value: "MongoDB" }, { label: "PostgreSQL", value: "PostgreSQL" }, { label: "AWS", value: "AWS" }, { label: "Microsoft Azure", value: "Microsoft Azure" }, { label: "Google Cloud Platform", value: "Google Cloud Platform" }, { label: "Linux", value: "Linux" }, { label: "Windows", value: "Windows" }, { label: "macOS", value: "macOS" }, { label: " Unity", value: " Unity" }, { label: "Unreal Engine", value: "Unreal Engine" }, { label: "CryEngine3", value: "CryEngine3" }]} />
                <UploadMedia />
            </div>
        </Modal>
    );
};

export default PostModal;
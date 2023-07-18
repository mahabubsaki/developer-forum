'use client';
import { Modal } from 'antd';
import React from 'react';
import TextArea from '../common/TextArea';
import UploadMedia from './UploadMedia';
import Button from '../common/Button';
import Select from '../common/Select';
import { selectPost, setLoading, setPostBody, setPostCategory, setPostTags } from '@/redux/reducers/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import uploadImgToCloudinary from '@/configs/cloudinery.config';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { selectAuth } from '@/redux/reducers/authSlice';


interface Props {
    modalOpen: boolean;

    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

}

const PostModal = (props: Props) => {
    const { postBody, media, category, tags, loading } = useSelector(selectPost);
    const dispatch = useDispatch();
    const { user } = useSelector(selectAuth);
    console.log(user);
    const handlePost = async () => {
        try {
            dispatch(setLoading(true));
            if (!postBody) {
                throw new Error("Post body can't be empty");
            }
            if (!category) {
                throw new Error("You have to choose a category");
            }
            if (!tags.length) {
                throw new Error("You have to select at least one tag");
            }
            const [...img] = await Promise.all([...media.map(each => uploadImgToCloudinary(each?.originFileObj as File))]);
            const postData = {
                postBody,
                category,
                tags,
                media: img
            };
            const { data } = await axios({ method: "POST", baseURL: "http://localhost:5000/api/v1/posts/create-post", data: postData });
            console.log(data);
        }

        catch (err) {
            if (err instanceof Error) {
                toast.error(err.message);
            }
        }
        finally {
            dispatch(setLoading(false));
        }
    };
    return (
        <Modal
            title={<p className='text-center font-bold text-xl border-b pb-4'>Create a Post</p>}
            centered
            footer={<Button loading={loading} onClick={handlePost} type='ghost' className={`${loading ? 'bg-blue-500' : 'bg-black'} bg-opacity-100 hover:bg-opacity-70 duration-300 text-white font-semibold`}>
                Post
            </Button>}
            open={props.modalOpen}
            maskClosable={false}

            onCancel={() => props.setModalOpen(false)}
        >
            <div className='flex flex-col gap-3'>
                <TextArea onChange={(e) => dispatch(setPostBody(e.target.value))} value={postBody} bordered={false} className={`${postBody.length > 40 ? 'text-base' : 'text-2xl'}`} placeholder="Share or ask something to everyone.?" autoSize={{ minRows: 4, maxRows: 7 }} />
                <Select onChange={(e) => dispatch(setPostCategory(e))} defaultValue={category ? category : null} placeholder='Choose a category' className='w-full' allowClear options={[{ label: "Programming Languages", value: "Programming Languages" }, { label: "Front-end Development", value: "Front-end Development" }, { label: "Back-end Development", value: "Back-end Development" }, { label: "Database Management", value: "Database Management" }, { label: "Mobile App Development", value: "Mobile App Development" }, { label: "DevOps", value: "DevOps" }, { label: "Version Control", value: "Version Control" }, { label: "Cloud Computing", value: "Cloud Computing" }, { label: "Operating Systems", value: "Operating Systems" }, { label: "Game Development", value: "Game Development" }]} />
                <Select onChange={(e) => dispatch(setPostTags(e))} placeholder="Please choose a tag (maximum 5)" mode='multiple' allowClear className='w-full' defaultValue={tags} options={[{ label: "JavaScript", value: "JavaScript" }, { label: "Java", value: "Java" }, { label: "Python", value: "Python" }, { label: "HTML", value: "HTML" }, { label: "CSS", value: "CSS" }, { label: "TailwindCSS", value: "TailwindCSS" }, { label: "Node.js", value: "Node.js" }, { label: "PHP", value: "PHP" }, { label: "Django", value: "Django" }, { label: "Docker", value: "Docker" }, { label: "Kubernetes", value: "Kubernetes" }, { label: "Jenkins", value: "Jenkins" }, { label: "GitHub", value: "GitHub" }, { label: "Bitbucket", value: "Bitbucket" }, { label: "GitBucket", value: "GitBucket" }, { label: "React Native", value: "React Native" }, { label: "Flutter", value: "Flutter" }, { label: "Swift", value: "Swift" }, { label: "MySQL", value: "MySQL" }, { label: "MongoDB", value: "MongoDB" }, { label: "PostgreSQL", value: "PostgreSQL" }, { label: "AWS", value: "AWS" }, { label: "Microsoft Azure", value: "Microsoft Azure" }, { label: "Google Cloud Platform", value: "Google Cloud Platform" }, { label: "Linux", value: "Linux" }, { label: "Windows", value: "Windows" }, { label: "macOS", value: "macOS" }, { label: " Unity", value: " Unity" }, { label: "Unreal Engine", value: "Unreal Engine" }, { label: "CryEngine3", value: "CryEngine3" }]} />
                <UploadMedia />
            </div>
        </Modal>
    );
};

export default PostModal;
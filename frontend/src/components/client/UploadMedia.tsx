import { selectPost, setPostMedia } from '@/redux/reducers/postSlice';
import { Upload } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UploadMedia = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const dispath = useDispatch();

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        const filter = newFileList.filter(each => each.type?.includes('image'));
        setFileList(filter);
        const data = filter.map(each => ({ name: each.name, type: each.type, originFileObj: each.originFileObj, size: each.size, lastModified: each.lastModified, uid: each.uid }));
        dispath(setPostMedia(data));

    };
    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    return (

        <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            accept=".jpg, .jpeg, .png"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
        >
            {'+ Upload'}
        </Upload>
    );
};

export default UploadMedia;
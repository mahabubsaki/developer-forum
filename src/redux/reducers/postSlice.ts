import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IPost } from '../interfaces/postSlice.interface';
import { UploadFile } from 'antd';


export const uploadMedia = createAsyncThunk('post/uploadMedia', async (file: File) => {
    console.log('object');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Shophouse-Ecommerce');
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME}/image/upload?folder=shophouseProject`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload image');
    }

    const result = await response.json();
    if (result && result.url) {
        return result.url;
    } else {
        throw new Error('Failed to upload image');
    }
});


const initialState: IPost = {
    postBody: "",
    category: "",
    media: [],
    tags: []
};

export const counterSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPostBody: (state, action: PayloadAction<string>) => {
            state.postBody = action.payload;
        },
        setPostCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setPostTags: (state, action: PayloadAction<string[]>) => {
            state.tags = [...action.payload];
        },
        setPostMedia: (state, action: PayloadAction<Partial<UploadFile[]>>) => {
            console.log(action);
            state.media = [...action.payload];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(uploadMedia.fulfilled, (state, action) => {
            state.media.push(action.payload);
        });
    },
});

export const { setPostBody, setPostCategory, setPostMedia, setPostTags } = counterSlice.actions;


export const selectPost = (state: RootState) => state.post;


export default counterSlice.reducer;
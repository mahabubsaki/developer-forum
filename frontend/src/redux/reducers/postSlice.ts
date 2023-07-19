import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { UploadFile } from 'antd';
import IPostSlice from '../interfaces/postSlice.interface';




const initialState: IPostSlice = {
    postBody: "",
    category: "",
    media: [],
    tags: [],
    loading: false
};

export const postSlice = createSlice({
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
            state.media = [...action.payload];
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        reset: (state) => {
            state.category = "";
            state.postBody = '';
            state.tags = [];
            state.media = [];
        }
    }
});

export const { setPostBody, setPostCategory, setPostMedia, setPostTags, reset, setLoading } = postSlice.actions;


export const selectPost = (state: RootState) => state.post;


export default postSlice.reducer;
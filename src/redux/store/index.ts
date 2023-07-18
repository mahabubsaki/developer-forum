import { configureStore } from '@reduxjs/toolkit';
import postSlice from '../reducers/postSlice';
import authSlice from '../reducers/authSlice';




export const store = configureStore({
    reducer: {
        post: postSlice,
        auth: authSlice
    }
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IUserSlice, { IUser } from "../interfaces/userSlice.interface";
import { RootState } from "../store";


const initialState: IUserSlice = {
    user: null,
    loading: true
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser | null>) => {
            state.user = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        reset: (state) => {
            state.user = null;
            state.loading = false;
        }
    }
});

export const { reset, setLoading, setUser } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
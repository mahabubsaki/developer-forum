"use client";
import React from 'react';
import { store } from '../store';
import { Provider } from "react-redux";

interface Props {
    children: React.ReactNode;
}

const ReduxStoreProvider = ({ children }: Props) => {
    return <Provider store={store}>{children}</Provider>;
};
export default ReduxStoreProvider;
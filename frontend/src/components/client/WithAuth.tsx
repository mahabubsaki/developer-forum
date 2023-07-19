'use client';

import { selectAuth, setLoading, setUser } from '@/redux/reducers/authSlice';
import { Spin } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const WithAuth = ({ children }: { children: React.ReactNode; }) => {

    const { loading, user } = useSelector(selectAuth);
    console.log({ user });
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        async function isAuthenticated() {
            try {
                const token = localStorage.getItem("token");
                const { data } = await axios({
                    method: "GET", headers: {
                        Authorization: `Bearer ${token}`
                    },
                    baseURL: "http://localhost:5000/api/v1/users/user"
                });

                const rUser = { email: data.data.email, name: data.data.name, uid: data.data.uid, id: data.data._id, role: data.data.role, batch: data.data.batch };
                dispatch(setUser(rUser));
            } catch (err) {
                console.log(err);
                if (err instanceof AxiosError) {
                    toast.error(err.response?.data?.message);
                }
            }
            finally {
                dispatch(setLoading(false));
            }

        }
        if (!user) isAuthenticated();
    }, [user]);

    useEffect(() => {
        if (!user && !loading) {
            router.push('/auth');
        }
    }, [loading, user, router]);
    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <Spin />
        </div>;
    }
    if (!user) {
        return null;
    }
    return <React.Fragment>
        {children}
    </React.Fragment>;
};

export default WithAuth;
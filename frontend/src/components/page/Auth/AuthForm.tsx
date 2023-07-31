'use client';
import Inputs from '@/components/common/Input';
import { setUser, setLoading as setAuthLoading } from '@/redux/reducers/authSlice';
import { Select, Spin } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';


interface ISubmitForm {
    name?: string;
    email?: string;
    role?: "user" | "admin";
    password?: string;
    batch?: string;
}
const AuthForm = () => {
    const [auth, setAuth] = useState(true);
    const [loading, setLoading] = useState(false);
    const [batch, setBatch] = useState("Batch-8");
    const dispatch = useDispatch();
    const router = useRouter();
    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            setLoading(true);
            e.preventDefault();
            const data: ISubmitForm = {};
            const target = e.target as HTMLFormElement;
            if (auth) {
                data.email = target.loginEmail.value;
                data.password = target.loginPass.value;
                const { data: reponse } = await axios({ method: 'POST', data, baseURL: "http://localhost:5000/api/v1/users/login" });

                localStorage.setItem('token', reponse.data.token);
                const rUser = { email: reponse.data.email, name: reponse.data.name, uid: reponse.data.uid, id: reponse.data._id, role: reponse.data.role, batch: reponse.data.batch };

                dispatch(setUser(rUser));

            } else {
                data.name = target.signupName.value;
                data.email = target.signupEmail.value;
                data.password = target.signupPass.value;
                data.role = 'user';
                data.batch = batch;
                const { data: reponse } = await axios({ method: 'POST', data, baseURL: "http://localhost:5000/api/v1/users/signup" });

                localStorage.setItem('token', reponse.data.token);
                const rUser = { email: reponse.data.email, name: reponse.data.name, uid: reponse.data.uid, id: reponse.data._id, role: reponse.data.role, batch: reponse.data.batch };
                dispatch(setUser(rUser));
            }
            toast.success(`Hello folk, Welcome to the forum`);
            dispatch(setAuthLoading(false));
            router.push('/');

        }
        catch (err) {
            console.log(err);
            if (err instanceof AxiosError) {
                toast.error(err.response?.data?.errorMessages[0]?.message);
            }
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <React.Fragment>
            <h1 className="text-3xl font-semibold text-center mb-[50px]">{auth ? "LOGIN" : "REGISTER"} FORM</h1>
            <div>
                <div className='flex'>
                    <button disabled={loading} onClick={() => setAuth(true)} className={`${auth ? 'auth-btn' : 'border-2'} duration-300  w-1/2 py-3 font-medium`}>
                        LogIn
                    </button>
                    <button disabled={loading} onClick={() => setAuth(false)} className={`${!auth ? 'auth-btn' : 'border-2'} duration-300 w-1/2 py-3 font-medium`}>
                        SignUp
                    </button>

                </div>
                <form onSubmit={submitForm}>
                    <div className='my-8 flex flex-col gap-8'>
                        {
                            auth ? <React.Fragment>
                                <Inputs size='large' name='loginEmail' className='py-[14px]' placeholder='Email Address' />
                                <Inputs size='large' name='loginPass' className='py-[14px]' placeholder='Password' />
                            </React.Fragment> : <React.Fragment>

                                <Inputs size='large' name='signupEmail' className='py-[14px]' placeholder='Email Address' />
                                <Inputs size='large' name='signupPass' className='py-[14px]' placeholder='Password' />
                                <Inputs size='large' name='signupName' className='py-[14px]' placeholder='Name' />
                                <Select placeholder="Choose your batch" allowClear className='w-full' value={batch} onChange={(e) => setBatch(e)} options={[{ label: "Batch-1", value: "Batch-1" }, { label: "Batch-2", value: "Batch-2" }, { label: "Batch-3", value: "Batch-3" }, { label: "Batch-4", value: "Batch-4" }, { label: "Batch-5", value: "Batch-5" }, { label: "Batch-6", value: "Batch-6" }, { label: "Batch-7", value: "Batch-7" }, { label: "Batch-8", value: "Batch-8" }]} />
                            </React.Fragment>
                        }
                    </div>
                    <p className='text-[#29D9F8] duration-300 mb-6 cursor-pointer'>Forget Password?</p>
                    {loading ? <div className='flex justify-center mb-5'>
                        <Spin />
                    </div> : null}
                    <button disabled={loading} type='submit' className={`auth-btn w-full py-3 font-medium`}>
                        Get Start
                    </button>
                </form>

            </div>
        </React.Fragment>
    );
};

export default AuthForm;
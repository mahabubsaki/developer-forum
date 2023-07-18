'use client';
import Inputs from '@/components/common/Input';
import { setUser } from '@/redux/reducers/authSlice';
import { Spin } from 'antd';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';


interface ISubmitForm {
    name?: string;
    email?: string;
    password?: string;
}
const AuthForm = () => {
    const [auth, setAuth] = useState(true);
    const [loading, setLoading] = useState(false);
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
                console.log(reponse);;
                localStorage.setItem('token', reponse.data.token);
                const x = { email: reponse.data.email, name: reponse.data.name, uid: reponse.data.uid, id: reponse.data._id };
                console.log(x);
                dispatch(setUser(x));

            } else {
                data.name = target.signupName.value;
                data.email = target.signupEmail.value;
                data.password = target.signupPass.value;
                const { data: reponse } = await axios({ method: 'POST', data, baseURL: "http://localhost:5000/api/v1/users/signup" });
                console.log(reponse);;
                localStorage.setItem('token', reponse.data.token);
                dispatch(setUser({ email: reponse.data.email, name: reponse.data.name, uid: reponse.data.uid, id: reponse.data._id }));
            }
            toast.success(`Hello folk, Welcome to the forum`);
            setTimeout(() => {
                router.push('/');
            }, 1000);
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
                            </React.Fragment>
                        }
                    </div>
                    <p className='text-[#29D9F8] duration-300 mb-6 cursor-pointer'>Forget Password?</p>
                    {loading ? <div className='flex justify-center mb-5'>
                        <Spin />
                    </div> : null}
                    <button disabled={loading} type='submit' className={`auth-btn w-full py-3 font-medium`}>
                        SignUp
                    </button>
                </form>

            </div>
        </React.Fragment>
    );
};

export default AuthForm;
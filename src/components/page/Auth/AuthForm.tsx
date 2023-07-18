'use client';
import Inputs from '@/components/common/Input';
import React, { useState } from 'react';

const AuthForm = () => {
    const [auth, setAuth] = useState(true);
    return (
        <React.Fragment>
            <h1 className="text-3xl font-semibold text-center mb-[50px]">{auth ? "LOGIN" : "REGISTER"} FORM</h1>
            <div>
                <div className='flex'>
                    <button onClick={() => setAuth(true)} className={`${auth ? 'auth-btn' : 'border-2'} w-1/2 py-3 font-medium`}>
                        LogIn
                    </button>
                    <button onClick={() => setAuth(false)} className={`${!auth ? 'auth-btn' : 'border-2'} w-1/2 py-3 font-medium`}>
                        SignUp
                    </button>

                </div>
                <form className='my-8 flex flex-col gap-8'>
                    {
                        auth ? <React.Fragment>
                            <Inputs size='large' className='py-[14px]' placeholder='Email Address' />
                            <Inputs size='large' className='py-[14px]' placeholder='Password' />
                        </React.Fragment> : <React.Fragment>
                            <Inputs size='large' className='py-[14px]' placeholder='Name' />
                            <Inputs size='large' className='py-[14px]' placeholder='Email Address' />
                            <Inputs size='large' className='py-[14px]' placeholder='Password' />
                        </React.Fragment>
                    }
                </form>
                <p className='text-[#29D9F8] mb-6 cursor-pointer'>Forget Password?</p>
                <button className={`auth-btn w-full py-3 font-medium`}>
                    SignUp
                </button>
            </div>
        </React.Fragment>
    );
};

export default AuthForm;
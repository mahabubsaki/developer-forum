/* eslint-disable @next/next/no-img-element */
'use client';
import Slider from "react-slick";
import { TPost } from '@/app/types';
import React from 'react';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import timeDifference from "@/app/utils/timeDifference";
import formatDate from "@/app/utils/formatDate";
import { BiGroup } from 'react-icons/bi';
import noImage from '../../../assets/no-image.png';
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { postHourSpan } from "@/app/utils/postHourSpan";

interface Props {
    post: TPost;
}

const SinglePost = ({ post }: Props) => {
    // const {} = useSelector
    return (
        <div className="bg-[#F1F1F1] rounded-2xl">
            <section className="p-6">
                <div className="flex justify-between">
                    <div className=" gap-4 flex flex-1">
                        <span className="w-[56px] block h-[56px]  rounded-full bg-[#CECECE]"></span>
                        <div>
                            <p className="text-lg text-black mb-2 font-semibold">{post.user.name}</p>
                            <div className="flex gap-2">
                                <div className="flex gap-1 items-center text-[rgba(0,0,0,0.50)]">
                                    <AiOutlineClockCircle className="text-lg" />
                                    <p className="text-sm">{timeDifference(post.createdAt)}</p>
                                </div>
                                <div className="flex gap-1 items-center text-[rgba(0,0,0,0.50)]">
                                    <AiOutlineCalendar className="text-lg" />
                                    <p className="text-sm">{formatDate(post.createdAt)}</p>
                                </div>
                                <div className="flex gap-1 items-center text-[rgba(0,0,0,0.50)]">
                                    <BiGroup className="text-xl" />
                                    <p className="text-sm">{post.user.batch}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-end gap-5 items-center flex-1">
                        <p className="bg-[#cdbcbc] h-fit py-[5px] px-[10px] text-[14px]">{postHourSpan(post.createdAt, 1) ? 'New' : postHourSpan(post.createdAt, 5) ? 'Recent' : 'Old'}</p>
                        <p className="bg-[#CFCBCB] h-fit py-[5px] px-[10px] text-[14px]">{post.status}</p>
                        <BsBookmark className="text-xl" />
                        <BsThreeDots />
                    </div>
                </div>
            </section>
            <h1>s</h1>
            <div className="mb-6">
                {post.media?.length ? <Slider arrows dots>
                    {post.media?.map((each, idx) => {
                        return <div className="h-[400px] thumbnail bg-slate-400" key={idx}>
                            <img src={each} loading="lazy" className="w-full  backdrop-blur-md object-scale-down h-full" alt="" />
                        </div>;
                    })}
                </Slider> : <img loading="lazy" className="w-full object-scale-down h-[400px]" src={noImage.src} alt="empty-image" />}
            </div>
            <p className="border">s</p>
        </div>
    );
};

export default SinglePost;
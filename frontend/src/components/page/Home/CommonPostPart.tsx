/* eslint-disable @next/next/no-img-element */
import React from 'react';
import noImage from '../../../assets/no-image.png';
import Slider from "react-slick";

import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import timeDifference from "@/app/utils/timeDifference";
import formatDate from "@/app/utils/formatDate";
import { BiGroup } from 'react-icons/bi';

import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { postHourSpan } from "@/app/utils/postHourSpan";
// name={post.user.name} createdAt={post.createdAt} batch={post.user.batch} status={post.status} postBody={post.postBody} media={post.media}

interface Props {
    name: string;
    createdAt: Date;
    batch: string;
    status: string;
    postBody: string;
    media: string[] | null;
}
const CommonPostPart = ({ batch, createdAt, media, name, postBody, status }: Props) => {
    return (
        <div>
            <section className="p-6">
                <div className="flex justify-between">
                    <div className=" gap-4 flex flex-1">
                        <span className="w-[56px] block h-[56px]  rounded-full bg-[#CECECE]"></span>
                        <div>
                            <p className="text-lg text-black mb-2 font-semibold">{name}</p>
                            <div className="flex gap-2">
                                <div className="flex gap-1 items-center text-[rgba(0,0,0,0.50)]">
                                    <AiOutlineClockCircle className="text-lg" />
                                    <p className="text-sm">{timeDifference(createdAt)}</p>
                                </div>
                                <div className="flex gap-1 items-center text-[rgba(0,0,0,0.50)]">
                                    <AiOutlineCalendar className="text-lg" />
                                    <p className="text-sm">{formatDate(createdAt)}</p>
                                </div>
                                <div className="flex gap-1 items-center text-[rgba(0,0,0,0.50)]">
                                    <BiGroup className="text-xl" />
                                    <p className="text-sm">{batch}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-end gap-5 items-center flex-1">
                        <p className="bg-[#cdbcbc] h-fit py-[5px] px-[10px] text-[14px]">{postHourSpan(createdAt, 1) ? 'New' : postHourSpan(createdAt, 5) ? 'Recent' : 'Old'}</p>
                        <p className="bg-[#CFCBCB] h-fit py-[5px] px-[10px] text-[14px]">{status}</p>
                        <BsBookmark className="text-xl" />
                        <BsThreeDots />
                    </div>
                </div>
            </section>
            <p className="ml-6 mr-[84px] mb-6">{postBody}</p>
            <div className="mb-6 border shadow-inner">
                {media?.length ? <Slider arrows dots>
                    {media?.map((each, idx) => {
                        return <div className="h-[350px] thumbnail bg-slate-400" key={idx}>
                            <img src={each} loading="lazy" className="w-full  backdrop-blur-md object-scale-down h-full" alt="" />
                        </div>;
                    })}
                </Slider> : <img loading="lazy" className="w-full object-scale-down h-[400px]" src={noImage.src} alt="empty-image" />}
            </div>
        </div>
    );
};

export default CommonPostPart;
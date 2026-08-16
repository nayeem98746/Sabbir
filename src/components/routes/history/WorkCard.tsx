"use client";

import React,{useState} from 'react';
import NavLink from 'next/link';
import cardST from "./cardStyle.module.css";
import Icon from '@/components/widget/icons/Icon';
// import workCardST from "../../../../styles/History.module.css";

export type TWorkItem = {
    company: string;
    company_address: string;
    position: string;
    join_date: string;
    leave_date: string;
    web_url: string;
    summery: string;
    highlights: string[];
}

const WorkCard = ({work}:{work:TWorkItem}) => {

    return (
        <div className={cardST.card_wrapper}>
            <div className={cardST.cardMark_light}></div>
            <div className={cardST.cardMark}></div>
            <div className={cardST.card}>
                <div className={cardST.cardHead}>
                    <div className={cardST.cardPosition}>
                        <NavLink className='flex gap-2 items-center text-[#2dd4bf]' href={work.web_url??"/"} target='_blank' passHref>
                        {work.company}
                        {/* <a target='_blank' rel='noopener noreferrer'>{work.company}</a> */}
                        <Icon fill='#2dd4bf' height={18} width={18} icon='link' />
                        </NavLink>
                        <p className='text-typo_mute'>{work.position}</p>
                        <p className='text-typo_mute'>{work.company_address}</p>
                    </div>
                    <div className={cardST.cardTimer}>
                        <span>{work.join_date} - {work.leave_date}</span>
                    </div>
                </div>
                <div className={[cardST.cardInfo,'leading-5 text-base'].join(' ')}>
                    <div className='text-typo_mute mt-4 text-sm'>
                        <p>{work.summery}</p>
                    </div>
                    <div>
                        <ul className='text-typo_mute list-disc text-sm'>
                            {
                                work.highlights.map((highlight,idx) => <li key={`highlight_${idx}`}>{highlight}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;

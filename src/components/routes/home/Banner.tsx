"use client";

import { TypeAnimation } from 'react-type-animation';
import bnnaerProfileImg from "@/assest/images/banner_img/sabbir_pro.png";
import Image from 'next/image';
import Link from "next/link";
import { CV_DRIVE_URL } from '@/components/shared/profile/Profile';
import { useAuth } from '@/contexts/AuthProvider';
import { useCallback } from 'react';

const sequenceList = [
    'I am a Full Stack Developer',
    1000,
    'I am a Javascript Developer',
    1000,
    'I am a Node.js Developer',
    1000,
    'I am a React.js Developer',
    1000,
    'I am a Next.js Developer',
    1000,
    'I am a Vue.js Developer',
    1000,
];

const Banner = () => {
    const { setIsResumeOpen } = useAuth();

    // Scroll the page to specific id element
    const scrollToTargetId = useCallback((id: string) => {
        if (typeof window === 'undefined') return;
        
        const targetElement = document.getElementById(id);
        if (!targetElement) return;
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }, []);

    return (
        <section className="relative overflow-hidden min-h-[85vh] flex items-center py-20 lg:py-0">
            {/* Soft decorative glows, replaces the old busy background photo */}
            <div className="absolute -top-24 -right-16 w-[420px] h-[420px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 flex flex-col-reverse lg:grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-center">

                {/* Text content */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left text-white">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-teal-400 border border-teal-400/30 bg-teal-400/5 rounded-full px-4 py-1.5 mb-6">
                        Available for work
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 max-w-xl">
                        Discover my amazing <span className="text-teal-400">Web Projects</span>
                    </h1>

                    <p className="text-typo_mute text-base sm:text-lg font-mono min-h-7">
                        <TypeAnimation
                            sequence={sequenceList}
                            speed={50}
                            className="text-teal-400"
                            wrapper="span"
                            repeat={Infinity}
                        />
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10">
                        <button
                            className="h-12 px-8 rounded-full bg-teal-400 text-black font-bold text-sm uppercase tracking-wider cursor-pointer border-none hover:bg-teal-300 hover:-translate-y-0.5 transition-all duration-300"
                            onClick={() => scrollToTargetId("contact_id")}
                            aria-label="Contact Now"
                        >
                            Contact Now
                        </button>
                        
                        <button
                            className="h-12 px-6 rounded-full border border-white/20 bg-transparent text-white font-bold text-sm cursor-pointer hover:border-teal-400 hover:text-teal-400 transition-all duration-300"
                            onClick={() => setIsResumeOpen(true)}
                            aria-label="View CV"
                        >
                            View CV
                        </button>
                        
                        <Link
                            href={CV_DRIVE_URL.DOWNLOAD.replace("view", "download")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-12 px-6 rounded-full border border-white/20 bg-transparent text-white font-bold text-sm cursor-pointer hover:border-teal-400 hover:text-teal-400 transition-all duration-300 inline-flex items-center justify-center"
                        >
                            Download CV
                        </Link>
                    </div>
                </div>

                {/* Portrait */}
                <div className="relative shrink-0 w-48 sm:w-64 lg:w-full aspect-square">
                    <div className="absolute inset-0 bg-teal-400/10 rounded-full blur-2xl scale-90"></div>
                    <Image
                        src={bnnaerProfileImg}
                        fill
                        priority
                        sizes="(min-width: 1024px) 320px, 256px"
                        className="relative object-cover rounded-full border border-teal-400/20"
                        alt="MD Sabbir Ahmed - Full Stack Developer"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
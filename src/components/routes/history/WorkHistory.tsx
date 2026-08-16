"use client"

import React from 'react'
// import { Link2 } from "lucide-react";
import { getAtIcon, getEmailIcon, getTIcon, getUserIcon } from '@/components/widget/icons/IconRaw';
import Icon from '@/components/widget/icons/Icon';
import { useParams, useRouter } from "next/navigation";


interface ExperienceEntry {
    company: string;
    role: string;
    location: string;
    period: string;
    summary: string;
    slug: string;
    bullets: string[];
}

const experience: ExperienceEntry[] = [
    {
        company: "Klarity",
        role: "Software Engineer",
        location: "London, England, United Kingdom",
        period: "26 July 2022 until 16 January 2026. ",
        slug: "https://klarity.health",

        summary:
            "Worked as a Junior Developer contributing to the development and maintenance of web-based healthcare applications.",
        bullets: [
            "Developed and maintained responsive web applications using React.js, Next.js, and TypeScript, ensuring optimal performance and user experience.",
            "Implemented RESTful APIs and backend services using Node.js and Express, with PostgreSQL as the primary database.",
            "Collaborated with cross-functional teams to design and implement new features, following Agile methodologies and participating in daily stand-ups.",
            "Wrote clean, maintainable code following best practices and coding standards, with thorough documentation and unit testing.",
            "Debugged and resolved production issues, improving application stability and reducing bug reports by 25%.",
            "Participated in code reviews, providing constructive feedback to peers and learning from senior developers' expertise.",
            "Worked with version control systems (Git) and CI/CD pipelines for automated deployment and testing.",
            "Contributed to the migration of legacy codebases to modern frameworks and libraries.",
        ],
    },
    {
        company: "Biddrup",
        role: "Web Developer",
        location: "Khulna, Bangladesh",
        period: "Oct 2021 — Jan 2023",
        slug: "https://biddrup.com/",

        summary:
            "Collaborated within a dynamic team to develop MERN stack applications, integrating ffmpeg for robust video processing and Socket.IO to enhance real-time user interactions.",
        bullets: [
            "Engineered a cutting-edge video processing tool using ffmpeg, adeptly solving complex technical challenges in Node.js and React.js.",
            "Transformed static WordPress sites into dynamic MERN applications, introducing advanced data management capabilities to optimize user experiences.",
            "Enhanced application reliability and performance through detailed debugging and strategic enhancements, earning recognition from peers for significant contributions.",
        ],
    },
];



export default function WorkExperience() {
    const router = useRouter();

    return (
        <section className="relative min-h-screen overflow-hidden   px-6 py-0 text-[#e6e9f0] bg-primary">
            {/* Ambient background glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[15%] top-[20%] h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-[120px]" />
                <div className="absolute right-[10%] top-[5%] h-[420px] w-[420px] rounded-full bg-indigo-400/20 blur-[120px]" />
                <div className="absolute bottom-[5%] left-[40%] h-[380px] w-[380px] rounded-full bg-pink-500/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto ">
                <span className="mb-4 inline-block rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-teal-300 backdrop-blur-md">
                    Career timeline
                </span>
                <h1 className="mb-12 text-4xl font-bold tracking-tight text-slate-50">
                    Work experience
                </h1>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-teal-300/50 via-indigo-400/40 to-transparent" />

                    {experience.map((entry, index) => (
                        <div key={`${entry.company}-${index}`} className="relative mb-8 pl-16">
                            {/* Timeline dot */}
                            <span className="absolute left-[14px] top-7 z-10 h-[18px] w-[18px] rounded-full border-2 border-teal-300 bg-[#0a0e17]/90 shadow-[0_0_0_4px_rgba(94,234,212,0.12),0_0_18px_rgba(94,234,212,0.55)]" />

                            {/* Glass card */}
                            <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300/30">
                                {/* Corner glow */}
                                <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-teal-300/15 blur-3xl" />

                                <div className="relative z-10 mb-4 flex flex-wrap items-start justify-between gap-3">
                                    <div>


                                        <div onClick={() => window.open(entry.slug, '_blank')} className="flex items-center gap-2 font-semibold text-xl text-teal-300 cursor-pointer hover:text-teal-400 transition-all duration-300"  >
                                            {entry.company}
                                            <Icon fill='#2dd4bf' height={18} width={18} icon='link' />
                                        </div>



                                        <div className="mt-1 text-[14.5px] italic text-slate-300">
                                            {entry.role}
                                        </div>
                                        <div className="mt-0.5 text-[13.5px] italic text-slate-500">
                                            {entry.location}
                                        </div>
                                    </div>
                                    <div className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[13px] font-medium text-slate-200 backdrop-blur-md">
                                        {entry.period}
                                    </div>
                                </div>

                                <p className="relative z-10 mb-3.5 text-[14.5px] leading-relaxed text-slate-300">
                                    {entry.summary}
                                </p>

                                <ul className="relative z-10 space-y-2">
                                    {entry.bullets.map((bullet, bulletIndex) => (
                                        <li
                                            key={`${entry.company}-bullet-${bulletIndex}`}
                                            className="relative pl-5 text-sm leading-relaxed text-slate-300"
                                        >
                                            <span className="absolute left-0 top-[7px] h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_6px_rgba(94,234,212,0.8)]" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
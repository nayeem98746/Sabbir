'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/widget/icons/Icon';

interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  slug?: string;
  website?: string;
}

const education: EducationEntry[] = [
  {
    institution: "National University ",
    degree: "BBA in Industrial & Production Engineering",
    location: "Tangail, Bangladesh",
    period: "June 2022 - Present",
    slug: "just",
    website: "https://www.nu.ac.bd/",
    description: "Bachelor of Science in Industrial & Production Engineering.",
    achievements: [
      "Completed two professional trainings in an industrial environment.",
      "Served as class representative for over a year.",
      "Attended workshops and seminars.",
    ],
  },
  {
    institution: "Major General Mahmudul Hasan Adarsha College",
    degree: "Higher Secondary Certificate (HSC)",
    location: "Tangail, Bangladesh",
    period: "2019 - 2020 section",
    slug: "sawmc",
    website: "https://mgmhac.edu.bd/",
    description: "Completed higher secondary studies in the business group.",
    achievements: [
      "Studied in the business group.",
      "Participated in several debates.",
      "Led a team in the practical project exam.",
    ],
  },
];

export default function Education() {
  const router = useRouter();

  const handleInstitutionClick = (slug: string, e?: React.MouseEvent) => {
    if (e?.ctrlKey || e?.metaKey) {
      window.open(`/education/${slug}`, '_blank');
    } else {
      router.push(`/education/${slug}`);
    }
  };

  const handleIconClick = (e: React.MouseEvent, website?: string) => {
    e.stopPropagation();
    if (website) {
      window.open(website, '_blank');
    }
  };

  return (
    <section className="relative   overflow-hidden px-6 py-0 text-[#e6e9f0] bg-primary">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[5%] h-[420px] w-[420px] rounded-full bg-purple-400/20 blur-[120px]" />
        <div className="absolute bottom-[5%] left-[40%] h-[380px] w-[380px] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto  ">
        <span className="mb-4 inline-block rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-md">
          Academic journey
        </span>


        <div className="relative">
          {/* Vertical timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-300/50 via-purple-400/40 to-transparent" />

          {education.map((entry, index) => (
            <div key={`${entry.institution}-${index}`} className="relative mb-8 pl-0 md:pl-16">
              {/* Timeline dot - hidden on mobile */}
              <span className={`hidden md:block absolute left-[14px] top-7 z-10 h-[18px] w-[18px] rounded-full border-2 ${index === 0
                  ? 'border-blue-300 bg-blue-400/50 shadow-[0_0_0_4px_rgba(59,130,246,0.2),0_0_18px_rgba(59,130,246,0.55)]'
                  : 'border-blue-300 bg-[#0a0e17]/90 shadow-[0_0_0_4px_rgba(59,130,246,0.12),0_0_18px_rgba(59,130,246,0.55)]'
                }`} />

              {/* Glass card */}
              <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/30">
                {/* Corner glow */}
                <div className={`pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full ${index === 0
                    ? 'bg-blue-300/20 blur-3xl'
                    : 'bg-blue-300/15 blur-3xl'
                  }`} />

                <div className="relative z-10 mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    {/* Institution name with click handler */}


                      <div onClick={() => window.open(entry.website, '_blank')} className="flex items-center gap-2 font-semibold text-xl text-teal-300 cursor-pointer hover:text-teal-400 transition-all duration-300"  >
                                            {entry.institution}
                                            <Icon fill='#2dd4bf' height={18} width={18} icon='link' />
                                        </div>


                    <div className="mt-1 text-[14.5px] italic text-slate-300">
                      {entry.degree}
                    </div>
                    <div className="mt-0.5 text-[13.5px] italic text-slate-500">
                      {entry.location}
                    </div>
                  </div>
                  <div className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-[13px] font-medium backdrop-blur-md ${index === 0
                      ? 'border-blue-300/30 bg-blue-300/10 text-blue-300'
                      : 'border-white/10 bg-white/[0.06] text-slate-200'
                    }`}>
                    {entry.period}
                  </div>
                </div>

                <p className="relative z-10 mb-3.5 text-[14.5px] leading-relaxed text-slate-300">
                  {entry.description}
                </p>

                <ul className="relative z-10 space-y-2">
                  {entry.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={`${entry.institution}-achievement-${achievementIndex}`}
                      className="relative pl-5 text-sm leading-relaxed text-slate-300"
                    >
                      <span className={`absolute left-0 top-[7px] h-1.5 w-1.5 rounded-full ${index === 0
                          ? 'bg-blue-400 shadow-[0_0_6px_rgba(59,130,246,0.8)]'
                          : 'bg-blue-300 shadow-[0_0_6px_rgba(59,130,246,0.8)]'
                        }`} />
                      {achievement}
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
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import profileST from "./profile.module.css";
import skillsST from "./Skills.module.css";
import SkillsBar from "./SkillsBar";
import profile_img from "@/assest/images/profile_img/sabbir_pro.png";
import CounterNumber from "@/components/common/CounterNumber";
import {
  getCheckMarkIcon,
  getDownloadIcon,
  getGitHubIcon,
  getLinkedINIcon,
  getMediumIcon,
  youtubeIcon,
} from "@/components/widget/icons/IconRaw";
import DividerProfile from "./DividerProfile";
import { useSidebar } from "@/contexts/SidebarContext";
import Icon from "@/components/widget/icons/Icon";
import { useAuth } from "@/contexts/AuthProvider";


 export const CV_DRIVE_URL = {
  PREVIEW: "https://drive.google.com/file/d/1_Sb9ZaGbiw7uPE3TbVPOKph-1ei24vHr/preview",
  VIEW: "https://drive.google.com/file/d/1_Sb9ZaGbiw7uPE3TbVPOKph-1ei24vHr/view",
  DOWNLOAD: "https://drive.google.com/uc?id=1_Sb9ZaGbiw7uPE3TbVPOKph-1ei24vHr&export=download"
 };

const socials = [
  {
    name: "LinkedIn",
    icon: getLinkedINIcon(35, 35),
    url: "https://www.linkedin.com/in/sabbir-ahmed-b98b0a226/",
  },
  {
    name: "GitHub",
    icon: getGitHubIcon(35, 35),
    url: "https://github.com/nayeem98746",
  },
  {
    name: "Medium",
    icon: getMediumIcon(35, 35),
    url: "https://medium.com/@shuvoh38",
  },
  {
    name: "Youtube",
    icon: youtubeIcon(35, 35),
    url: "https://www.youtube.com/@web-coder-shuvo/videos",
  },
];

const address = [
  { name: "Residence", value: "Tangail" },
  { name: "Country", value: "Bangladesh" },
  {
    name: "Email",
    value: (
      <a
        style={{ textDecoration: "none", color: "var(--grey)" }}
        href="mailto: sabbir987467@gmail.com"
      >
        sabbir987467@gmail.com
      </a>
    ),
  },
  {
    name: "Office",
    value: (
      <a
        style={{ textDecoration: "none", color: "var(--grey)" }}
        href="mailto:sabbir@getklarity.io"
      >
        sabbir@getklarity.io
      </a>
    ),
  },
];

const languages = [
  { lang: "English", percentage: 75, level: "B2" },
  { lang: "Bengali", percentage: 100, level: "Native" },
  { lang: "Hindi", percentage: 50, level: "A2" },
];

const knowledges = [
  "Basic of EC2 Instances",
  "Git, GitHub, Hosting with VPS",
  "Redux, RESTful API, Unit Testing",
  "PostgreSQL. MySQL, MongoDB",
  "Real time data transfer with Socket.IO",
];

const Profile = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [isMounted, setIsMounted] = useState(false);
    const { isResumeOpen, setIsResumeOpen } = useAuth()
  

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Register CSS properties for animation
  useEffect(() => {
    if (typeof window === "undefined" || !isMounted) return;

    try {
      languages.forEach((_, idx) => {
        const startProp = `--lang_idx_st_${idx}`;
        const endProp = `--lang_idx_ed_${idx}`;
        
        // Check if properties are already registered
        const isStartRegistered = CSS.supports(startProp, '0');
        const isEndRegistered = CSS.supports(endProp, '0');
        
        if (!isStartRegistered) {
          CSS.registerProperty({
            name: startProp,
            syntax: "<integer>",
            inherits: false,
            initialValue: '100',
          });
        }
        
        if (!isEndRegistered) {
          CSS.registerProperty({
            name: endProp,
            syntax: "<integer>",
            inherits: false,
            initialValue: '0',
          });
        }
      });
    } catch (error) {
      // CSS.registerProperty might fail in some browsers, handle gracefully
      console.debug('CSS custom property registration:', error);
    }
  }, [isMounted]);

  const toggleClass = isSidebarOpen ? 'w-profile_bar_md' : 'w-profile_bar_sm';

  return (
    <div onClick={() => setIsResumeOpen(!isResumeOpen)}
      className={`fixed h-screen ${isSidebarOpen ? 'w-profile_bar_md' : "w-profile_bar_sm"} md:w-profile_bar_md lg:w-profile_bar md:block transition-all duration-500 ease-in-out overflow-hidden bg-gray-800 z-20`}
    >
      <button
        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none absolute top-2 right-2 z-30"
        type="button"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        <Icon fill="white" icon={isSidebarOpen ? "dismiss" : "list"} />
      </button>

      <div className="py-6 bg-mute_linear text-center">
        <div className="block m-auto w-fit">
          <Image
            className="rounded-full"
            src={profile_img}
            width={100}
            height={100}
            alt="MD Sabbir Ahmed - Full Stack Developer"
            priority
          />
        </div>
        <h3 className="mt-4 mb-2">MD Sabbir Ahmed</h3>
        <p className="my-1 text-sm text-gray-400">Full Stack Developer</p>
      </div>

      <div className="h-profile_cred overflow-y-auto scrollbar py-4 px-8 text-xs">
        <div>
          {address.map((info) => (
            <div className="flex justify-between" key={info.name}>
              <p className="p-0.5">{info.name} :</p>
              <p className="text-gray-400">{info.value}</p>
            </div>
          ))}
        </div>

        <DividerProfile />

        <div>
          <h3 className="mt-1 mb-0.5 font-semibold">Coding</h3>
          <div className="mt-4">
            <SkillsBar />
          </div>
        </div>

        <DividerProfile />

        <div className="my-4">
          <h3 className="mt-1 mb-0.5 font-semibold">Languages</h3>
          <div className="flex justify-evenly gap-2 mt-4">
            {languages.map((langEl, langIdx) => (
              <div key={langEl.lang}>
                <div className="relative w-max m-auto mb-1">
                  <div>
                    <svg width={50} height={50} viewBox="0 0 120 120">
                      <circle
                        cx={60}
                        cy={60}
                        r={54}
                        fill="none"
                        stroke="#100"
                        strokeWidth="12"
                      />
                      <circle
                        className={profileST[`lang_${langIdx + 1}`]}
                        cx={60}
                        cy={60}
                        r={54}
                        fill="none"
                        stroke="#2dd4bf"
                        strokeWidth={12}
                        pathLength={100}
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                      fontSize: "12px",
                    }}
                  >
                    <CounterNumber
                      start={0}
                      end={langEl.percentage}
                      speed={100}
                      duration={2000}
                    />
                    <span>%</span>
                  </span>
                </div>
                <p className="text-center">{langEl.lang}</p>
                <p className="text-center">({langEl.level})</p>
              </div>
            ))}
          </div>
        </div>

        <DividerProfile />

        <div>
          <h3 className="mt-4 mb-2">Knowledge</h3>
          <div>
            {knowledges.map((topic) => (
              <li className={skillsST.knowledge} key={topic}>
                {getCheckMarkIcon()} {topic}
              </li>
            ))}
          </div>
        </div>
      </div>

      <div className={skillsST.social_Info}>
        <Link
          href={CV_DRIVE_URL.DOWNLOAD}
          target="_blank"
          rel="noopener noreferrer"
          className={skillsST.cv_btn}
        >
          {getDownloadIcon(15, 15)}
          Download CV
        </Link>

        <div className={skillsST.social_links}>
          {socials.map((social) => (
            <Link
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className={skillsST.social_link}
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
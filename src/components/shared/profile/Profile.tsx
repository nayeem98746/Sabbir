'use client';
import Image from "next/image";
import NavLink from "next/link";
import profileST from "./profile.module.css";
// import { getCheckMarkIcon, getDownloadIcon, getGitHubIcon, getLinkedINIcon, getMediumIcon, youtubeIcon } from "../../utils/Icons/Icons";

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

// export const cvDriveUrl ="https://drive.google.com/uc?id=1ji_e55CR74743ck_tZUsEw-95N3wOp0y&export=view#zoom=75%#scrollbar=0#toolbar=1&navpanes=0";

export const CV_DRIVE_URL = {
  PREVIEW:"https://drive.google.com/file/d/1_Sb9ZaGbiw7uPE3TbVPOKph-1ei24vHr/view",
  DOWNLOAD: "https://drive.google.com/file/d/1_Sb9ZaGbiw7uPE3TbVPOKph-1ei24vHr/view"
}
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
  // { name: "Cell Phone", value: "+880-1927-173843" },
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
  const {isSidebarOpen,toggleSidebar} = useSidebar();
  /*
    // animate or add @keyframes using animate() method to language percentage
    const animateLang = (el_id) =>{
      if (typeof document === "undefined") {
        return ;
      }
      document.styleSheets[0].insertRule('\
        @keyframes animX {\
          0% { transform: rotateZ(0deg);   }\
          100%   { transform: rotateZ(360deg); }\
        }'
      );
      var div = document.getElementById(el_id);
      if (div) {
        div.style.animation = 'animX 1s linear forwards';
      }

      // another way
      document.getElementById(el_id).animate(
        [
          {["stroke-dashoffset"]: 100,},
          {["stroke-dashoffset"]: 0,},
        ],
        {duration: 2000, iterations: Infinity, delay:0,}
      )
    }
  */

  // animate or add @keyframe creating new CSS property to CSS register
  const animateNumberCount = (idx:number, clsName:string) => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    // check if exist
    const element = document.getElementsByClassName(clsName)[0];
    const isExist = window
      .getComputedStyle(element)
      .getPropertyValue(`--lang_idx_${idx}`);

    if (isExist.length < 0) {
      // create the CSS @property
      window.CSS.registerProperty({
        name: `--lang_idx_st_${idx}`, //name: "--propertyName",
        syntax: "<integer>",
        inherits: false,
        initialValue: '100',
      });
      window.CSS.registerProperty({
        name: `--lang_idx_ed_${idx}`, //name: "--propertyName",
        syntax: "<integer>",
        inherits: false,
        initialValue: '0',
      });
    }

    // change the variable value
  };

  // register
  let toggleClass = ' w-profile_bar_sm'
  if (isSidebarOpen) {
    toggleClass = 'w-profile_bar_md'
  }

  return (
    <div
      // className={`fixed h-screen w-profile_bar_sm ${isSidebarOpen?'w-profile_bar_md':  ''}  md:w-profile_bar_md lg:w-profile_bar md:block transition-all duration-500 ease-in-out overflow-hidden bg-gray-800 z-20`}
      className={`fixed h-screen  ${isSidebarOpen ? 'w-profile_bar_md' : " w-profile_bar_sm"} md:w-profile_bar_md lg:w-profile_bar md:block transition-all duration-500 ease-in-out overflow-hidden bg-gray-800 z-20`}
    >
      <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none absolute"
              type="button"
              onClick={toggleSidebar}
            >
              <Icon fill="white" icon={isSidebarOpen ? "dismiss":"list"} />
            </button>

      <div className="py-6 bg-mute_linear  text-center">
        <div className="block m-auto w-fit">
          <Image
            className="rounded-full"
            src={profile_img}
            width={100}
            height={100}
            alt="Shuvo Haldar"
          ></Image>
        </div>
        <h3 className="mt-4 mb-2">MD Sabbir Ahmed</h3>
        <p className="my-1 text-sm text-gray-400">Full Stack Developer</p>
      </div>
      {/* <div className={layoutST.credential_Info}> */}
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
          <h3 className="mt-1 mb-0.5 font-semibold">Coading</h3>
          <div className="mt-4">
            <SkillsBar></SkillsBar>
          </div>
        </div>
        <DividerProfile />
        <div className="my-4">
          <h3 className="mt-1 mb-0.5 font-semibold">Languages</h3>
          <div className="flex justify-evenly gap-2 mt-4">
            {languages.map((langEl, iangIdx) => (
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
                      ></circle>
                      {/* <circle className={layoutST.languageAni} style={{strokeDasharray: 100, strokeDashoffset: 100-langEl.percentage}} cx={60} cy={60} r={54} fill='none' stroke="#2dd4bf" strokeWidth={12} pathLength={100}></circle> */}
                      <circle
                        className={profileST[`lang_${iangIdx + 1}`]}
                        cx={60}
                        cy={60}
                        r={54}
                        fill="none"
                        stroke="#2dd4bf"
                        strokeWidth={12}
                        pathLength={100}
                      ></circle>
                    </svg>
                  </div>
                  {/* <output style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", fontSize:"12px"}}>{langEl.percentage}%</output> */}
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
                {" "}
                {getCheckMarkIcon()} {topic}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className={skillsST.social_Info}>
        <NavLink
          // href={CV_DRIVE_LINK.replace("view", "download")}
          href={CV_DRIVE_URL.DOWNLOAD+ '&export=download'}
          passHref={true}
          legacyBehavior
          download={true}
        >
          <button className={`${skillsST.cv_btn}`}>
            {getDownloadIcon(15, 15)}
            Download CV
          </button>
        </NavLink>
        <div className={`${skillsST.social_links}`}>
          {socials.map((social) => (
            <NavLink
              href={social.url}
              target={"_blank"}
              rel={"noopener noreferrer"}
              passHref={true}
              legacyBehavior
              key={social.name}
            >
              <a className={`${skillsST.social_link}`} target="_blank">
                {social.icon}
                {/* {social.name} */}
              </a>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

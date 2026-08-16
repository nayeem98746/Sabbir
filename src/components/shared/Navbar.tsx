"use client";
import React, { useState } from "react";
import Icon from "../widget/icons/Icon";
import Link from "next/link";
import { useSidebar } from "@/contexts/SidebarContext";
import CVReader from "./cv/CVReader";
import { useAuth } from "@/contexts/AuthProvider";

const navList:{title:string, path: string}[] = [
  /*
    {
        title:"Home",
        path:"/",
    },
    {
        title:"Blogs",
        path:"/blogs",
    },
    {
        title:"About",
        path:"/about",
    },
    */
]

const Navbar = () => {
  const {isSidebarOpen,toggleSidebar} = useSidebar()
  const [navbarOpen, setNavbarOpen] = useState(false);
  const {isResumeOpen,setIsResumeOpen} = useAuth()
  return (
    <>
      {/* <nav className="fixed top-0 w-screen flex flex-wrap items-center justify-between px-2 py-1 mb-3 shadow-sm shadow-gray-700 bg-primary"> */}
      <nav className="top-0 sticky z-20 right-0 flex flex-wrap items-center justify-between ml-3 lg:ml-0 px-2 py-1 shadow-sm shadow-gray-700 bg-primary">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <button
              className={`text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ${isSidebarOpen? "hidden":"block"}`}
              type="button"
              onClick={toggleSidebar}
            >
              <Icon fill="white" icon={isSidebarOpen ? "dismiss":"list"} />
            </button>
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              MD Sabbir Ahmed
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Icon fill="white" icon={navbarOpen ? "dismiss":"list"} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {
                    navList.map(el=><li className="nav-item" key={el.title}>
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href={el.path}
                    >

                      <span className="ml-2">{el.title}</span>
                    </Link>
                  </li>)
                }

                <li className="nav-item">
                  <button className="relative px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" onClick={()=>setIsResumeOpen(!isResumeOpen)}>
                    <Icon className="absolute left-0" icon={isResumeOpen ? "book_open" :"book_contacts"} width={24} height={24} fill="#fff" />
                    <span className="ml-4">Resume</span>
                    </button>
                </li>
            </ul>

          </div>
        </div>
        <CVReader />
      </nav>
    </>
  );
};

export default Navbar;

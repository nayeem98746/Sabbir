"use client"
import Navbar from '@/components/shared/Navbar';
import SideBar from '@/components/shared/SideBar';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react';

type TProps = {
    children: React.ReactNode
}
const Layout = ({children}:TProps) => {
    const {isSidebarOpen} = useSidebar()
    console.log(isSidebarOpen);

    // className="mx-12 lg:mx-auto lg:max-w-[1400px]"
    return (
        <div className='bg-primary min-h-screen text-white'>
            <div className='max-w-[1440px] mx-auto lg:mx-auto'>
                <div className='relative '>
                    <SideBar />
                </div>
                <div className={`relative ${isSidebarOpen?'ml-[200px]':''} md:ml-[200px]  lg:ml-72 `}>
                    <Navbar />
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
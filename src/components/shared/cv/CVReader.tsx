'use client';
import React, { useState } from 'react';
import { CV_DRIVE_URL } from '../profile/Profile';
import { useAuth } from '@/contexts/AuthProvider';



const CVReader = () => {
    const {isResumeOpen} = useAuth()

    return (
        <div>
            <iframe
                className={`absolute ${isResumeOpen? 'h-[92vh]':'h-0'}  top-10 left-0 transition-all duration-500 ease-in-out`}
                src={CV_DRIVE_URL.PREVIEW}
                width="100%"
                height="600px"
                title="PDF Viewer"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default CVReader;
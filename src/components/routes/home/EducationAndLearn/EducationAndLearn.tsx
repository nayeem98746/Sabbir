import React from 'react';
// import homeST from "../../../../styles/Home.module.css";
import Education from './Education';
const homeST = {}

const EducationAndLearn = () => {
    return (
        <section>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 inline-block relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-teal-400 after:rounded-full">Education</h3>
            <div className={'homeST.historyST_overwrite_home'}>
               <Education></Education>
            </div>
        </section>
    );
};

export default EducationAndLearn;
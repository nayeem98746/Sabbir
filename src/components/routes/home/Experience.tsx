import React from 'react';
// import homeST from "../../../../styles/Home.module.css";
import WorkHistory from '../history/WorkHistory';
const homeST = {}
const Experience = () => {
    return (
        <section>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 inline-block relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-teal-400 after:rounded-full">Experience</h3>
            <div className={'homeST.historyST_overwrite_home'}>
                <WorkHistory></WorkHistory>
            </div>
        </section>
    );
};

export default Experience;
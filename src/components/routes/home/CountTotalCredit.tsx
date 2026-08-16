import React from 'react';
// import homeST from "../../../../styles/Home.module.css";
import CounterNumber from '@/components/common/CounterNumber';




const couonters = [
    {title:"Years Experience", count: 3},
    {title:"Completed Projects", count: 10},
    {title:"Blogs", count: 5},
    {title:"Assisted Projects", count: 8},
]

const CountTotalCredit = () => {
    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10 rounded-md p-6 md:p-8 bg_mute -mt-10 relative z-20">
            {
                couonters.map(counter => <div className={'homeST.countTotal flex flex-col gap-1 justify-center items-center font-normal'} key={counter.title}>
                <p>
                    <CounterNumber className={'homeST.countNumber font-bold text-4xl text-teal-400'} start={0} end={counter.count} duration={1000} speed={100} style={{}} />
                    <span className={'homeST.countNumber font-bold text-4xl text-teal-400'}>+</span>
                </p>
                <p className='text-sm text-typo_mute'>{counter.title}</p>
            </div>)
            }


        </section>
    );
};

export default CountTotalCredit;
import React from 'react';
// import WorkCard from './WorkCard';
// import workCardST from "../../../../styles/History.module.css";
import CardST from "../../history/cardStyle.module.css";
import WorkCard from '../../history/WorkCard';
import { educationsData, learningsData } from './eduDB';
const workCardST = {}

const Education = () => {

    return (
        <div className="flex flex-col gap-14">
            <section>
                <h4 className="text-lg font-semibold text-teal-400 mb-6">Courses</h4>
                <div className={CardST.cards}>
                    {
                        learningsData.map((work,idx) => <WorkCard work={work} key={`work_${idx}`}></WorkCard>)
                    }
                </div>
            </section>
            <section>
                <h4 className="text-lg font-semibold text-teal-400 mb-6">Education</h4>
                <div className={CardST.cards}>
                    {
                        educationsData.map((work,idx) => <WorkCard work={work} key={`work_${idx}`}></WorkCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Education;
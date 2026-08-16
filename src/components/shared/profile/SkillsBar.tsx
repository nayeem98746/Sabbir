import React from 'react';
import skillsST from "./Skills.module.css";

const label_percent = {
    learning: {value:20, label:"learning"},
    basic: {value:40, label:"basic"},
    intermediate: {value:70, label:"intermediate"},
    advanced: {value:80, label:"advanced"},
    expert: {value:90, label:"expert"},
}
const skills = [
    // label and value must match with available css class
    {title:"Node.js",...label_percent.expert},
    {title:"SQL & MongoDB",...label_percent.advanced},
    {title:"React, Next & Vue",...label_percent.expert},
    {title:"Typescript",...label_percent.expert},
    {title:"Javascript",...label_percent.advanced},
    {title:"VPS Management",...label_percent.intermediate},
    {title:"PM2",...label_percent.intermediate},
    {title:"Nginx",...label_percent.intermediate},
    {title:"Git",...label_percent.advanced},
    {title:"Tailwind & MUI",...label_percent.advanced},
    {title:"Socket.IO",...label_percent.intermediate},
    {title:"Python",...label_percent.intermediate},
    {title:"Prisma & Mongoose",...label_percent.expert},
    {title:"HTML5/CSS3",...label_percent.expert},
    {title:"Jest/Testing library",...label_percent.intermediate},
]
const SkillsBar = () => {
    return (
        <div className={skillsST.skills_container}>
            {
                skills.slice(0,4).map(skill => <div key={skill.title}>
                    <div className='flex justify-between'>
                        <p style={{marginBottom:"4px"}}>{skill.title}</p>
                        <p style={{marginBottom:"4px"}}>{skill.value}%</p>
                    </div>
                    <div className={`${skillsST.bar} ${skillsST.front} ${skillsST[skill.label]}`}  data-skill={skill.title}></div>
                </div>)
            }
            {/*
            <div>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <p style={{marginBottom:"4px"}}>Python</p>
                    <p style={{marginBottom:"4px"}}>20%</p>
                </div>
                <div className={`${skillsST.bar} ${skillsST.learning}`} data-skill="Python"></div>
            </div>
            <div>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <p style={{marginBottom:"4px"}}>C++</p>
                    <p style={{marginBottom:"4px"}}>40%</p>
                </div>
                <div className={`${skillsST.bar} ${skillsST.back} ${skillsST.basic}`}  data-skill="C++"></div>
            </div>
             */}
      </div>
    );
};

export default SkillsBar;
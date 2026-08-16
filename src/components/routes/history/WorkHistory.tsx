import React from 'react';
import WorkCard from './WorkCard';
import CardST from "./cardStyle.module.css";
// import workCardST from "../../../../styles/History.module.css";

const works = [
    {
        company:"Peasy AI",
        company_address:"Kuala Lumpur, Malaysia",
        position:"Software Engineer",
        join_date:"Feb 2023",
        leave_date:"Present",
        web_url:"https://peasy.ai",
        summery:"Developed SaaS applications using Node.js and Next.js, while enhancing functionalities across Vue.js and React.js projects.",
        highlights:[
            "Integrated Zapier with Peasy bot, enhancing automation and boosting user satisfaction by 20%.",
            "Collaborated with Customer Support to develop features, enriching user experience and reducing support queries by 15%",
            "Built REST API with PostgreSQL (Prisma) for webhooks, enabling real-time data analysis of user preferences.",
            "Streamlined data processing workflows, cutting data handling time by 30% and improving system responsiveness.",
            "Maintained server VPS and EC2 instance for building and maintain production application using nginx and PM2"
        ]
    },
    {
        company:"Biddrup",
        company_address:"Khulna,Bangladesh",
        position:"Web developer",
        join_date:"Oct 2021",
        leave_date:"Jan 2023",
        web_url:"https://biddrup.com",
        summery:"Collaborated within a dynamic team to develop MERN stack applications, integrating ffmpeg for robust video processing and socket.IO to enhance real-time user interactions.",
        highlights:[
            "Engineered a cutting-edge video processing tool using ffmpeg, adeptly solving complex technical challenges in Node.js and React.js.",
            "Transformed static WordPress sites into dynamic MERN applications, introducing advanced data management capabilities to optimize user experiences.",
            "Enhanced application reliability and performance through detailed debugging and strategic enhancements, earning recognition from peers for significant contributions."
        ]
    },
    {
        company:"Biddrup",
        company_address:"Khulna,Bangladesh",
        position:"Web developer",
        join_date:"Oct 2021",
        leave_date:"March 2022",
        web_url:"https://biddrup.com",
        summery:"Created Professional WordPress Themes & Templates for Personal and Creative Websites.",
        highlights:["Lead the frontend developer team","Colleborated with the backend developer team","Improved app performance 12% by reducing server integration"]
    },
]

const WorkHistory = () => {
    return (
        <aside>
            <h3 className='mb-8 mt-4'>Work Experience</h3>
            <div className={CardST.cards}>
                {
                    works.slice(0,2).map((work,idx) => <WorkCard work={work} key={`work_${idx}`}></WorkCard>)
                }
            </div>
        </aside>
    );
};

export default WorkHistory;
import Image from 'next/image';
import NavLink from 'next/link';
import React from 'react';
// import homeST from "../../../../styles/Home.module.css";
// import certif from "../../../../public/images/assets/certificates";
import ph_certificate from "@/assest/images/certificates/programming_hero_L1.jpg"


const certificates = [
    {
        provider: "Programming Hero",
        course_name: "Web Developer",
        cartificate_url: ph_certificate,
        course_details: "I learnt the recent technologies from this online course over 6 months. After successfully completing the couse I achieved the certificate from 'Programming Hero' as a recommand to be hired for web development job.",
        tech_learn: ['React.js',"Node.js","Redux","MongoDB","Javascript"],
        ref:"https://web.programming-hero.com/congrats/complete/61bdfafcf5118b71ade5a792"
    },
    {
        provider: "Udemy",
        course_name: "MERN Stack with Blog Project",
        cartificate_url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b3ca9ded-536e-497c-bb83-ee0fca125096.jpg?v=1655659880000',
        course_details: "I learnt practical implementation of CSS from this course. It also helped to increase my knowledge on advanced CSS rules like pseudo classes, custom properties, and manupulation of css using javascript.",
        tech_learn: ["CSS3"],
        ref:"https://www.udemy.com/certificate/UC-daeb9648-ee1a-4439-8a39-7eea03f28eff/"
    },
    {
        provider: "Udemy",
        course_name: "MERN Stack with Blog Project",
        cartificate_url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-daeb9648-ee1a-4439-8a39-7eea03f28eff.jpg?v=1656867140000',
        course_details: "Completed this online course from Udemy. Here I learnt the implementation of MERN stack in a blog project. Got the certificate after successfully completing the course.",
        tech_learn: ['React.js',"Node.js","Express.js","MongoDB"],
        ref:"https://www.udemy.com/certificate/UC-b3ca9ded-536e-497c-bb83-ee0fca125096/"
    },

]

const CertificatesAwards = () => {
    return (
        <section>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 inline-block relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-teal-400 after:rounded-full">Certificates and Awards</h3>
            <div className={'homeST.certificates flex flex-wrap justify-between gap-y-8 gap-x-4'}>
                {
                    certificates.slice(0,2).map(certificte => <div className={'homeST.certificate bg_mute p-4 rounded-sm flex-grow basis-[350px]  min-w-[250px]  min-h-64 scale_regular_animation'} key={certificte.course_name}>
                        <div className={'homeST.certificate_img relative h-64 opacity-80'}>
                            <Image  src={certificte.cartificate_url}  fill={true}   loading='lazy' alt={certificte.course_name} ></Image>
                        </div>
                        <div className={'homeST.certificate_info mt-2.5'}>
                            <h4>{certificte.course_name}</h4>
                            <div className={'homeST.certificate_provider flex justify-between items-center'}>
                                <h5><i>{certificte.provider}</i></h5>
                                <NavLink href={certificte.ref} passHref={true} legacyBehavior>
                                    <a className={'homeST.certificate_reference no-underline bg-[#152230] px-2 mt-1 rounded-sm text-green-300 hover:text-teal-400 transition-all duration-200 ease-in-out hover:transition-all hover:duration-200 hover:ease-in-out'} target={"_blank"} rel="noopener noreferrer">Reference</a>
                                </NavLink>
                            </div>
                            <div className={'homeST.certificate_techs flex flex-wrap justify-center gap-1 my-1'}>
                                {
                                    certificte.tech_learn.map(tech => <span className={'homeST.certificate_tech px-1 rounded-sm text-teal-400'} style={{boxShadow:"inset 0 0 2px 1px #887e7ea9"}} key={tech}>{tech}</span>)
                                }
                            </div>
                            <p className='text-typo_mute text-base tracking-tight leading-5'>{certificte.course_details}</p>
                        </div>

                    </div>)
                }

            </div>
        </section>
    );
};

export default CertificatesAwards;
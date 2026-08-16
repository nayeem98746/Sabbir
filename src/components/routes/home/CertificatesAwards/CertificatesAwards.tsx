import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import ph_certificate from "@/assest/images/certificates/programming_hero_L1.jpg";

// Types
interface Certificate {
    provider: string;
    course_name: string;
    cartificate_url: string ;
    course_details: string;
    tech_learn: string[];
    ref: string;
}

const certificates: Certificate[] = [
    {
        provider: "Programming Hero",
        course_name: "Web Developer",
        cartificate_url:  "",
        course_details: "I learnt the recent technologies from this online course over 6 months. After successfully completing the course I achieved the certificate from 'Programming Hero' as a recommendation to be hired for web development job.",
        tech_learn: ['React.js', "Node.js", "Redux", "MongoDB", "Javascript"],
        ref: "https://web.programming-hero.com/congrats/complete/61bdfafcf5118b71ade5a792"
    },
    {
        provider: "Udemy",
        course_name: "Advanced CSS3",
        cartificate_url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b3ca9ded-536e-497c-bb83-ee0fca125096.jpg?v=1655659880000',
        course_details: "I learnt practical implementation of CSS from this course. It also helped to increase my knowledge on advanced CSS rules like pseudo classes, custom properties, and manipulation of CSS using JavaScript.",
        tech_learn: ["CSS3"],
        ref: "https://www.udemy.com/certificate/UC-daeb9648-ee1a-4439-8a39-7eea03f28eff/"
    },
    {
        provider: "Udemy",
        course_name: "MERN Stack with Blog Project",
        cartificate_url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-daeb9648-ee1a-4439-8a39-7eea03f28eff.jpg?v=1656867140000',
        course_details: "Completed this online course from Udemy. Here I learnt the implementation of MERN stack in a blog project. Got the certificate after successfully completing the course.",
        tech_learn: ['React.js', "Node.js", "Express.js", "MongoDB"],
        ref: "https://www.udemy.com/certificate/UC-b3ca9ded-536e-497c-bb83-ee0fca125096/"
    },
];

const CertificatesAwards = () => {
    // Memoize the sliced certificates to avoid recalculation
    const displayedCertificates = useMemo(() => certificates.slice(0, 2), []);

    return (
        <section>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 inline-block relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-teal-400 after:rounded-full">
                Certificates and Awards
            </h3>
            
            <div className="flex flex-wrap justify-between gap-y-8 gap-x-4">
                {displayedCertificates.map((certificate) => (
                    <div 
                        className="bg_mute p-4 rounded-sm flex-grow basis-[350px] min-w-[250px] min-h-64 scale_regular_animation" 
                        key={certificate.course_name}
                    >
                        <div className="relative h-64 opacity-80">
                            {/* <Image 
                                src={certificate.cartificate_url} 
                                fill
                                sizes="(min-width: 640px) 350px, 100vw"
                                className="object-cover rounded-sm"
                                alt={certificate.course_name}
                                loading="lazy"
                            /> */}
                        </div>
                        
                        <div className="mt-2.5">
                            <h4 className="text-white text-lg font-semibold">{certificate.course_name}</h4>
                            
                            <div className="flex justify-between items-center">
                                <h5 className="text-gray-400 italic">{certificate.provider}</h5>
                                <Link
                                    href={certificate.ref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="no-underline bg-[#152230] px-2 mt-1 rounded-sm text-green-300 hover:text-teal-400 transition-all duration-200 ease-in-out"
                                >
                                    Reference
                                </Link>
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-1 my-1">
                                {certificate.tech_learn.map((tech) => (
                                    <span 
                                        className="px-1 rounded-sm text-teal-400 text-sm" 
                                        style={{ boxShadow: "inset 0 0 2px 1px #887e7ea9" }}
                                        key={tech}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <p className="text-typo_mute text-base tracking-tight leading-5">
                                {certificate.course_details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Optional: Show more button if there are more certificates */}
            {certificates.length > 2 && (
                <div className="text-center mt-10">
                    <Link 
                        href="/certificates" 
                        className="inline-block px-6 py-2 bg-teal-400 text-black font-bold rounded-full hover:bg-teal-300 transition-colors"
                    >
                        View All Certificates
                    </Link>
                </div>
            )}
        </section>
    );
};

export default CertificatesAwards;
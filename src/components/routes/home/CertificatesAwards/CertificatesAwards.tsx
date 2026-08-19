import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { StaticImageData } from 'next/image';
import ph_certificate from "@/assest/images/certificates/programming_hero_certificate.png";
import Linkedin_certificate from "@/assest/images/certificates/Linkdiin_certificate.png";
import Experince_latter from "@/assest/images/certificates/Sabbir-Experience-Letter.jpg";

// Types
interface Certificate {
    provider: string;
    course_name: string;
    cartificate_url: string | StaticImageData;
    course_details: string;
    tech_learn: string[];
    ref: string;
}

const certificates: Certificate[] = [
    {
        provider: "Programming Hero",
        course_name: "Web Developer",
        cartificate_url: ph_certificate,
        course_details: "I learnt the recent technologies from this online course over 6 months. After successfully completing the course I achieved the certificate from 'Programming Hero' as a recommendation to be hired for web development job.",
        tech_learn: ['React.js', "Node.js", "Redux", "MongoDB", "Javascript"],
        ref: "https://drive.google.com/file/d/19ErBnqxgAVW1kL877AFfxpZO-i7nHwfm/view?usp=sharing"
    },
    {
        provider: "Linkedin Learning",
        course_name: "A Career Strategist's Guide to Getting a Job",
        cartificate_url: Linkedin_certificate,
        course_details: "Completed the LinkedIn Learning course 'A Career Strategist's Guide to Getting a Job', gaining practical knowledge about career planning, job-search strategies, personal positioning, and techniques for improving employability.",
        tech_learn: ["Strategist's Guide to Getting a Job"],
        ref: "https://drive.google.com/file/d/1yY73IFnnClD-dO3USgL1ZJ6JTNVhk7SU/view?usp=sharing"
    },
    
    
];

const CertificatesAwards = () => {
    // Display only first 4 certificates
    const displayedCertificates = useMemo(() => certificates.slice(0, 4), []);

    return (
        <section>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 inline-block relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-teal-400 after:rounded-full">
                Certificates and Awards
            </h3>

            {/* Grid layout: 2 columns, 2 rows (4 items total) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedCertificates.map((certificate) => (
                    <div
                        className="bg_mute p-4 rounded-sm min-h-64 scale_regular_animation"
                        key={certificate.course_name}
                    >
                        <div className="relative h-48 md:h-56 lg:h-64 opacity-80">
                            <Image 
                                src={certificate.cartificate_url} 
                                fill
                                sizes="(min-width: 640px) 350px, 100vw"
                                className="object-cover rounded-sm"
                                alt={certificate.course_name}
                                loading="lazy"
                            />
                        </div>

                        <div className="mt-2.5">
                            <h4 className="text-white text-base md:text-lg font-semibold line-clamp-2">
                                {certificate.course_name}
                            </h4>

                            <div className="flex justify-between items-center">
                                <h5 className="text-gray-400 italic text-sm">{certificate.provider}</h5>
                                <Link
                                    href={certificate.ref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="no-underline bg-[#152230] px-2 mt-1 rounded-sm text-green-300 hover:text-teal-400 transition-all duration-200 ease-in-out text-sm"
                                >
                                    Reference
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-1 my-1">
                                {certificate.tech_learn.map((tech) => (
                                    <span
                                        className="px-1 rounded-sm text-teal-400 text-xs md:text-sm"
                                        style={{ boxShadow: "inset 0 0 2px 1px #887e7ea9" }}
                                        key={tech}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="text-typo_mute text-xs md:text-sm tracking-tight leading-5 line-clamp-3">
                                {certificate.course_details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Optional: View All button if there are more than 4 certificates */}
            {certificates.length > 4 && (
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
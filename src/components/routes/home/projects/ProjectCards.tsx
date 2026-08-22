'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allStaticProjects } from './projectDB';

interface ProjectLink {
    name: string;
    link: string;
}

interface Project {
    title: string;
    thumb_url: string;
    sort_text: string;
    links: ProjectLink[];
}

const ProjectCards = () => {
    const [projects] = useState<Project[]>(allStaticProjects);
    const displayedProjects = useMemo(() => projects.slice(0, 6), [projects]);

    return (
        <section>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 inline-block relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-teal-400 after:rounded-full">
                Works
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                {displayedProjects.map((project) => (
                    <div
                        key={project.title}
                        className="group relative bg-card rounded-lg text-sm border border-white/10 hover:border-teal-400/60 h-80 overflow-hidden shadow-md hover:shadow-2xl hover:shadow-teal-400/10 transition-all duration-500 hover:-translate-y-1"
                    >
                        {/* Image */}
                        <Link href="/projects" className="block absolute inset-0">
                            <Image
                                src={project.thumb_url}
                                width={250}
                                height={400}
                                alt={project.title}
                                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-[0.35]"
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            />
                        </Link>

                        {/* Always-visible bottom gradient so the title reads even at rest */}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />

                        {/* Title, visible at rest, fades out on hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                            <h4 className="text-white font-semibold drop-shadow-sm">{project.title}</h4>
                        </div>

                        {/* Hover overlay: full-card info reveal */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                            <h4 className="text-white text-lg font-semibold mb-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                {project.title}
                            </h4>
                            <p className="text-typo_mute text-xs leading-5 mb-4 line-clamp-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                {project.sort_text}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                {project.links.map((url) => (
                                    <Link
                                        key={url.name}
                                        href={url.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-teal-400 text-black px-3 py-1 rounded-full font-bold no-underline whitespace-nowrap text-xs hover:bg-teal-300 hover:scale-105 transition-all"
                                    >
                                        {url.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* {projects.length > 6 && (
                <div className="text-center mt-10">
                    <Link
                        href="/projects"
                        className="inline-block px-6 py-2 bg-teal-400 text-black font-bold rounded-full hover:bg-teal-300 transition-colors"
                    >
                        View All Projects
                    </Link>
                </div>
            )} */}
        </section>
    );
};

export default ProjectCards;
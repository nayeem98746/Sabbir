'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allStaticProjects } from './projectDB';

// Types
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

interface Blog {
    name: string;
    alt: string;
    thumb: string;
    description: string;
    url: string;
}

const blogs: Blog[] = [
    {
        name: "Basic of Redux — A beginner Guide",
        alt: "Basic of Redux — A beginner Guide",
        thumb: "https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966",
        description: "The idea of predictability in state management is what makes Redux so great! It not only helps us keep our app's UI up-to date with the current server environment, but also guarantees that no two user interactions will ever be duplicate requests.",
        url: "https://medium.com/@shuvoh38/basic-of-redux-a-beginner-guide-b26027288f08"
    },
];

const ProjectCards = () => {
    const [projects] = useState<Project[]>(allStaticProjects);
    
    // Memoize the sliced projects to avoid recalculating on every render
    const displayedProjects = useMemo(() => projects.slice(0, 6), [projects]);

    return (
        <section>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 inline-block relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-teal-400 after:rounded-full">
                Works
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                {displayedProjects.map((project) => (
                    <div 
                        className="group relative bg-card rounded-md text-sm border border-transparent hover:border-blue-700 h-80 overflow-hidden" 
                        key={project.title}
                    >
                        <div>
                            <div className="h-72 overflow-hidden opacity-80">
                                <Link href="/projects">
                                    <Image 
                                        src={project.thumb_url} 
                                        width={250} 
                                        height={400} 
                                        alt={project.title}
                                        className="object-cover w-full h-full"
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    />
                                </Link>
                            </div>
                            
                            <div className="group-hover:-bottom-0 -bottom-36 group-hover:transition-all transition-all group-hover:duration-500 duration-500 group-hover:ease-in-out ease-in-out absolute left-0 py-1 px-2 h-44 bg-[#2c2c2c] w-full">
                                <h4 className="mb-1 text-white">{project.title}</h4>
                                <p className="text-typo_mute text-xs leading-4">{project.sort_text}</p>
                                
                                <div className="absolute bottom-2 flex flex-wrap justify-center gap-1">
                                    {project.links.map((url) => (
                                        <Link
                                            key={url.name}
                                            href={url.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-teal-400 text-black my-1 px-1 rounded-sm font-bold no-underline whitespace-nowrap text-xs lg:text-base"
                                        >
                                            {url.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Optional: Add "View All Projects" button if needed */}
            {projects.length > 6 && (
                <div className="text-center mt-10">
                    <Link 
                        href="/projects" 
                        className="inline-block px-6 py-2 bg-teal-400 text-black font-bold rounded-full hover:bg-teal-300 transition-colors"
                    >
                        View All Projects
                    </Link>
                </div>
            )}
        </section>
    );
};

export default ProjectCards;
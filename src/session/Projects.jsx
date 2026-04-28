import React from 'react'
import MainContent from '../layout/MainContent'
import ProjectCard from '../component/card/ProjectCard'

function Projects() {
    return (
        <div className='text-white'>
            <MainContent>
                {/* batas */}
                <div className='flex w-full items-center justify-center mb-5'>
                    <div className="grow h-px bg-[#666666]"></div>
                    <span className="mx-6 text-[#666666] font-mono text-lg tracking-widest">
                        /experience
                    </span>
                    <div className="grow h-px bg-[#666666]"></div>
                </div>

                {/* project */}
                <div className='grid grid-cols-2'>
                    {/* title */}
                    <div className='text-amber-300'>
                        [IT]
                    </div>
                    <div className='text-blue-400'>
                        [Data]
                    </div>

                    {/* project list */}

                    <ProjectCard
                        title="Project 1"
                        image="/path/to/image1.jpg"
                        link="https://example.com/project1"
                    />
                    <ProjectCard
                        title="Project 2"
                        image="/path/to/image2.jpg"
                        link="https://example.com/project2"
                    />
                    <ProjectCard
                        title="Project 1"
                        image="/path/to/image1.jpg"
                        link="https://example.com/project1"
                    />
                    <ProjectCard
                        title="Project 2"
                        image="/path/to/image2.jpg"
                        link="https://example.com/project2"
                    />

                </div>
            </MainContent>
        </div>
    )
}

export default Projects
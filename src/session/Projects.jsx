import React from 'react'
import MainLayout from '../layout/MainLayout'
import ProjectCard from '../component/card/ProjectCard'
import sertif from '/src/assets/myself/certifications/dicoding_sql/sql_2.png'

function Projects() {
    return (
        <div className='text-white'>
            <MainLayout>
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
                        image={sertif}
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
            </MainLayout>
        </div>
    )
}

export default Projects
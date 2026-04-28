import React from 'react'
import ExperienceCard from '../component/ExperienceCard'
import MainContent from '../layout/MainContent'
import CertificationCard from '../component/CertificationCard'

function Experience() {
    return (
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 text-white'>
            <MainContent>

                <div className='flex w-full items-center justify-center mb-5'>
                    <div className="grow h-px bg-[#666666]"></div>
                    <span className="mx-6 text-[#666666] font-mono text-lg tracking-widest">
                        /experience
                    </span>
                    <div className="grow h-px bg-[#666666]"></div>
                </div>

                {/* Job Experience */}
                <ExperienceCard 
                    job="Frontend Developer"
                    company="PT. Tech Solutions"
                    date="Jan 2023 - Present"
                    description="Developed and maintained responsive web applications using React and TypeScript."
                    type="Full-time"
                />
                <ExperienceCard 
                    job="UI/UX Designer"
                    company="PT. Creative Minds"
                    date="Jun 2022 - Dec 2022"
                    description="Designed user interfaces and experiences for various digital products."
                    type="Part-time"
                />
                <ExperienceCard 
                    job="Intern - Web Developer"
                    company="PT. Digital Hub"
                    date="Feb 2022 - May 2022"
                    description="Assisted in the development and testing of web applications."
                    type="Internship"
                />

                {/* Training & Certification */}

                
            </MainContent>
        </div>
    )
}

export default Experience
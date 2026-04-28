import React from 'react'

function ExperienceCard({ job, company, date, description, type}) {
    return (
        <div className="flex items-start gap-5">
            {/* Line */}
            <div className="flex flex-col items-center h-45 w-10">

                <div className="relative">
                    <div className="w-8 h-8 rounded-full border-4 border-yellow-500 bg-black"></div>
                </div>
                <div className='w-1 h-full bg-amber-400'></div>

            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 py-3 w-full">
                <div className='grid grid-cols-2 items-center gap-5'>
                    <div className='flex justify-start text-2xl '>
                        {job}
                    </div>

                    <div className='flex justify-end text-gray-400 text-lg font-mono tracking-widest'>
                        {date}
                    </div>
                </div>

                <div>
                    {company}
                </div>

                <div className='max-w-lg'>
                    {description}
                </div>

                <div className='flex w-fit px-2 items-center justify-center border border-amber-400 text-amber-400'>
                    {type}
                </div>
            </div>

        </div>
    )
}

export default ExperienceCard
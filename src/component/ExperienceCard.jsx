import React from 'react'

function ExperienceCard({ job, company, date, description, type, onClick, isActive }) {
    return (
        <div 
            onClick={onClick}
            className={`flex items-start gap-5 cursor-pointer transition-all duration-300 p-2 rounded-lg ${isActive ? 'bg-white/5' : 'hover:bg-white/5'}`}
        >
            {/* Line UI */}
            <div className="flex flex-col items-center w-10">
                <div className="relative">
                    <div className={`w-8 h-8 rounded-full border-4 transition-colors ${isActive ? 'border-amber-400 bg-amber-400' : 'border-yellow-500 bg-black'}`}></div>
                </div>
                {/* Tinggi line otomatis menyesuaikan */}
                <div className='w-1 h-24 bg-amber-400 opacity-30'></div>
            </div>

            {/* Description UI */}
            <div className="flex flex-col gap-2 py-1 w-full">
                <div className='flex justify-between items-center'>
                    <div className={`text-2xl font-bold transition-colors ${isActive ? 'text-amber-400' : 'text-white'}`}>
                        {job}
                    </div>
                    <div className='text-gray-500 text-sm font-mono tracking-widest'>
                        {date}
                    </div>
                </div>

                <div className="text-amber-200 text-sm italic">{company}</div>

                <div className='max-w-xl text-gray-400 text-sm leading-relaxed'>
                    {description}
                </div>

                <div className='flex w-fit px-3 py-1 mt-2 text-[10px] uppercase font-bold border border-amber-400 text-amber-400'>
                    {type}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
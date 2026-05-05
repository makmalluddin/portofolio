import React, { memo } from 'react';
import CircularGallery from '/components/CircularGallery';
import { Icon } from "@iconify/react";

// Membungkus dengan memo untuk mencegah re-render yang tidak perlu
const ExperienceCard = memo(({ job, color, company, date, description, type, onClick, isActive, images }) => {

    const colorVariants = {
        amber: "bg-amber-400 border-amber-400",
        cyan: "bg-cyan-400 border-cyan-400"
    }

    const borderVariants = {
        amber: "border-amber-400 bg-transparent",
        cyan: "border-cyan-400 bg-transparent"
    }

    const textVariants = {
        amber: "text-amber-400",
        cyan: "text-cyan-400"
    }

    return (
        <div className="flex flex-col mb-4">
            <div
                onClick={onClick}
                className={`flex items-start gap-5 cursor-pointer transition-all duration-300 p-2 rounded-lg ${isActive ? 'bg-white/5' : 'hover:bg-white/5'}`}
            >
                {/* Line UI */}
                <div className="flex flex-col items-center w-10">
                    <div className="relative">
                        <div className={`w-8 h-8 rounded-full border-4 transition-colors ${isActive ? colorVariants[color] : borderVariants[color]}`}></div>
                    </div>
                    <div className={`w-1 h-24 ${colorVariants[color]} opacity-30`}></div>
                </div>

                {/* Description UI */}
                <div className="flex flex-col gap-2 py-1 w-full text-left">
                    <div className='flex justify-between items-center'>
                        <div className={`text-2xl font-bold transition-colors ${isActive ? textVariants[color] : 'text-white'}`}>
                            {job}
                        </div>
                        <div className='text-gray-400 text-sm font-mono tracking-widest'>
                            {date}
                        </div>
                    </div>
                    <div className={`${textVariants[color]} text-sm italic`}>{company}</div>
                    <div className='max-w-xl text-gray-400 text-sm leading-relaxed'>
                        {description}
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className={`flex w-fit px-3 py-1 mt-2 text-[10px] uppercase font-bold border ${borderVariants[color]} ${textVariants[color]}`}>
                            {type}
                        </div>

                        <div className={`flex text-sm relative group items-end gap-2 ${textVariants[color]} opacity-40 hover:${textVariants[color]} hover:opacity-80`}>
                            details
                            <span className='flex text-xl justify-end items-start rotate-135'>
                                <Icon icon="solar:arrow-up-linear" />
                            </span>

                        <span className={`absolute -bottom-1 left-0 w-0 h-px ${colorVariants[color]} transition-all duration-200 group-hover:w-full`}>
                        </span>

                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Galeri di dalam kartu namun hanya dimuat saat aktif */}
            {isActive && (
                <div className='ml-14 mt-4 border border-gray-800 rounded-xl bg-[#0f0f0f] overflow-hidden'
                    style={{ height: '400px', position: 'relative' }}>
                    <CircularGallery
                        items={images}
                        bend={1}
                        borderRadius={0.05}
                        scrollSpeed={2}
                        scrollEase={0.05}
                    />
                </div>
            )}
        </div>
    );
});

export default ExperienceCard;
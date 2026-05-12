import React, { memo } from 'react';
import CircularGallery from '/components/CircularGallery';
import { Icon } from "@iconify/react";

const ExperienceCard = memo(({ job, color, company, date, details, expertise, type, onClick, isActive, images }) => {

    const colorVariants = {
        amber: "bg-amber-400 border-amber-400",
        cyan: "bg-cyan-400 border-cyan-400",
    }

    const borderVariants = {
        amber: "border-amber-400 bg-transparent",
        cyan: "border-cyan-400 bg-transparent",
    }

    const textVariants = {
        amber: "text-amber-400",
        cyan: "text-cyan-400",
    }

    return (
        <div className="flex flex-col mb-4 group">
            <div
                onClick={onClick}
                className={`flex items-start gap-5 transition-all duration-500 p-5 rounded-2xl border group-hover:cursor-pointer
                    ${isActive
                        ? `bg-linear-to-br from-white/15 to-transparent backdrop-blur-xl ${borderVariants[color]} shadow-2xl`
                        : `border-white/5 hover:bg-white/5 hover:backdrop-blur-md hover:border-white/30 hover:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.05)]`
                    }`}
                style={{
                    // Efek "Glass Drop" tambahan menggunakan bayangan halus
                    boxShadow: isActive
                        ? '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                        : 'none'
                }}
            >
                {/* Line UI */}
                <div className="flex flex-col items-center w-10">
                    <div className="relative">
                        <div className={`w-8 h-8 rounded-full border-4 transition-colors ${isActive ? colorVariants[color] : borderVariants[color]}`}></div>
                    </div>
                    <div className={`w-1 h-28 ${colorVariants[color]} opacity-30`}></div>
                </div>

                {/* Description UI */}
                <div className="flex flex-col gap-2 py-1 w-full text-left">
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col items-start'>
                            <div className={`text-[24px] font-bold transition-colors ${isActive ? textVariants[color] : 'text-white/80'}`}>
                                {job}
                            </div>
                            <div className='text-gray-300 text-lg font-mono tracking-widest'>
                                {date}
                            </div>
                        </div>
                        <div className={`flex w-fit px-3 py-1 mt-2 text-[10px] uppercase font-bold opacity-80 border ${borderVariants[color]} ${textVariants[color]}`}>
                            {type}
                        </div>
                    </div>
                    <div className={`${textVariants[color]} text-xl tracking-wider italic`}>
                        {company}
                    </div>

                    <div className='flex flex-col max-w-3xl text-gray-400 text-sm gap-1 leading-relaxed'>
                        {details.map((item, index) => (
                            <div className='flex text-white/70 gap-1'>
                                {/* Description */}
                                <div className='flex'>
                                    <div className='flex items-start justify-center text-[2em]'>
                                        <Icon icon='material-symbols-light:play-arrow-rounded' />
                                    </div>
                                    <div className='text-xl'>
                                        {item.text}
                                    </div>
                                </div>

                                {item.icon && (

                                    <div className='flex items-center'>
                                        <Icon icon={`${item.icon}`} />
                                    </div>
                                )}

                            </div>
                        ))}

                    </div>
                    <div className='flex justify-between w-full'>
                        <div className={`flex w-fit opacity-80 py-1 mt-2 text-md font-bold items-start ${textVariants[color]}`}>
                            {expertise}
                        </div>

                        <div className={`flex  cursor-pointer text-lg relative group transition-all items-end gap-2 ${textVariants[color]} opacity-0 group-hover:${textVariants[color]} group-hover:opacity-80`}>
                            details
                            <span className='flex text-xl justify-end items-start transition-all duration-200 rotate-90 group-hover:rotate-135'>
                                <Icon icon="solar:arrow-up-linear" />
                            </span>

                            <span className={`absolute -bottom-1 left-0 w-0 h-px ${colorVariants[color]} transition-all duration-200 group-hover:w-full`}>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Galery Experience */}
            {
                isActive && (
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
                )
            }
        </div >
    );
});

export default ExperienceCard;
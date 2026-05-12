import React from 'react'
import monitoring from '/src/assets/myself/projects/monitoring.webp'
import { Icon } from '@iconify/react'

function ProjectOption({ image, title, description, tools, type, color, onclick }) {
    const textcol = {
        cyan: 'text-cyan-400',
        amber: 'text-amber-400'
    }

    const bordercol = {
        cyan: 'border-cyan-400',
        amber: 'border-amber-400'
    }

    return (
        <a
            href={onclick}
            target='_blank'
            rel="noopener noreferrer"
            className={`relative w-full aspect-video overflow-hidden group cursor-pointer rounded-sm border border-white/30 hover:${bordercol[color]} hover:scale-102 transition-all duration-200`}>

            {/* Gambar Background */}
            <img
                alt='monitoring'
                src={image}
                className='w-full h-full object-cover'
            />

            {/* Overlay */}
            <div className='absolute flex flex-col gap-4 bottom-0 left-0 w-full z-10 p-3 h-fit translate-y-[calc(100%-3rem)] bg-black/80 group-hover:translate-y-0 duration-300 ease-in-out transition-all'>
                <div className='text-white text-xl font-bold'>
                    {title}
                </div>
                <div className='opacity-0 text-md group-hover:opacity-100 max-w-xl text-white/80'>
                    {description}
                </div>

                <div className='flex gap-2 justify-between pr-2 font-light'>
                    <div className='flex gap-2'>
                        {tools && tools.map((item) => (
                            <div className={`border p-1 ${bordercol[color]} ${textcol[color]} flex rounded-md items-center justify-center gap-1`}>
                                <Icon icon={item.icon} />
                                <div>
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`${textcol[color]}`}>
                        {type}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProjectOption
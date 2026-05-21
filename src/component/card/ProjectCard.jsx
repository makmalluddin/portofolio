import React, { memo } from 'react';
import { Icon } from '@iconify/react';

const ProjectCard = memo(({ image, title, description, tools, type, color = 'amber', onclick }) => {
    
    // Siasat 1: Object Mapping untuk warna aksen konstan (Amber = Data Science/ML, Cyan = Web Dev)
    const themeMap = {
        cyan: {
            text: 'text-cyan-400',
            border: 'border-cyan-500/20 hover:border-cyan-400',
            badge: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
            glow: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]'
        },
        amber: {
            text: 'text-amber-400',
            border: 'border-amber-500/20 hover:border-amber-400',
            badge: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
            glow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]'
        }
    };

    const theme = themeMap[color] || themeMap.amber;

    return (
        <a
            href={onclick}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative w-full aspect-video overflow-hidden group cursor-pointer rounded-xl border border-gray-800/80 bg-[#0b0c10] transition-all duration-500 ${theme.border} ${theme.glow} hover:scale-[1.015] will-change-transform block`}
        >
            {/* Visual Guard: Gradient hitam permanen di bawah agar judul SELALU terbaca jelas sebelum di-hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />

            {/* Gambar Background dengan Efek Zoom Lambat saat Hover */}
            <img
                alt={title}
                src={image}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                loading="lazy"
            />

            {/* Sliding Overlay Content (Menarik informasi dari bawah card) */}
            <div 
                className="absolute bottom-0 left-0 w-full z-20 p-4 flex flex-col gap-3 h-fit 
                bg-gradient-to-t from-black via-[#0d0f14]/98 to-[#0d0f14]/95 backdrop-blur-md border-t border-gray-800/40
                /* Siasat Utama: Didorong ke bawah, menyisakan tinggi container judul (~3.5rem) */
                translate-y-[calc(100%-3.5rem)] group-hover:translate-y-0 
                transition-transform duration-500 ease-out"
            >
                {/* Header Area: Judul Proyek Terkunci di h-8 agar tidak memicu bug posisi */}
                <div className="h-8 flex items-center">
                    <h3 className="text-white text-base md:text-lg font-bold tracking-wide truncate w-full">
                        {title}
                    </h3>
                </div>

                {/* Deskripsi Proyek: Fade-In dengan sedikit jeda (delay) agar transisi terasa smooth */}
                <p className="text-gray-400 text-xs md:text-sm font-mono leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 line-clamp-3">
                    {description}
                </p>

                {/* Footer Area: Tech Stack & Project Type Badge */}
                <div className="flex items-center justify-between pt-2.5 border-t border-gray-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    
                    {/* Siasat 3: List Tech Stack dengan perbaikan Unique Key */}
                    <div className="flex flex-wrap gap-2">
                        {tools && tools.map((item, index) => (
                            <div 
                                key={index} 
                                className={`border px-2 py-0.5 flex rounded-md items-center justify-center gap-1.5 bg-gray-950/40 ${theme.border} ${theme.text}`}
                            >
                                <Icon icon={item.icon} className="text-xs md:text-sm flex-none" />
                                <span className="text-[10px] md:text-xs font-mono font-medium tracking-wide">{item.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Badge Tipe Proyek (e.g., DS, ML, Web) */}
                    <div className={`border px-2 py-0.5 rounded-md text-[10px] md:text-xs font-mono font-bold tracking-wider uppercase flex-none ${theme.badge}`}>
                        {type}
                    </div>
                </div>
            </div>
        </a>
    );
});

export default ProjectCard;
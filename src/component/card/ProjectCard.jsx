import React from 'react'

function ProjectCard({ title, image, link }) {
    return (
        <div className="relative w-full aspect-video overflow-hidden border border-gray-800 group cursor-pointer bg-[#111111]">

            {/* 1. BACKGROUND IMAGE: Gambar Proyek */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* 2. OVERLAY LAYER: Warna Amber 80% */}
            {/* opacity-100 saat diam, opacity-0 saat hover */}
            <div className="absolute inset-0 bg-amber-500/80 transition-all duration-500 ease-in-out group-hover:opacity-0 flex items-center justify-center p-6 text-center">
                <h3 className="text-black font-mono font-bold text-xl tracking-tighter uppercase">
                    {title}
                </h3>
            </div>

            {/* 3. TOMBOL LINK: Muncul di Kiri Bawah */}
            {/* Menggunakan transform agar muncul dari bawah saat hover */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 bg-white text-black font-mono text-[10px] px-3 py-1.5 font-bold 
                   translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
            >
                VIEW_PROJECT.exe
            </a>

        </div>
    )
}

export default ProjectCard
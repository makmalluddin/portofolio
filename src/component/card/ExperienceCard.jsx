import React, { memo } from 'react';
import CustomCircularGallery from '../CustomCircullarGallery';
import { Icon } from "@iconify/react";

const ExperienceCard = memo(({ 
  job, 
  color = 'amber', 
  company, 
  date, 
  details = [], 
  expertise, 
  type, 
  onClick, 
  isActive, 
  images = [],
  keyImpacts = [], 
  docsLink = "#" 
}) => {

  const colorVariants = {
    amber: "bg-amber-400/80 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]",
    cyan: "bg-cyan-400/80 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]",
  };

  const borderVariants = {
    amber: "border-gray-800 bg-transparent text-gray-600",
    cyan: "border-gray-800 bg-transparent text-gray-600",
  };

  const textVariants = {
    amber: "text-amber-400",
    cyan: "text-cyan-400",
  };

  const ringVariants = {
    amber: "border-amber-400/40",
    cyan: "border-cyan-400/40"
  };

  return (
    <div className="flex w-full gap-4 relative group">
      
      {/* ================= PART 1: TIMELINE COLUMN (OUTSIDE CARD) ================= */}
      <div className="flex flex-col items-center w-12 flex-none relative">
        {/* Garis vertikal kontinu yang menghubungkan antar kartu */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-gray-800/90 left-1/2 -translate-x-1/2 z-0"></div>
        
        {/* Node Lingkaran Indikator */}
        <div 
          onClick={onClick}
          className="relative z-10 mt-6 cursor-pointer flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        >
          {isActive ? (
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center bg-[#0d0e12] ${textVariants[color]} ${ringVariants[color]}`}>
              <div className={`w-2 h-2 rounded-full ${colorVariants[color].split(' ')[0]} transition-all duration-300`}></div>
            </div>
          ) : (
            <div className="w-4 h-4 rounded-full border-2 border-gray-700 bg-[#0d0e12] transition-colors group-hover:border-gray-500"></div>
          )}
        </div>
      </div>

      {/* ================= PART 2: MAIN CARD CONTAINER ================= */}
      <div className="flex-1 flex flex-col">
        <div
          onClick={onClick}
          className={`grid grid-cols-1 lg:grid-cols-10 w-full rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden
            ${isActive
              ? `bg-[#0f1115]/90 border-gray-800 backdrop-blur-xl shadow-2xl shadow-black/80`
              : `bg-[#0d0e12]/40 border-gray-700 hover:bg-[#0f1115]/50 hover:border-gray-500`
            }`}
          style={{
            boxShadow: isActive
              ? '0 25px 60px -15px rgba(0, 0, 0, 0.9), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)'
              : 'none'
          }}
        >
          {/* LEFT PANEL: DESCRIPTION UI (60% Width on Large Screens) */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-left p-6 border-b lg:border-b-0 lg:border-r border-gray-900/60 justify-between">
            <div className="space-y-1">
              <h3 className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white/90'}`}>
                {job}
              </h3>
              <div className={`text-md font-bold tracking-wider font-mono ${textVariants[color]}`}>
                {company}
              </div>
              <div className="text-gray-400 text-xs font-mono uppercase tracking-widest pt-1">
                {date}
              </div>
            </div>

            {/* Bullet Points Deskripsi Kerja */}
            <ul className="space-y-3 my-2 text-gray-400 text-sm list-none pl-0">
              {details.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400/90 leading-relaxed">
                  <Icon 
                    icon="material-symbols:play-arrow-rounded" 
                    className={`text-xl flex-none mt-0.5 ${textVariants[color]} opacity-70`} 
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Footer */}
            <div className="flex flex-wrap gap-2 pt-2 text-sm font-mono font-medium text-gray-400">
              {expertise}
            </div>
          </div>

          {/* RIGHT PANEL: KEY IMPACTS & CTA (40% Width on Large Screens) */}
          <div className="lg:col-span-4 flex flex-col p-6 bg-[#090a0d]/40 justify-between gap-6">
            {/* Badge Status Pekerjaan */}
            <div className={`w-full py-2 px-4 border rounded-md text-center text-xs tracking-[0.2em] uppercase font-mono transition-all duration-300
              ${isActive ? `${textVariants[color]} border-gray-800 bg-gray-950/40` : 'border-gray-900 text-gray-600'}`}
            >
              {type || 'Intern'}
            </div>

            {/* Modul Ringkasan Dampak Kerja (Key Impact) */}
            <div className="flex-1 flex flex-col gap-2">
              <span className="text-gray-700 text-xs font-mono tracking-wider block mb-1">// key impact</span>
              {keyImpacts.length > 0 ? (
                keyImpacts.map((impact, idx) => (
                  <div 
                    key={idx} 
                    className="w-full border border-gray-900/60 bg-[#0d0e12]/40 rounded-lg p-3 text-xs font-mono flex items-center text-gray-500 tracking-wide"
                  >
                    {impact.highlight && (
                      <span className={`font-bold mr-2 text-sm ${textVariants[color]}`}>
                        {impact.highlight}
                      </span>
                    )}
                    <span>{impact.text}</span>
                  </div>
                ))
              ) : (
                <div className="text-gray-700 text-xs italic font-mono p-4 border border-dashed border-gray-900 rounded-lg text-center">
                  No impacts recorded
                </div>
              )}
            </div>

            {/* Tombol Aksi Dokumentasi (Hanya menyala ketika Aktif) */}
            <a
              href={docsLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Mencegah benturan event klik dengan penutupan kartu
              className={`w-full py-2.5 px-4 border rounded-md text-center text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2
                ${isActive 
                  ? `border-gray-800 bg-[#0d0e12] text-gray-400 hover:text-white hover:border-gray-600` 
                  : 'border-transparent text-transparent pointer-events-none opacity-0'
                }`}
            >
              <span>view docs</span>
              <Icon icon="solar:arrow-up-linear" className="rotate-45 text-sm" />
            </a>
          </div>
        </div>

        {/* Galeri Foto Sektor Bawah (Membuka secara akordeon) */}
        {isActive && images.length > 0 && (
          <div 
            className="ml-0 lg:ml-4 mt-4 border border-gray-800/80 rounded-xl bg-[#0a0b0d] overflow-hidden shadow-inner"
            style={{ height: '380px', position: 'relative' }}
          >
            <CustomCircularGallery
              items={images}
              bend={0}
              borderRadius={12}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
        )}
      </div>

    </div>
  );
});

export default ExperienceCard;
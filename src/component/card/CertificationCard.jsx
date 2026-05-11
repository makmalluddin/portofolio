/* CertificationCard.jsx */
import React, { memo } from 'react';

const CertificationCard = memo(({ title, provider, date, onHover, id, isActive }) => {
    return (
        <div 
            onMouseEnter={() => onHover(id)}
            onMouseLeave={() => {}} 
            className={`flex flex-col p-4 border-l-2 transition-all duration-300 cursor-crosshair text-left
                ${isActive 
                    ? 'border-amber-400 bg-white/10' // Style saat AKTIF (Menyala Permanen)
                    : 'border-gray-800 hover:border-gray-600 hover:bg-white/5' // Style saat MATI
                }`}
        >
            {/* Teks Provider */}
            <span className={`text-md font-mono uppercase tracking-widest transition-colors duration-300
                ${isActive ? 'text-amber-500' : 'text-gray-400'}`}>
                {provider} — {date}
            </span>

            {/* Judul Sertifikat */}
            <h3 className={`text-xl font-bold transition-colors duration-300
                ${isActive ? 'text-white' : 'text-gray-300'}`}>
                {title}
            </h3>
        </div>
    );
});

export default CertificationCard;
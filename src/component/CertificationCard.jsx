import React from 'react'

function CertificationCard({ title, provider, date, onHover, id }) {
    return (
        <div 
            onMouseEnter={() => onHover(id)}
            className="group flex flex-col p-4 border-l-2 border-gray-800 hover:border-amber-400 hover:bg-white/5 transition-all duration-300 cursor-crosshair"
        >
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-amber-500">
                {provider} — {date}
            </span>
            <h3 className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">
                {title}
            </h3>
        </div>
    )
}

export default CertificationCard
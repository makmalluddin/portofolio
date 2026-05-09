import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

function ProjectCard({ title, description, image, link, type, tools, overlayMode = "dark" }) {
    // Logic color overlay
    const isDark = overlayMode === "dark";
    const overlayBase = isDark ? "bg-black/80" : "bg-white/80";
    const textPrimary = isDark ? "text-white" : "text-black";
    const textSecondary = isDark ? "text-gray-400" : "text-gray-600";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-video overflow-hidden border border-gray-800 group cursor-pointer bg-[#111111] rounded-sm"
        >
            {/* Image Project */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Overlay Hover */}
            <div className={`absolute inset-0 ${overlayBase} opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6`}>

                <div className="flex justify-between items-start">
                    <span className={`font-mono text-[10px] tracking-widest uppercase py-1 px-2 border ${isDark ? 'border-gray-700' : 'border-gray-300'} ${textPrimary}`}>
                        {type}
                    </span>
                    <div className="flex gap-2">
                        {tools.map((tool, index) => (
                            <span key={index} className={`text-[10px] font-bold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                                #{tool}
                            </span>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-2"
                >
                    <h3 className={`text-xl font-bold uppercase tracking-tighter ${textPrimary}`}>
                        {title}
                    </h3>
                    <p className={`text-xs leading-relaxed line-clamp-2 font-mono ${textSecondary}`}>
                        {description}
                    </p>
                </motion.div>

                <div className="flex justify-end">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 font-mono text-[10px] font-bold px-4 py-2 transition-all 
                            ${isDark ? 'bg-white text-black hover:bg-amber-400' : 'bg-black text-white hover:bg-amber-600'}`}
                    >
                        VIEW DETAIlS
                        <Icon icon="solar:arrow-right-up-linear" />
                    </a>
                </div>
            </div>

            {/* Static Title */}
            <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-white text-[10px] font-mono bg-black/50 px-2 py-1 backdrop-blur-sm border-l-2 border-amber-400">
                    {title}
                </h4>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
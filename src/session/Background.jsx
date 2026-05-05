import BigContent from '../layout/BigContent'
import Particles from '/components/Particles'
import PillNav from '/components/PillNav'
import React from 'react'
import { motion } from 'motion/react'

function Background() {
  return (
    <div className='text-white'>
      <div className="flex items-center gap-3 px-3 py-1.5 border border-emerald-500/30 bg-emerald-500/5 rounded-full">
        <div className="relative flex h-2.5 w-2.5">
          {/* Efek Radar/Ping */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          {/* Titik Inti */}
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </div>
        <span className="text-[10px] font-mono font-medium tracking-wider text-emerald-400 uppercase">
          Open to work
        </span>
      </div>

      <div className="flex flex-col items-end gap-0.5 group cursor-default">
        <div className="text-[9px] font-mono text-gray-500 tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity">
          STATUS: <span className="text-emerald-500">ONLINE</span>
        </div>
        <div className="px-2 py-0.5 border border-gray-700 bg-[#1a1a1a] flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-emerald-500 animate-pulse"></div>
          <span className="text-[10px] font-mono text-white tracking-[0.2em] uppercase">
            Ready_to_Deploy
          </span>
        </div>
      </div>

      <div className="relative group flex items-center gap-2 cursor-pointer">
        {/* Indikator Titik */}
        <div className="w-2 h-2 rounded-full bg-amber-500 group-hover:bg-emerald-500 transition-colors shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>

        {/* Teks Utama */}
        <span className="text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">
          Career_Status
        </span>

        {/* Tooltip yang muncul saat hover */}
        <div className="absolute top-full right-0 mt-2 w-48 p-2 bg-[#111] border border-gray-800 rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none z-50">
          <div className="text-[9px] font-mono text-emerald-400 mb-1 leading-none uppercase">Available for:</div>
          <div className="text-[10px] font-mono text-gray-300 leading-tight">
            Data Science, Machine Learning, & Full-stack Dev
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <motion.div
          animate={{
            borderColor: ["rgba(16, 185, 129, 0.2)", "rgba(245, 158, 11, 0.4)", "rgba(16, 185, 129, 0.2)"],
            boxShadow: [
              "0 0 0px rgba(16, 185, 129, 0)",
              "0 0 15px rgba(16, 185, 129, 0.2)",
              "0 0 0px rgba(16, 185, 129, 0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-3 py-1 border rounded-sm"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></div>
          <span className="text-[10px] font-mono text-white tracking-widest uppercase">
            Open_<span className="text-amber-500">To</span>_Work
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default Background
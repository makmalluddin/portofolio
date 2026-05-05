import React from 'react'
import avatar from '../assets/myself/avatar.jpg'
import Typewriter from 'typewriter-effect';
import FuzzyText from '/components/FuzzyText';
import { motion } from "motion/react"

function Main() {
  const bevelStyle = {
    clipPath: "polygon(0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
  };

  const openPdf = () => {
    window.open("/src/assets/myself/cv/CV_Muhammad_Akmalluddin.pdf", "_blank");
  }

  // Varian untuk animasi stagger pada teks
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className='relative flex flex-col w-full min-h-screen scroll-mt-10 items-center justify-center text-white overflow-hidden bg-transparent'>
      {/* Label Version - Fixed Floating */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -10, 0] // Efek melayang vertikal konstan
        }}
        transition={{ 
          opacity: { duration: 1 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
        }}
        className='absolute top-32 left-10 hidden lg:block'
      >
        <div className="text-[10px] font-mono text-gray-400 tracking-[0.5em] rotate-90 origin-left">
          <FuzzyText baseIntensity={0.1} hoverIntensity={0.5} fontSize={13} enableHover>
            RESUME_SYSTEM.v1.0
          </FuzzyText>
        </div>
      </motion.div>

      <div className='flex flex-col max-w-7xl mx-auto sm:px-6 lg:px-8 z-10 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-20 my-10'>
          
          {/* FOTO AVATAR DENGAN HIGHLIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              // Animasi Highlight: bayangan kuning yang berdenyut halus
              filter: [
                "drop-shadow(0px 0px 0px rgba(234, 179, 8, 0))",
                "drop-shadow(0px 0px 15px rgba(234, 179, 8, 0.2))",
                "drop-shadow(0px 0px 0px rgba(234, 179, 8, 0))"
              ]
            }}
            transition={{ 
              opacity: { duration: 1.5 },
              filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className='relative flex justify-center md:justify-end group'
          >
            {/* Border Bevel di Belakang */}
            <div 
              className="absolute w-80 h-100 border border-yellow-500/30 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-700" 
              style={bevelStyle}
            ></div>
            
            <img
              src={avatar}
              alt="avatar"
              className='w-80 h-100 object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative z-10'
              style={bevelStyle}
            />
          </motion.div>

          {/* TEKS DENGAN ANIMASI STAGGER */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className='flex flex-col justify-start gap-6 text-center md:text-left'
          >
            <motion.div variants={itemVariants} className='space-y-1'>
              <h1 className='text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-tight'>
                Muhammad <br /> Akmalluddin
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className='text-2xl font-mono text-amber-300 h-8 flex items-center justify-center md:justify-start'>
              <Typewriter
                options={{
                  strings: ['Data Scientist', 'IT Engineer'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  cursor: '_',
                }}
              />
            </motion.div>

            <motion.p variants={itemVariants} className='max-w-md text-gray-400 text-sm lg:text-base leading-relaxed font-mono'>
              <span className='text-cyan-400'>//</span> Physics graduate based in Jakarta & Tangerang, specializing in
              <span className='text-amber-300'> Data Science</span> and <span className='text-amber-300'>Software Engineering</span>.
              Adaptable, self-motivated, and focused on delivering creative solutions to complex technical challenges.  
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openPdf} 
                className="group relative px-8 py-3 border border-yellow-500 text-yellow-500 font-mono text-xs overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-black">DOWNLOAD_CV.sh</span>
                <div className="absolute inset-0 bg-yellow-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* STATISTIC BOX DENGAN ENTRANCE ANIMATION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex relative bg-[#111111]/80 backdrop-blur-sm border border-gray-800 w-full max-w-4xl mx-auto mt-16 font-mono shadow-2xl"
        >
          <div className="h-8 w-8 border-t-2 border-l-2 border-yellow-500 absolute -top-1 -left-1"></div>
          <div className="h-8 w-8 border-b-2 border-r-2 border-yellow-500 absolute -right-1 -bottom-1"></div>

          {/* Stats Items (Bisa ditambahkan hover scale) */}
          {[
            { val: "1+", label: "year experience" },
            { val: "5+", label: "projects completed" },
            { val: "3", label: "prog. languages" }
          ].map((item, index) => (
            <div key={index} className={`w-full flex flex-col items-center justify-center py-10 px-4 text-center group ${index !== 2 ? 'border-r border-gray-800' : ''}`}>
              <div className="text-4xl font-black text-yellow-400 tracking-tighter group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] transition-all duration-300">
                {item.val}
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mt-3 font-bold group-hover:text-gray-300 transition-colors">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Main
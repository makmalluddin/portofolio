import React from 'react'
import avatar from '../assets/myself/avatar.webp'
import Typewriter from 'typewriter-effect';
import FuzzyText from '/components/FuzzyText';
import { motion } from "motion/react"
import { Icon } from '@iconify/react'

function Main() {
  const bevelStyle = {
    clipPath: "polygon(0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
  };

  const openPdf = () => {
    window.open("/src/assets/myself/cv/CV_Muhammad_Akmalluddin.pdf", "_blank");
  }

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
    <section id='main' className='relative flex flex-col w-full min-h-screen scroll-mt-10 items-center justify-center text-white overflow-hidden bg-transparent'>
      {/* Version Website */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0]
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

      <div className='flex flex-col max-w-7xl mx-auto sm:px-6 lg:px-8 z-10 w-full gap-10'>
        <div className='flex flex-col lg:flex-row lg:mt-0 items-center justify-center gap-10 lg:gap-20'>

          {/* Avatar Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
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
            className='relative flex justify-center md:justify-center group'
          >
            <div
              className="absolute w-70 h-80 lg:w-60 lg:h-75 border border-yellow-500/80 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-700"
              style={bevelStyle}
            ></div>

            <img
              src={avatar}
              alt="avatar"
              className='w-70 h-80 lg:w-60 lg:h-75 object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative z-10'
              style={bevelStyle}
              fetchPriority='high'
            />
          </motion.div>

          {/* Right Part */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className='flex flex-col justify-start gap-2 text-center md:text-left'
          >
            <motion.div variants={itemVariants} className='space-y-1'>
              <h1 className='text-2xl lg:text-5xl font-black tracking-tight uppercase leading-tight'>
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

            <motion.p variants={itemVariants} className='max-w-lg text-gray-300 text-sm lg:text-lg leading-relaxed font-mono'>
              Physics graduate with experience in <span className='text-amber-400'>web development</span>,
              currently focused on data visualization, <span className='text-amber-400'>machine learning</span>,
              and building data-driven applications.
            </motion.p>


            <motion.div variants={itemVariants} className="flex flex-row gap-2 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openPdf}
                className="group relative px-3 py-3 border w-30 border-yellow-500 text-yellow-500 font-bold text-sm overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-black cursor-pointer">VIEW RESUME</span>
                <div className="absolute inset-0 bg-yellow-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </motion.button>

              <div className='flex items-end gap-2'>
                <a href='https://github.com/makmalluddin' target='_blank'>
                  <Icon icon='mdi:github' fontSize={25} className='cursor-pointer text-gray-400' />
                </a>
                <a href='https://www.linkedin.com/in/makmalluddin/' target='_blank'>
                  <Icon icon='devicon-plain:linkedin' fontSize={25} className='cursor-pointer text-gray-400' />
                </a>
                <a href='mailto:makmalluddin123@gmail.com' target='_blank'>
                  <Icon icon='mdi:gmail' fontSize={25} className='cursor-pointer text-gray-400' />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Box Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex relative bg-[#111111]/80 backdrop-blur-sm border border-gray-600 w-5xl mx-auto font-mono shadow-2xl cursor-auto"
        >
          <div className="h-8 w-8 border-t-2 border-l-2 border-yellow-500 absolute -top-1 -left-1"></div>
          <div className="h-8 w-8 border-b-2 border-r-2 border-yellow-500 absolute -right-1 -bottom-1"></div>

          {[
            { val: "1+", label: "year experience" },
            { val: "5+", label: "projects" },
            { val: "3", label: "prog. languages" }
          ].map((item, index) => (
            <div key={index} className={`w-full flex flex-col gap-2 items-center justify-center py-7 px-4 text-center group ${index !== 2 ? 'border-r border-gray-700' : ''}`}>
              <div className="text-3xl font-black text-yellow-400 tracking-tighter group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] transition-all duration-300">
                {item.val}
              </div>
              <div className="text-md uppercase tracking-wider text-gray-300 font-bold group-hover:text-gray-300 transition-colors">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Main
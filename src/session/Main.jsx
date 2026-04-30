import React from 'react'
import avatar from '../assets/myself/avatar.jpg'
import Typewriter from 'typewriter-effect';
import Particles from '/components/Particles'


function Main() {
  const bevelStyle = {
    clipPath: "polygon(0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
  };

  return (
    <div className='relative flex flex-col w-full min-h-screen items-center justify-center text-white overflow-hidden'>
      {/* Label Version */}
      <div className="absolute top-32 left-10 hidden lg:block md:hide">
        <div className="text-[10px] font-mono text-gray-400 tracking-[0.5em] rotate-90 origin-left">
          RESUME_SYSTEM.v1.0
        </div>
      </div>

      <div className='flex flex-col max-w-7xl mx-auto sm:px-6 lg:px-8 z-10 w-full'>

        {/* Name and photo */}
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-20 my-10'>
          <div className='relative flex justify-center md:justify-end group'>
            <div className="absolute w-90 h-100 border border-yellow-500/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500" style={bevelStyle}></div>

            <img
              src={avatar}
              alt="avatar"
              className='w-90 h-100 object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative z-10'
              style={bevelStyle}
            />
          </div>

          <div className='flex flex-col justify-start gap-6 text-center md:text-left'>
            <div className='space-y-1'>

              <h1 className='text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-tight'>
                Muhammad <br /> Akmalluddin
              </h1>
            </div>

            <div className='text-2xl font-mono text-amber-300 h-8 flex items-center justify-center md:justify-start'>
              <Typewriter
                options={{
                  strings: ['Data Scientist', 'IT Engineer'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  pauseFor: 3000,
                  cursor: '_', 
                  cursorClassName: 'text-yellow-400 animate-pulse ml-1',
                }}
              />
            </div>

            <p className='max-w-md text-gray-400 text-sm lg:text-base leading-relaxed font-mono'>
              <span className='text-cyan-400'>//</span> Building reliable systems and data-driven solutions.
              Passionate about <span className='text-white'>IT infrastructure</span>, Machine Learning, and Computational Physics.
            </p>

            {/* CV Button */}
            <div className="pt-4">
              <button className="px-8 py-3 border border-yellow-500 text-yellow-500 font-mono text-xs hover:bg-yellow-500 hover:text-black transition-all duration-300">
                DOWNLOAD_CV.sh
              </button>
            </div>
          </div>
        </div>

        {/* Statistik Box */}
        <div className="flex relative bg-[#111111]/80 backdrop-blur-sm border border-gray-800 w-full max-w-4xl mx-auto mt-16 font-mono shadow-2xl">

          {/* SIKU-SIKU DEKORATIF */}
          <div className="h-8 w-8 border-t-2 border-l-2 border-yellow-500 absolute -top-1 -left-1"></div>
          <div className="h-8 w-8 border-b-2 border-r-2 border-yellow-500 absolute -right-1 -bottom-1"></div>

          {/* ITEM STATISTIK 1 */}
          <div className="w-full flex flex-col items-center justify-center py-10 px-4 text-center group border-r border-gray-800">
            <div className="text-4xl font-black text-yellow-400 tracking-tighter group-hover:scale-110 transition-transform duration-300">
              1+
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mt-3 font-bold">
              year experience
            </div>
          </div>

          {/* ITEM STATISTIK 2 */}
          <div className="w-full flex flex-col items-center justify-center py-10 px-4 text-center group border-r border-gray-800">
            <div className="text-4xl font-black text-yellow-400 tracking-tighter group-hover:scale-110 transition-transform duration-300">
              5+
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mt-3 font-bold">
              projects completed
            </div>
          </div>

          {/* ITEM STATISTIK 3 */}
          <div className="w-full flex flex-col items-center justify-center py-10 px-4 text-center group">
            <div className="text-4xl font-black text-yellow-400 tracking-tighter group-hover:scale-110 transition-transform duration-300">
              3
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-gray-500 mt-3 font-bold">
              prog. languages
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main
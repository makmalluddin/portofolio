import React from 'react'
import avatar from '../assets/myself/avatar.jpg'
import Typewriter from 'typewriter-effect';

function Main() {
  const bevelStyle = {
    // Koordinat poligon untuk memotong sudut kanan atas dan kiri bawah
    clipPath: "polygon(0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
  };

  return (
    <div className='w-full py-10 text-white max-w-7xl mx-auto sm:px-6 lg:px-8'>

      {/* Name and photo */}
      <div className='grid grid-cols-2 items-center gap-15 my-10'>
        <div className='flex justify-end' style={bevelStyle}>
          <img
            src={avatar}
            alt="avatar"
            className='w-90 h-100 aspect-3/2 object-cover'
            style={{ clipPath: "polygon(0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }} />
        </div>
        <div className='flex flex-col justify-start gap-5'>

          <div className='text-4xl font-bold'>
            Muhammad Akmalluddin
          </div>

          <div className='text-2xl text-amber-300'>
            <Typewriter
              options={{
                strings: [
                  'Data Scientist',
                  'IT Engineer',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                pauseFor: 3000,
                cursor: '|',
                cursorClassName: 'text-yellow-400 animate-blink ml-1',
              }}
            />
          </div>

          <div className='max-w-md text-base leading-6'>
            Building reliable systems and data-driven solutions, Passionate about IT infrastructure, ML, and Data Science
          </div>
        </div>
      </div>

      {/* Details */}
      <div >
        <div className='max-w-5xl mx-auto relative p-3'>
          {/* Siku Kiri Atas */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gray-300"></div>

          {/* Siku Kanan Bawah */}
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gray-300"></div>

          <div className='grid grid-cols-3 max-w-5xl text-center divide-x-2 divide-gray-500 border border-gray-500'>
            <div className='flex flex-col gap-1 my-4'>
              <div className='text-xl font-bold'>1+</div>
              <div className='text-stone-400'>year experience</div>
            </div >

            <div className='flex flex-col gap-1  my-4'>
              <div className='text-xl font-bold'>5+</div>
              <div className='text-stone-400'>projects completed</div>
            </div>

            <div className='flex flex-col gap-1  my-4'>
              <div className='text-xl font-bold'>3</div>
              <div className='text-stone-400'>programming language</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main
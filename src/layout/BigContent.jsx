import React from 'react'
import Particles from '/components/Particles'

function BigContent({ children }) {
  return (
    <div className='flex flex-col relative min-h-screen w-full overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={500}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className=" flex flex-col relative z-10 min-h-screen text-amber-50">
        {children}
      </div>
    </div>
  )
}

export default BigContent
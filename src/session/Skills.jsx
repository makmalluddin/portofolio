import React from 'react'
import MainContent from '../layout/MainContent'
import SkillCard from '../component/SkillCard'
import MiniSkills from '../component/card/MiniSkills'

function Project() {
  return (
    <div className='text-white'>
      <MainContent>
        {/* title */}
        <div className='flex w-full items-center justify-center mb-5'>
          <div className="grow h-px bg-[#666666]"></div>
          <span className="mx-6 text-[#666666] font-mono text-lg tracking-widest">
            /skills
          </span>
          <div className="grow h-px bg-[#666666]"></div>
        </div>

        {/* picture */}
        <div>
          gambar
        </div>

        <div className='flex flex-col gap-3'>
          {/* it skills */}
          <div className='flex flex-col gap-2'>
            <div className='text-amber-300'>
              {'[IT Skills]'}
            </div>

            <div className='flex gap-5 justify-around'>
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
            </div>
          </div>

          {/* data skills */}
          <div>
            <div className='text-blue-200'>
              {'[Data Skills]'}
            </div>

            <div className='flex gap-5 justify-around'>
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
            </div>
          </div>

          {/* tools & other */}
          <div>
            <div className='text-white'>
              {'[Tools & Other]'}
            </div>

            <div className='flex gap-5 justify-baseline '>
              <MiniSkills />
              <MiniSkills />
              <MiniSkills />
              <MiniSkills />
            </div>
          </div>
        </div>

      </MainContent>
    </div>
  )
}

export default Project
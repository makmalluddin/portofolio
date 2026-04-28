import React from 'react'
import MainContent from '../layout/MainContent'

function Contact() {
    return (
        <div className='text-white'>
            <MainContent>
                <div className='flex flex-col gap-5 mt-10'>
                    {/* batas */}
                    <div className='flex w-full items-center justify-center'>
                        <div className="w-30 h-px bg-[#666666]"></div>
                        <span className="mx-6 text-amber-300 font-mono text-md tracking-widest">
                            LET'S BUILD SOMETHING TOGETHER
                        </span>
                        <div className="w-30 h-px bg-[#666666]"></div>
                    </div>

                    <div className='flex text-xl justify-center text-[#666666]'>
                    // turning ideas into
                    </div>

                    <div className='flex items-center justify-center text-center text-4xl tracking-tighter bg-linear-to-r from-yellow-400 via-blue-500 to-yellow-400 bg-clip-text text-transparent animate-text-flow'>
                        Reliable Systems <br />
                        & Data-Driven Decisions
                    </div>

                    <div className='flex gap-2 justify-center text-lg'>
                        <h3>
                            IT Engineering
                        </h3>
                        <span>{'\u2022'}</span>
                        <h3>
                            Data Science
                        </h3>
                        <span>{'\u2022'}</span>
                        <h3>
                            Machine Learning
                        </h3>
                    </div>
                </div>
            </MainContent>
        </div>
    )
}

export default Contact
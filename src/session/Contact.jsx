import React from 'react'
import MainLayout from '../layout/MainLayout'
import SosmedCard from '../component/SosmedCard'

function Contact() {
    return (
        <div className='text-white'>
            <MainLayout>
                <div className='flex w-full items-center justify-center'>
                    <div className="w-30 h-px bg-[#666666]"></div>
                    <span className="mx-6 text-amber-300 font-mono text-md tracking-widest">
                        LET'S BUILD SOMETHING TOGETHER
                    </span>
                    <div className="w-30 h-px bg-[#666666]"></div>
                </div>
                <div className='flex gap-10 justify-between'>
                    {/* ----------- left part -----------*/}
                    <div className='flex flex-col gap-5 mt-10'>


                        {/* physics student */}
                        <div className='flex justify-start gap-3 items-center'>
                            <div className='h-13 w-2 bg-amber-300'></div>
                            <div className='flex flex-col '>
                                <div>makmalluddin</div>
                                <div className='text-3xl'>Bachelor Of Physics</div>
                            </div>
                        </div>

                        {/* my jargon */}
                        <div className='flex items-center justify-start text-start text-8xl tracking-tighter bg-linear-to-r from-yellow-400 via-blue-500 to-yellow-400 bg-clip-text text-transparent animate-text-flow'>
                            SAY <br />
                            HELLO
                        </div>

                        {/* my description */}
                        <div className='max-w-xl'>
                            Saya terbuka untuk peluang kerja. Dengan latar belakang fisika, saya membawa pendekatan analitis yang kuat untuk memecahkan masalah kompleks.
                        </div>

                        <div className="mt-16">
                            <a href="mailto:makmalluddin123@gmail.com"
                                className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-cyan-600 font-mono tracking-widest uppercase
                                        shadow-[6px_6px_0px_0px_rgba(249,115,22,1)] 
                                        hover:shadow-none 
                                        hover:translate-x-[6px] 
                                        hover:translate-y-[6px]">
                                Let's Chat
                                <svg className="w-5 h-5 ml-3 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* ----------- right part -----------*/}
                    <div className='flex flex-col gap-5 items-center justify-center'>
                        <SosmedCard />
                        <SosmedCard />
                        <SosmedCard />
                        <SosmedCard />
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

export default Contact
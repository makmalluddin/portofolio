import React from 'react'
import { motion } from "framer-motion" // Gunakan framer-motion untuk konsistensi
import MainLayout from '../layout/MainLayout'
import { Icon } from '@iconify/react'
import CircularText from '/components/CircularText'
import SosmedCard from '../component/SosmedCard'

function Contact() {
    const socialMedia = [
        { id: 1, name: 'Linkedin', textcol: 'text-blue-400', icon: 'linkedin', bordercol: 'border-blue-500', link: 'https://www.linkedin.com/in/makmalluddin/' },
        { id: 2, name: 'Github', textcol: 'text-red-400', icon: 'github', bordercol: 'border-slate-400', link: 'https://github.com/makmalluddin/makmalluddin' },
        { id: 3, name: 'Whatsapp', textcol: 'text-green-400', icon: 'whatsapp', bordercol: 'border-green-500', link: 'http://wa.me/6285159594771' },
        { id: 4, name: 'Instagram', textcol: 'text-yellow-400', icon: 'instagram', bordercol: 'border-pink-500', link: 'https://www.instagram.com/makmalluddin' },
        { id: 5, name: 'Notion', textcol: 'text-yellow-400', icon: 'notion', bordercol: 'border-stone-200', link: 'https://www.instagram.com/makmalluddin' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id='contact' className='min-h-screen bg-transparent text-white flex items-center justify-center overflow-hidden'>
            <MainLayout>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full flex flex-col gap-20"
                >
                    {/* Marker Header */}
                    <motion.div variants={itemVariants} className='flex items-center justify-center'>
                        <div className="w-30 h-px bg-[#666666]"></div>
                        <span className="mx-6 text-amber-300 font-mono text-md tracking-widest text-center">
                            LET'S BUILD SOMETHING TOGETHER
                        </span>
                        <div className="w-30 h-px bg-[#666666]"></div>
                    </motion.div>

                    <div className='flex flex-col lg:flex-row gap-10 justify-between items-center w-full mt-10'>

                        {/* Left Part */}
                        <motion.div variants={itemVariants} className='flex flex-col gap-10 z-10'>
                            <div className='flex justify-start gap-3 items-center'>
                                <div className='h-13 w-2 bg-amber-300'></div>
                                <div className='flex flex-col'>
                                    <div className="font-mono text-gray-400 text-sm">makmalluddin</div>
                                    <div className='text-3xl font-bold'>Bachelor Of Physics</div>
                                </div>
                            </div>

                            <div className='flex items-center justify-start text-start text-7xl md:text-8xl tracking-tighter bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400 bg-clip-text text-transparent animate-pulse font-black leading-none'>
                                SAY <br /> HELLO
                            </div>

                            <div className='max-w-xl text-gray-400 leading-relaxed'>
                                I'm open to job opportunities. With a background in physics, I bring a strong analytical approach to solving complex problems.
                            </div>

                            <div className="mt-5">
                                <a href="mailto:makmalluddin123@gmail.com"
                                    className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-cyan-600 font-mono tracking-widest uppercase
                                            shadow-[6px_6px_0px_0px_rgba(249,115,22,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]">
                                    Let's Chat
                                    <svg className="w-5 h-5 ml-3 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Part: The Atomic Orbital System */}
                        <motion.div variants={itemVariants} className='relative flex items-center justify-center w-[350px] h-[350px] md:w-[500px] md:h-[500px]'>

                            {/* 1. Background Grid */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            {/* 2. Garis Orbit (SVG) */}
                            <svg className="absolute w-full h-full opacity-30 pointer-events-none">
                                <motion.circle
                                    cx="50%" cy="50%" r="140" // Radius ini harus sinkron dengan variabel 'radius' di bawah
                                    fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>

                            {/* Menggunakan inset-0 agar container ini memenuhi seluruh area parent secara presisi */}
                            <div className="absolute inset-0 pointer-events-none">
                                {socialMedia.map((socc, index) => {
                                    const angle = (index / socialMedia.length) * 2 * Math.PI;
                                    const radius = 140;

                                    return (
                                        <motion.div
                                            key={socc.id}
                                            className="absolute pointer-events-auto"
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                x: Math.cos(angle) * radius,
                                                y: Math.sin(angle) * radius,
                                            }}
                                            animate={{
                                                x: Math.cos(angle) * radius,
                                                y: [
                                                    Math.sin(angle) * radius,
                                                    (Math.sin(angle) * radius) - 10,
                                                    Math.sin(angle) * radius
                                                ],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: index * 0.5,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            {/* Centering element secara internal */}
                                            <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                                <div className={`absolute inset-0 blur-xl opacity-20 ${socc.textcol.replace('text', 'bg')}`}></div>
                                                <SosmedCard {...socc}/>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* 4. Center Core: Circular Text */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="scale-50 opacity-40">
                                    <CircularText
                                        text="* DATA * PHYSICS * TECH "
                                        spinDuration={15}
                                        className="font-mono text-white"
                                    />
                                </div>
                            </div>

                            {/* 5. Central Nucleus */}
                            <div className="absolute z-20 w-16 h-16 rounded-full border border-gray-700 bg-black/40 flex items-center justify-center backdrop-blur-xl">
                                <Icon icon="solar:cpu-bold" className="text-3xl text-amber-300 animate-pulse" />
                            </div>

                        </motion.div>
                    </div>
                </motion.div>
            </MainLayout>
        </section>
    )
}

export default Contact
import React from 'react'
import MainLayout from '../layout/MainLayout'
import ProjectCard from '../component/card/ProjectCard'
import { motion } from 'motion/react'
import delivery from '/src/assets/myself/projects/delivery.webp'
import monitoring from '/src/assets/myself/projects/monitoring.webp'
import volatile from '/src/assets/myself/projects/volatile.webp'
import ozon from '/src/assets/myself/projects/ozon.webp'

function Projects() {
    const projectList = [
        {
            id: 1,
            title: "Delivery Time Accuracy Prediction",
            image: delivery,
            link: 'asdf/asdf',
            type: 'Data',
            description: 'ini adalah percobaan',
            tools: ['React, Json'],
            overlayMode: 'light'
        },
        {
            id: 2,
            title: "Ship Monitoring",
            image: monitoring,
            link: 'asdf/asdf',
            type: 'Data',
            description: 'ini adalah percobaan',
            tools: ['React, Json'],
            overlayMode: 'dark'
        },
        {
            id: 3,
            title: "Classification of Volatile Compound",
            image: volatile,
            link: 'asdf/asdf',
            type: 'Data',
            description: '',
            tools: ['React, Json'],
            overlayMode: 'dark'
        },
        {
            id: 4,
            title: "Ozon Level Detection",
            image: ozon,
            link: 'https://github.com/makmalluddin/ozon-detection',
            type: 'Data',
            description: 'ini adalah percobaan',
            tools: ['React, Json'],
            overlayMode: 'light'
        },
        
    ]

    const title = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6, ease: "easeOut"
            }
        }
    };

    const centerImageVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const leftEntrance = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { staggerChildren: 0.4, duration: 0.8, ease: "easeOut" }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id='projects' className='min-h-screen flex items-center justify-center text-white gap-2'>
            <MainLayout>
                {/* Section Title */}
                <motion.div
                    variants={title}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.9 }}
                    className='flex items-center mb-20'
                >
                    <div className="grow h-px bg-gray-800" />
                    <span className="mx-6 text-amber-400 font-mono italic">04. _/projects</span>
                    <div className="grow h-px bg-gray-800" />
                </motion.div>

                {/* project */}
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    className='grid grid-cols-2 gap-1'
                >
                    {projectList.map((proje) => (
                        <motion.div key={proje.id} variants={itemVariants}>
                            <ProjectCard {...proje} />
                        </motion.div>
                    ))}

                </motion.div>
            </MainLayout>
        </section>
    )
}

export default Projects
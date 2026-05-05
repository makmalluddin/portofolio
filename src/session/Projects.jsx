import React from 'react'
import MainLayout from '../layout/MainLayout'
import ProjectCard from '../component/card/ProjectCard'
import { motion } from 'motion/react'
import sertif from '/src/assets/myself/certifications/dicoding_sql/sql_2.png'
import finance from '/src/assets/myself/projects/finance_app/finance.jpeg'

function Projects() {
    const projectList = [
        {id : 1, title: "Delivery Time Accuracy Prediction", image: 'asdf/asdf', link:'asdf/asdf'},
        {id : 2, title: "Classification Volatile Compound", image: 'asdf/asdf', link:'asdf/asdf'},
        {id : 3, title: "Ozon Level Detection", image: 'asdf/asdf', link:'asdf/asdf'},
        {id : 4, title: "Revamp Company Website", image: 'asdf/asdf', link:'asdf/asdf'},
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
        <section id='projects' className='min-h-screen flex items-center justify-center text-white'>
            <MainLayout>
                {/* Section Title */}
                <motion.div
                    variants={title}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.9 }}
                    className='flex items-center mb-20'
                >
                    <div className="grow h-px bg-gray-800"></div>
                    <span className="mx-6 text-amber-400 font-mono italic">04. _/projects</span>
                    <div className="grow h-px bg-gray-800"></div>
                </motion.div>

                {/* project */}
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    className='grid grid-cols-2'
                >
                    {/* project list */}
                    <motion.div variants={itemVariants}>
                        <ProjectCard
                            title="Revamp Main Website"
                            image={sertif}
                            link="https://example.com/project1"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <ProjectCard
                            title="My Finance App"
                            image={finance}
                            link="https://example.com/project1"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <ProjectCard
                            title="Project 1"
                            image={finance}
                            link="https://example.com/project1"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <ProjectCard
                            title="Project 1"
                            image={sertif}
                            link="https://example.com/project1"
                        />
                    </motion.div>

                </motion.div>
            </MainLayout>
        </section>
    )
}

export default Projects
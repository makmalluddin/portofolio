import React from 'react'
import ProjectOption from '../component/card/ProjectOption'
import MainLayout from '../layout/MainLayout'
import { motion } from 'motion/react'
import delivery from '/src/assets/myself/projects/delivery.webp'
import monitoring from '/src/assets/myself/projects/monitoring.webp'
import volatile from '/src/assets/myself/projects/volatile.webp'
import revamp from '/src/assets/myself/projects/revamp.webp'

function NewProjects() {
    const databaru = [
        {
            id: 1,
            image: delivery,
            title: 'Delivery Time Accuracy Prediction',
            description: 'Built a delivery time prediction model using Random Forest algorithm based on shipping factors, achieving 97% accuracy',
            tools: [
                {icon : 'devicon:python', name:'python'},
                {icon : 'devicon:python', name:'python'},
                {icon : 'devicon:python', name:'python'},
            ],
            type: 'DS',
            color: 'amber'
        },
        {
            id: 2,
            image: volatile,
            title: 'Classification Volatile Compound',
            description: 'Developed a classification system to distinguish two volatile compounds using sensor measurement data, achieving 95% accuracy',
            tools: [
                {icon : 'devicon:python', name:'python'},
                {icon : 'devicon:python', name:'python'},
                {icon : 'devicon:python', name:'python'},
            ],
            type: 'DS',
            color: 'amber'
        },
        {
            id: 3,
            image: revamp,
            title: 'Company Website Revamp',
            description: 'Revamped company website design and developed an e-commerce platform, resulting in a 30% increase in website traffic',
            tools: [
                {icon : 'devicon:python', name:'python'},
                {icon : 'devicon:python', name:'python'},
                {icon : 'devicon:python', name:'python'},
            ],
            type: 'DS',
            color: 'amber'
        },
        {
            id: 4,
            image: monitoring,
            title: 'Air & Maritime Traffic Monitoring',
            description: 'Built a monitoring and visualization system to track over 120 vessels around Tanjung Priok Port and 5 aircraft trajectories using an interactive web platform',
            tools: [
                {icon : 'devicon:python', name:'python'},
                {icon : 'devicon:python', name:'python'},
                {icon : 'devicon:python', name:'python'},
            ],
            type: 'DS',
            color: 'amber'
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
    return (
        <section id='projects' className='min-h-screen flex items-center justify-center gap-2'>
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
                    <span className="mx-6 text-amber-400 font-mono text-lg italic">04. My Projects</span>
                    <div className="grow h-px bg-gray-800" />
                </motion.div>

                {/* Project List */}
                <div className='grid grid-cols-2 gap-4'>
                    {databaru.map((item, index) =>
                        <ProjectOption {...item} />

                    )}
                </div>

            </MainLayout>
        </section>
    )
}

export default NewProjects
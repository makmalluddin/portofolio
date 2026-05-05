import React, { useState, useCallback, useMemo } from 'react';
import ExperienceCard from '../component/ExperienceCard';
import CertificationCard from '../component/CertificationCard';
import MainLayout from '../layout/MainLayout';
import { motion } from "motion/react";
import sertif from '/src/assets/myself/certifications/bnsp/bnsp_1.png'
import sertif2 from '/src/assets/myself/certifications/bnsp/bnsp_2.png'
import sql1 from '/src/assets/myself/certifications/dicoding_sql/sql_1.png'
import sql2 from '/src/assets/myself/certifications/dicoding_sql/sql_2.png'
import sql3 from '/src/assets/myself/certifications/dicoding_sql/sql_3.png'

function Experience() {
    const [activeExpId, setActiveExpId] = useState(null);
    const [activeCertId, setActiveCertId] = useState(null);

    // Experience Data
    const experienceData = useMemo(() => [
        {
            id: 1, job: "IT Assistant", company: "PT. Dwitunggal Jaya Pratama Maju", date: "Dec 2025 - Now", color:"text-amber-400",
            description: "Focused on digitalizing company services through modernizing the main website architecture and developing an e-commerce platform to make it easier for clients to order our services, resulting in a 30% increase in website traffic",  color:'amber',
            type: "Intern", images: [
                { image: sertif, text: 'Dev Process' },
                { image: sertif2, text: 'UI Result' },
                { image: 'link_foto_3.jpg', text: 'System Arch' },
            ]
        },
        {
            id: 2, job: "Technical Support", company: "PT. IndoMega Teknologi", date: "Feb 2024 - June 2024",
            description: "Played a role in developing an operational monitoring website that successfully monitored over 120 vessels and 5 aircraft by building a visualization platform and managing vessel anomaly data to support the company's strategic solutions", color:'amber',
            type: "Intern", images: [
                { image: sql1, text: 'Dev Process' },
                { image: sql2, text: 'UI Result' },
                { image: sql3, text: 'System Arch' },
            ]
        },
        {
            id: 3, job: "Java & Python For Data Science", company: "PT. Tata Informasi Asia", date: "Sep 2024 - Dec 2024",
            description: "Developed Java & Python skills through a goods delivery prediction project with Spring Boot integration as the backend and a Random Forest predictive model that successfully achieved 97% accuracy", color:'cyan',
            type: "Training", images: [
                { image: sql1, text: 'Dev Process' },
                { image: sql2, text: 'UI Result' },
                { image: sql3, text: 'System Arch' },
            ]
        },
    ], []);

    // Certification Data
    const certificationData = useMemo(() => [
        { id: 1, title: "Intro To Software Engineering", provider: "RevoU", date: "2026", image: sertif },
        { id: 2, title: "Introduction To SQL", provider: "Dicoding", date: "2025", image: sql2 },
        { id: 3, title: "Associate Data Scientist", provider: "BNSP", date: "2025", image: sertif },
        { id: 4, title: "Java & Python For Data Science", provider: "TIA Academy", date: "2024", image: sql2 },
        { id: 5, title: "Data Analytics Training", provider: "Xquisite AI", date: "2023", image: sql2 },
    ], []);

    // useCallBack
    const handleExpClick = useCallback((id) => {
        setActiveExpId(prevId => (prevId === id ? null : id));
    }, []);

    const handleCertHover = useCallback((id) => {
        setActiveCertId(id);
    }, []);

    const activeCert = useMemo(() =>
        certificationData.find(c => c.id === activeCertId),
        [activeCertId, certificationData]);

    // Animate Motion
    const expVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6, ease: "easeOut"
            }
        }
    };

    const certVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6, ease: "easeOut"
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 0.6 } }
    };

    return (
        <section id='experience' className='scroll-mt-30 min-h-screen text-white bg-transparent pb-20'>
            <MainLayout>
                {/* Header Experience */}
                <motion.div
                    variants={expVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    className='flex items-center mb-10'
                >
                    <span className="mr-6 text-amber-400 font-mono italic">01. _experience</span>
                    <div className="grow h-px bg-gray-800"></div>
                </motion.div>

                {/* Experience List */}
                <motion.div
                    variants={cardVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.6 }}
                    className="space-y-4 mb-32"
                >
                    {experienceData.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            {...exp}
                            onClick={() => handleExpClick(exp.id)}
                            isActive={activeExpId === exp.id}
                        />
                    ))}
                </motion.div>

                {/* Header Certification */}
                <motion.div
                    variants={certVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.8 }}
                    className='flex items-center mb-10'
                >
                    <div className="grow h-px bg-gray-800"></div>
                    <span className="ml-6 text-amber-400 font-mono italic">02. /credentials</span>
                </motion.div>

                {/* Certification List */}
                <motion.div
                    variants={cardVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3 }}
                    className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'
                >
                    <div className='space-y-2'>
                        {certificationData.map((cert) => (
                            <CertificationCard
                                key={cert.id}
                                {...cert}
                                onHover={handleCertHover}
                            />
                        ))}
                        <div className="pt-8 text-left">
                            <a href="/all-certifications" className="inline-block px-6 py-3 border border-amber-500 text-amber-500 font-mono text-xs hover:bg-amber-500 hover:text-black transition-all">
                                VIEW_ALL_CREDENTIALS.exe
                            </a>
                        </div>
                    </div>

                    {/* Preview Area */}
                    <div className='hidden lg:block sticky top-40'>
                        <div className="relative group overflow-hidden rounded-lg border border-gray-800 bg-[#111] aspect-16/15 flex items-center justify-center">
                            {/* Conditonal State */}
                            {activeCert ? (
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    key={activeCert.id} r
                                    src={activeCert.image}
                                    alt="Preview"
                                    className="w-full h-full object-contain p-4 transition-opacity duration-300"
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-3 text-gray-600 font-mono text-sm animate-pulse">
                                    <div className="w-10 h-10 border border-dashed border-gray-700 flex items-center justify-center">
                                        ?
                                    </div>
                                    <span>[ HOVER_CERTIFICATION_FOR_DETAILS ]</span>
                                </div>
                            )}
                            <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none"></div>
                        </div>
                    </div>
                </motion.div>
            </MainLayout>
        </section>
    );
}

export default Experience;
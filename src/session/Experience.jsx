import React, { useState, useCallback, useMemo } from 'react';
import ExperienceCard from '../component/card/ExperienceCard';
import CertificationCard from '../component/card/CertificationCard';
import MainLayout from '../layout/MainLayout';
import { motion } from "motion/react";
import { bnsp, dicoding, revou, stupen, xquisite } from '../component/Certification';
import { ais_rec, analytics, instalation_ais, instalation_antena, presentation, website } from '../component/Experience2';
import { presentation3, cms3, coding3, dashboard3, workspace } from '../component/Experience3';

function Experience() {
    const [activeExpId, setActiveExpId] = useState(null);
    const [activeCertId, setActiveCertId] = useState(3);

    // Experience Data
    const experienceData = useMemo(() => [
        {
            id: 1, job: "IT Assistant", company: "PT. Dwitunggal Jaya Pratama Maju", date: "Dec 2025 - Now",
            details: [
                { icon: null, text: 'Revamped company website' },
                { icon: null, text: 'Developed e-commerce platform' },
                { icon: null, text: 'Increased website traffic by 30%' },
            ], color: 'amber',
            type: "Intern", images: [
                { image: presentation3, text: 'Presentation Project' },
                { image: dashboard3, text: 'Revamped Website' },
                { image: coding3, text: 'Developing Website' },
                { image: cms3, text: 'CMS Dashboard' },
                { image: workspace, text: 'Workspace' },
            ],
            expertise: 'React • Laravel • PostgreSQL'
        },
        {
            id: 2, job: "Technical Support", company: "PT. IndoMega Teknologi", date: "Feb 2024 - June 2024",
            details: [
                { icon: null, text: 'Built monitoring platform for 120+ vessels and 5 aircraft' },
                { icon: null, text: 'Managed 6 months of vessel anomaly data' },
                { icon: null, text: 'Assisted fuel filler prototyping' },
            ], color: 'amber',
            type: "Intern", images: [
                { image: ais_rec, text: 'AIS Receiver' },
                { image: instalation_ais, text: 'Installation AIS' },
                { image: instalation_antena, text: 'Installation Antena' },
                { image: website, text: 'Monitoring Website' },
                { image: presentation, text: 'Presentation Project' },
                { image: analytics, text: 'Analytics Missing Data' },
            ],
            expertise: 'Javascript • Python • Arduino • Linux'
        },
        {
            id: 3, job: "Java & Python For Data Science", company: "PT. Tata Informasi Asia", date: "Sep 2024 - Dec 2024",
            details: [
                { icon: null, text: 'Built Random Forest model with 97% accuracy and precision' },
                { icon: null, text: 'Developed 10+ machine learning models in sub-project' },
                { icon: null, text: 'Built Spring Boot REST API for prediction services' },
            ], color: 'cyan',
            type: "Training", images: [
                { image: presentation3, text: 'Presentation Project' },
                { image: dashboard3, text: 'Revamped Website' },
                { image: coding3, text: 'Developing Website' },
                { image: cms3, text: 'CMS Dashboard' },
                { image: workspace, text: 'Workspace' },
            ],
            expertise: 'Python • Java • SpringBoot • Machine Learning'
        },

    ], []);

    // Certification Data
    const certificationData = useMemo(() => [
        { id: 1, title: "Intro To Software Engineering", provider: "RevoU", date: "2026", image: revou },
        { id: 2, title: "Introduction To SQL", provider: "Dicoding", date: "2025", image: dicoding },
        { id: 3, title: "Associate Data Scientist", provider: "BNSP", date: "2025", image: bnsp },
        { id: 4, title: "Java & Python For Data Science", provider: "TIA Academy", date: "2024", image: stupen },
        { id: 5, title: "Data Analytics Training", provider: "Xquisite AI", date: "2023", image: xquisite },
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
        <section id='experience' className='scroll-mt-20 min-h-screen text-white bg-transparent pb-20'>
            <MainLayout>
                {/* Header Experience */}
                <motion.div
                    variants={expVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    className='flex items-center mb-10'
                >
                    <span className="mr-6 text-amber-400 font-mono text-lg italic">01. Experience</span>
                    <div className="grow h-px bg-gray-800"></div>
                </motion.div>

                {/* Experience List */}
                <motion.div
                    variants={cardVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.6 }}
                    className="space-y-4 mb-32 "
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
                            // Kirim status apakah kartu ini yang sedang aktif
                            isActive={activeCertId === cert.id}
                        />
                    ))}
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
                                <div className="flex flex-col items-center gap-3 text-gray-100 font-mono text-lg animate-pulse">
                                    <div className="w-20 h-20 border border-dashed border-gray-300 flex items-center justify-center">
                                        ?
                                    </div>
                                    <span>[ HOVER CERTIFICATION FOR DETAILS ]</span>
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
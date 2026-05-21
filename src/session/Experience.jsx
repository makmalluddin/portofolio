import React, { useState, useRef } from 'react';
import ExperienceCard from '../component/card/ExperienceCard';
import { motion, AnimatePresence } from 'motion/react';

const Experience = () => {
    const [activeCardId, setActiveCardId] = useState(null);
    
    // Referensi untuk Siasat Kamera (Scroll Lock)
    const sectionRef = useRef(null);

    const experiences = [
        {
            id: 1,
            role: "IT Assistant",
            company: "PT. Dwitunggal Jaya Pratama Maju",
            date: "Dec 2025 - Present",
            type: "INTERN",
            color: "amber", 
            stack: ["React", "Laravel", "PostgreSQL", "Tailwind"],
            descriptions: [
                "Merevitalisasi dan membangun ulang website utama perusahaan menggunakan modern React frontend.",
                "Mengembangkan platform e-commerce secara penuh (full-stack) beserta integrasi payment gateway.",
                "Meningkatkan traffic website perusahaan hingga 30% melalui optimasi performa dan SEO."
            ],
            documentations: [
                { image: "/src/assets/myself/projects/dashboard3.webp", title: "CMS Dashboard" },
                { image: "/src/assets/myself/projects/coding3.webp", title: "Web Development" }
            ]
        },
        {
            id: 2,
            role: "Data Science Trainee",
            company: "PT. Tata Informasi Asia",
            date: "Sep 2024 - Dec 2024",
            type: "BOOTCAMP",
            color: "cyan", 
            stack: ["Python", "Java", "Spring Boot", "Machine Learning"],
            descriptions: [
                "Membangun model Machine Learning (Random Forest) dengan tingkat akurasi dan presisi mencapai 97%.",
                "Mengembangkan lebih dari 10 model prediktif pendukung dalam berbagai sub-project data science.",
                "Merancang dan membangun Spring Boot REST API untuk melayani sistem prediksi secara real-time."
            ],
            documentations: [
                { image: "/src/assets/myself/projects/analytics.webp", title: "Model Accuracy" },
                { image: "/src/assets/myself/projects/presentation3.webp", title: "Project Presentation" }
            ]
        },
        {
            id: 3,
            role: "Technical Support Intern",
            company: "PT. IndoMega Teknologi",
            date: "Feb 2024 - June 2024",
            type: "INTERN",
            color: "amber", 
            stack: ["JavaScript", "Python", "Arduino", "Linux"],
            descriptions: [
                "Membangun platform pemantauan (monitoring) terintegrasi untuk lebih dari 120 kapal (vessel) dan 5 pesawat.",
                "Mengelola dan menganalisis data anomali pergerakan kapal selama 6 bulan masa operasional.",
                "Membantu proses prototyping perangkat keras untuk sistem fuel filler."
            ],
            documentations: [
                { image: "/src/assets/myself/projects/monitoring.webp", title: "Vessel Monitoring" },
                { image: "/src/assets/myself/projects/ais_rec.webp", title: "AIS Receiver" },
                { image: "/src/assets/myself/projects/instalation_antena.webp", title: "Antenna Installation" }
            ]
        }
    ];

    const handleCardClick = (id) => {
        const isActivating = activeCardId !== id;
        setActiveCardId(isActivating ? id : null);

        // Siasat 3: Anti-Jump Scroll Lock
        // Memaksa browser scroll secara halus ke tengah section ketika kartu aktif
        if (isActivating && sectionRef.current) {
            setTimeout(() => {
                sectionRef.current.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 300); // Jeda kecil agar DOM sempat memproses kartu yang hilang
        }
    };

    return (
        // Ditambahkan min-h-screen dan flex-col justify-center agar formasi pas di tengah layar 1080p
        <section 
            id="experience" 
            ref={sectionRef} 
            className="w-full min-h-screen py-10 px-4 md:px-8 text-white flex flex-col justify-center scroll-mt-10"
        >
            <div className="max-w-6xl mx-auto w-full">
                
                {/* Margin bottom dikurangi dari mb-16 ke mb-8 agar ruang vertikal lebih lega */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-8"
                >
                    <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase">
                        Experience <span className="text-amber-500">Timeline</span>
                    </h2>
                </motion.div>

                <div className="relative w-full flex flex-col items-center">
                    <AnimatePresence mode="popLayout">
                        {experiences.map((exp, index) => {
                            const isActive = activeCardId === exp.id;
                            
                            // Menyembunyikan kartu lain saat mode fokus
                            if (activeCardId !== null && !isActive) {
                                return null;
                            }

                            const position = index % 2 === 0 ? 'left' : 'right';
                            
                            return (
                                <motion.div
                                    layout 
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                                    transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                                    key={exp.id}
                                    className="w-full"
                                >
                                    <ExperienceCard
                                        position={position}
                                        isActive={isActive}
                                        onClick={() => handleCardClick(exp.id)}
                                        {...exp}
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Experience;
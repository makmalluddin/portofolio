import React, { useState } from 'react'
import ExperienceCard from '../component/ExperienceCard'
import CertificationCard from '../component/CertificationCard'
import MainLayout from '../layout/MainLayout'
import CircularGallery from '/components/CircularGallery'
import sertif from '/src/assets/myself/certifications/bnsp/bnsp_1.png'
import sertif2 from '/src/assets/myself/certifications/bnsp/bnsp_2.png'

function Experience() {
    const [activeExpId, setActiveExpId] = useState(null);
    const [activeCertId, setActiveCertId] = useState(1); // Default sertif pertama

    const experienceData = [
        { 
            id: 1, 
            job: "Frontend Developer", 
            company: "PT. Tech Solutions", 
            date: "2023",
            description: "Developed and maintained responsive web applications.",
            type: "Full-time",
            images: [{ image: sertif, text: 'Work' }, { image: sertif2, text: 'Hayu' }]
        },
        { 
            id: 2, 
            job: "Frontend Developer", 
            company: "PT. Tech Solutions", 
            date: "2023",
            description: "Developed and maintained responsive web applications.",
            type: "Full-time",
            images: [{ image: sertif, text: 'Work' }, { image: sertif2, text: 'Hayu' }]
        }
    ];

    const certificationData = [
        { 
            id: 1, 
            title: "Google Data Analytics", 
            provider: "Google", 
            date: "2024",
            image: sertif
        },
        { 
            id: 2, 
            title: "Deep Learning Specialization", 
            provider: "DeepLearning.AI", 
            date: "2023",
            image: sertif2
        },
    ];

    // Mencari data sertifikat yang sedang di-hover untuk ditampilkan gambarnya
    const activeCert = certificationData.find(c => c.id === activeCertId);

    return (
        <div className='min-h-screen text-white bg-transparent pb-20'>
            <MainLayout>
                {/* --- EXPERIENCE SECTION (Sama seperti sebelumnya) --- */}
                <div className='flex items-center mb-10'>
                    <span className="mr-6 text-amber-400 font-mono italic">01. experience_log</span>
                    <div className="grow h-px bg-gray-800"></div>
                </div>

                <div className="space-y-4 mb-32">
                    {experienceData.map((exp) => (
                        <div key={exp.id}>
                            <ExperienceCard 
                                {...exp} 
                                onClick={() => setActiveExpId(activeExpId === exp.id ? null : exp.id)}
                                isActive={activeExpId === exp.id}
                            />
                            {activeExpId === exp.id && (
                                <div className='ml-14 mt-4' style={{ height: '400px', position: 'relative' }}>
                                    <CircularGallery items={exp.images} bend={1} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* --- CERTIFICATION SECTION (Side-by-Side Concept) --- */}
                <div className='flex items-center mb-10'>
                    <div className="grow h-px bg-gray-800"></div>
                    <span className="ml-6 text-amber-400 font-mono italic">02. certification_vault</span>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                    {/* Kiri: List of Cards */}
                    <div className='space-y-2'>
                        {certificationData.map((cert) => (
                            <CertificationCard 
                                key={cert.id}
                                {...cert}
                                onHover={setActiveCertId}
                            />
                        ))}

                        {/* Button CTA di bawah list */}
                        <div className="pt-8">
                            <a 
                                href="/all-certifications" // Link eksternal/internal kamu
                                className="inline-block px-6 py-3 border border-amber-500 text-amber-500 font-mono text-xs hover:bg-amber-500 hover:text-black transition-all"
                            >
                                VIEW_ALL_CREDENTIALS.exe
                            </a>
                        </div>
                    </div>

                    {/* Kanan: Dynamic Preview Image */}
                    <div className='hidden lg:block sticky top-40'>
                        <div className="relative group overflow-hidden rounded-lg border border-gray-800 bg-[#111] aspect-video flex items-center justify-center">
                            {activeCert && (
                                <img 
                                    src={activeCert.image} 
                                    alt="Certification Preview"
                                    className="w-full h-full object-contain p-4 animate-in fade-in zoom-in duration-500"
                                />
                            )}
                            {/* Overlay Dekoratif */}
                            <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

export default Experience
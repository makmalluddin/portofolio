import React from 'react';
import SkillOption from '../component/card/SkillOption';
import MainLayout from '../layout/MainLayout';
import { motion } from "framer-motion";

const NewSkills = () => {
    const skillsData = {
        dataScience: [
            {
                label: "Machine Learning",
                skills: [
                    { name: "Scikit-learn", icon: "devicon:scikitlearn" },
                    { name: "TensorFlow", icon: "logos:tensorflow" },
                ]
            },
            {
                label: "Data Processing",
                skills: [
                    { name: "Python", icon: "material-icon-theme:python" },
                    { name: "Pandas", icon: "devicon:pandas" },
                    { name: "Numpy", icon: "devicon:numpy" }
                ]
            },
            {
                label: "Data Visualization",
                skills: [
                    { name: "Tableau", icon: "logos:tableau-icon" },
                    { name: "Matplotlib", icon: "devicon:matplotlib" },
                ]
            }
        ],
        webDev: [
            {
                label: "Frontend",
                skills: [
                    { name: "React", icon: "devicon:react" },
                    { name: "Vite", icon: "material-icon-theme:vite" },
                    { name: "Tailwind", icon: "devicon:tailwindcss" }
                ]
            },
            {
                label: "Backend",
                skills: [
                    { name: "Laravel", icon: "devicon:laravel" },
                    { name: "Spring Boot", icon: "bxl:spring-boot", iconClass: 'text-[#6CB52D]' },
                    { name: "REST API", icon: "devicon:postman" }
                ]
            },
            {
                label: "Database & Tools",
                skills: [
                    { name: "PostgreSQL", icon: "logos:postgresql" },
                    { name: "Git", icon: "logos:git-icon" },
                    { name: "MySQL", icon: "lineicons:mysql" }
                ]
            }
        ],
        toolsOther: [
            {
                label: "Design",
                skills: [
                    { name: "Figma", icon: "devicon:figma" },
                    { name: "Canva", icon: "bxl:canva", iconClass:'text-[#09B5CB]'},
                    { name: "Autocad", icon: "simple-icons:autocad" },
                    { name: "Draw.io", icon: "material-icon-theme:drawio" }
                ]
            },
            {
                label: "Dev Tools",
                skills: [
                    { name: "VS Code", icon: "devicon:vscode" },
                    { name: "Windows", icon: "skill-icons:windows-dark" },
                    { name: "Fedora", icon: "devicon:fedora" },
                    { name: "Github", icon:"ri:github-fill"}
                ]
            },
            {
                label: "IOT & Electronics",
                skills: [
                    { name: "Arduino", icon: "skill-icons:arduino" },
                    { name: "ESP", icon: "simple-icons:espressif", iconClass:'text-[#E8362D]' },
                    { name: "LTSpice", icon: "simple-icons:ltspice", iconClass:'text-[#910029]' },
                    { name: "Tinkercad", icon: "simple-icons:tinkercad" },
                    { name: "Kicad", icon: "file-icons:kicad", iconClass:'text-[#2D4BB1]' }
                ]
            }
        ]
    };

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
        <section id="skills" className="py-20 bg-transparent">
            <MainLayout>
                {/* Section Title */}
                <motion.div
                    variants={title}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.9 }}
                    className='flex items-center mb-10'
                >
                    <div className="grow h-px bg-gray-800"></div>
                    <span className="mx-6 text-amber-400 font-mono text-lg italic">03. My Expertise</span>
                    <div className="grow h-px bg-gray-800"></div>
                </motion.div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Card 1: Data Science */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount:0.5 }}
                    >
                        <SkillOption
                            title="Data Science"
                            color="amber"
                            categories={skillsData.dataScience}
                        />
                    </motion.div>

                    {/* Card 2: IT / Web Development */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <SkillOption
                            title="IT / Web Development"
                            color="cyan"
                            categories={skillsData.webDev}
                        />
                    </motion.div>

                    {/* Card 3: Tools & Other (Full Width) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        <SkillOption
                            title="Tools & Other"
                            color="violet"
                            categories={skillsData.toolsOther}
                        />
                    </motion.div>
                </div>
            </MainLayout>
        </section>
    );
};

export default NewSkills;
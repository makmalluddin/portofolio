import React from 'react'
import MainLayout from '../layout/MainLayout'
import SkillCard from '../component/card/SkillCard'
import MiniSkills from '../component/card/MiniSkills'
import { motion } from 'motion/react'
import avatar from '../assets/myself/avatar.webp'

function Skills() {
  const softSkills = [
    { name: "Problem Solver", top: "10%", left: "15%" },
    { name: "Analytical Thinking", top: "75%", left: "10%" },
    { name: "Teamwork", top: "20%", left: "75%" },
    { name: "Fast Learner", top: "80%", left: "65%" },
    { name: "Time Management", top: "45%", left: "5%" },
    { name: "Leadership", top: "50%", left: "80%" },
  ];

  const techStack1 = [
    { name: 'Python', level: '5', icon: 'python', color:'text-[#3776AB]' },
    { name: 'Scikit-Learn', level: '4', icon: 'sklearn' },
    { name: 'Tableau', level: '4', icon: 'tableau' },
    { name: 'MySql', level: '4', icon: 'db' },

  ]
  const techStack2 = [
    { name: 'React', level: '4', icon: 'react' },
    { name: 'Laravel', level: '2', icon: 'laravel' },
    { name: 'Tailwind', level: '4', icon: 'tailwind' },
    { name: 'PostgreSQL', level: '3', icon: 'db' },
    { name: 'Git', level: '4', icon: 'git' }
  ]

  const tools = [
    { name: 'Javascript', textCol: 'text-amber-500', borderCol:'border-amber-400', bgCol:'bg-amber-500/4' },
    { name: 'Java', textCol: 'text-amber-500', borderCol:'border-amber-400', bgCol:'bg-amber-500/4' },
    { name: 'VS Code', textCol: 'text-cyan-500', borderCol:'border-cyan-400', bgCol:'bg-cyan-500/4' },
    { name: 'Kicad', textCol: 'text-cyan-500', borderCol:'border-cyan-400', bgCol:'bg-cyan-500/4' },
    { name: 'Autocad', textCol: 'text-cyan-500', borderCol:'border-cyan-400', bgCol:'bg-cyan-500/4' },
    { name: 'Figma', textCol: 'text-cyan-500', borderCol:'border-cyan-400', bgCol:'bg-cyan-500/4' },
    { name: 'LTSpice', textCol: 'text-cyan-500', borderCol:'border-cyan-400', bgCol:'bg-cyan-500/4' },
    { name: 'Fedora', textCol: 'text-amber-500', borderCol:'border-amber-400', bgCol:'bg-amber-500/4' },
    { name: 'Debian', textCol: 'text-amber-500', borderCol:'border-amber-400', bgCol:'bg-amber-500/4' },
    { name: 'Pandas', textCol: 'text-amber-500', borderCol:'border-amber-400', bgCol:'bg-amber-500/4' },
    { name: 'Matplotlib', textCol: 'text-amber-500', borderCol:'border-amber-400', bgCol:'bg-amber-500/4' },
    { name: 'Draw.io', textCol: 'text-amber-500', borderCol:'border-amber-400', bgCol:'bg-amber-500/4' },
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
        staggerChildren: 0.15,
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
    <section id='skills' className='scroll-mt-25 min-h-screen text-white bg-transparent my-30' >
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
          <span className="mx-6 text-amber-400 font-mono text-lg italic">03. skills</span>
          <div className="grow h-px bg-gray-800"></div>
        </motion.div>

        {/* Data Skills */}
        <div className='flex flex-col gap-16 text-left'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            className='space-y-8'
          >
            <motion.div variants={itemVariants} className='text-amber-400 font-mono'>
              {'[ Data Science ]'}
            </motion.div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6'>
              {techStack1.map((items, index) => (
                <motion.div
                  variants={itemVariants}
                >
                  <SkillCard {...items} />
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* IT Skills */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            className='space-y-8'
          >
            <motion.div variants={itemVariants} className='text-amber-400 font-mono'>
              {'[ Tech Stack ]'}
            </motion.div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6'>
              {techStack2.map((items, index) => (
                <motion.div
                  variants={itemVariants}
                >
                  <SkillCard {...items} />
                </motion.div>
              ))}
            </div>

          </motion.div>
          {/* Tools & Others */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className='space-y-6'
          >
            <motion.div variants={itemVariants} className='text-amber-400 font-mono'>
              {'// tools_&_environment'}
            </motion.div>

            <motion.div variants={containerVariants } className='flex flex-wrap gap-3'>
              {tools.map((items, index) => (
                <motion.div variants={itemVariants}>
                  <MiniSkills {...items} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </MainLayout>
    </section >
  )
}

export default Skills
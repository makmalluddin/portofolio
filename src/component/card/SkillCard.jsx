import React from 'react'
import { Icon } from "@iconify/react";

function SkillCard({ name, level = 3, icon, color }) {
  // Icon Skills
  const renderIcon = () => {
    const props = { style : {fontSize : '40px'} };
    switch (icon) {
      case 'python': return <Icon icon="devicon:python" {...props} />;
      case 'sklearn': return <Icon icon='devicon:scikitlearn' {...props} />;
      case 'tableau': return <Icon icon='logos:tableau-icon' {...props} />;
      case 'db': return <Icon icon='flowbite:database-solid' style={{color: '#fbbf24', fontSize: '40px'}} />;
      case 'react': return<Icon icon='logos:react' {...props} />;
      case 'laravel': return <Icon icon='devicon:laravel' {...props} />;
      case 'tailwind': return <Icon icon='devicon:tailwindcss' {...props} />;
      case 'git': return <Icon icon='devicon:git' {...props} />;
      case 'ml': return <FaBrain {...props} />;
      default:;
    }
  };

  return (
    <div className='group flex flex-col gap-4 border border-gray-800 bg-[#0f0f0f] p-6 rounded-xl transition-all duration-500 hover:border-amber-400/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(251,191,36,0.3)]'>
      <div className='flex justify-center transition-transform duration-500 group-hover:scale-110'>
        {renderIcon()}
      </div>

      <div className='text-center font-bold text-gray-400 group-hover:text-white transition-colors text-sm'>
        {name}
      </div>

      {/* Level Indicator */}
      <div className='flex gap-1.5 justify-center'>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-all duration-700 ${i < level ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.4)]' : 'bg-gray-800'
              }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
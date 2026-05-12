import React, { memo } from 'react';
import { Icon } from '@iconify/react';

const SkillOption = memo(({ title, color, categories }) => {

  const colorMap = {
    amber: {
      text: "text-amber-500",
      dot: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]",
      hover: "hover:border-amber-500/70"
    },
    cyan: {
      text: "text-cyan-500",
      dot: "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]",
      hover: "hover:border-cyan-500/70"
    },
    violet: {
      text: "text-violet-500",
      dot: "bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]",
      hover: "hover:border-violet-500/70"
    }
  };

  const selectedColor = colorMap[color] || colorMap.amber;

  return (
    <div className="bg-[#0f1115]/50 group backdrop-blur-md border border-gray-600 transition-all duration-200 rounded-sm hover:rounded-xl hover:border-gray-500 hover:bg-gray-900 p-8 shadow-xl h-full">
      {/* Header Card */}
      <div className="flex items-center gap-3 mb-8">
        <div className={`w-2 h-2 rounded-full ${selectedColor.dot}`}></div>
        <h2 className={`${selectedColor.text} font-bold tracking-[0.2em] text-lg uppercase`}>
          {title}
        </h2>
      </div>

      {/* Categories List */}
      <div className="space-y-8">
        {categories.map((category, i) => (
          <div key={i}>
            <h3 className="text-gray-400 text-md font-bold uppercase tracking-widest mb-3">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, j) => (
                <div 
                  key={j} 
                  className={`flex items-center gap-2 bg-[#1a1d23] border border-gray-800 px-3 py-2 rounded-lg transition-all cursor-default group ${selectedColor.hover}`}
                >
                  <Icon 
                    icon={skill.icon} 
                    className={`text-xl ${skill.iconClass || ""} opacity-70`} 
                  />
                  <span className="text-white text-md group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default SkillOption;
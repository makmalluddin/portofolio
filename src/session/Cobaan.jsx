import React from 'react';

function Cobaan() {
  const socials = [
    { name: 'LINKEDIN', platform: 'Professional_Network', link: '#', color: 'border-cyan-400 text-cyan-400' },
    { name: 'GITHUB', platform: 'Source_Control', link: '#', color: 'border-orange-500 text-orange-500' },
    { name: 'DATASCIENCE.PORT', platform: 'Model_Repository', link: '#', color: 'border-cyan-400 text-cyan-400' },
    { name: 'INSTAGRAM', platform: 'Personal_Log', link: '#', color: 'border-orange-500 text-orange-500' },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 px-10 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER: Retro Warning Style */}
        <div className="mb-16 border-l-4 border-orange-600 pl-6">
          <h2 className="text-orange-500 text-xs tracking-[0.5em] uppercase mb-2">System.Status: Online</h2>
          <h1 className="text-cyan-400 text-5xl font-bold tracking-tighter">ESTABLISH_CONNECTION</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* SISI KIRI: Terminal Text */}
          <div className="flex flex-col justify-between h-full py-4 font-mono">
  
  {/* HEADER SECTION: Split Design */}
  <div className="relative group">
    <div className="absolute -top-6 left-0 text-[10px] text-orange-500 tracking-[0.8em] font-bold">
      COMMUNICATION_LINK.v4
    </div>
    
    <h1 className="text-7xl lg:text-8xl font-black text-cyan-400 leading-none tracking-tighter relative">
      SAY <br /> 
      <span className="relative inline-block">
        HELLO
        {/* Garis dekoratif yang memotong teks secara estetik */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -rotate-2"></div>
      </span>
    </h1>

    <div className="mt-4 flex items-center gap-4">
      <div className="h-[1px] w-20 bg-gray-800"></div>
      <span className="text-gray-600 text-xs tracking-widest italic">Available for remote work</span>
    </div>
  </div>

  {/* INFO METADATA: Pengganti paragraf lebay */}
  <div className="grid grid-cols-2 gap-y-8 mt-12 border-t border-gray-900 pt-12">
    <div>
      <h4 className="text-orange-500 text-[10px] uppercase mb-1">Timezone:</h4>
      <p className="text-white text-sm">UTC +07:00 / JKT</p>
    </div>
    <div>
      <h4 className="text-orange-500 text-[10px] uppercase mb-1">Status:</h4>
      <p className="text-white text-sm">Open to Projects</p>
    </div>
    <div className="col-span-2">
      <h4 className="text-orange-500 text-[10px] uppercase mb-1">Core Focus:</h4>
      <p className="text-gray-400 text-sm">Infrastructures & Predictive Modeling</p>
    </div>
  </div>

  {/* CTA BUTTON: The Tactile Industrial Button */}
  <div className="mt-16">
    <a href="mailto:email@kamu.com" 
       className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-cyan-600 font-mono tracking-widest uppercase
                  shadow-[6px_6px_0px_0px_rgba(249,115,22,1)] 
                  hover:shadow-none 
                  hover:translate-x-[6px] 
                  hover:translate-y-[6px]">
      Send Inquiry
      <svg className="w-5 h-5 ml-3 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </a>
  </div>

</div>

          {/* SISI KANAN: Social Punch Cards (Konsep Unik) */}
          <div className="grid grid-cols-1 gap-4">
            {socials.map((social, index) => (
              <a 
                key={index}
                href={social.link}
                className={`group relative flex items-center justify-between p-4 border-2 border-dashed ${social.color} opacity-70 hover:opacity-100 hover:border-solid transition-all duration-300 transform hover:-translate-x-4`}
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase opacity-60">{social.platform}</span>
                  <span className="text-xl font-bold tracking-widest">{social.name}</span>
                </div>
                
                {/* Visual Glitch/Element unik di pojok kartu */}
                <div className="flex gap-2">
                  <div className={`w-2 h-8 ${index % 2 === 0 ? 'bg-cyan-400' : 'bg-orange-500'}`}></div>
                  <div className={`w-2 h-8 ${index % 2 === 0 ? 'bg-cyan-400/30' : 'bg-orange-500/30'}`}></div>
                </div>

                {/* Nomor Urut Terminal */}
                <span className="absolute -right-10 top-1/2 -translate-y-1/2 text-[10px] text-gray-700 font-bold group-hover:text-white">
                  0{index + 1}
                </span>
              </a>
            ))}
          </div>

        </div>

        {/* FOOTER: Coordinate Decor */}
        <div className="mt-32 pt-8 border-t border-gray-900 flex justify-between text-[10px] text-gray-700 tracking-[0.5em]">
          <span>LOC: -6.2088° S, 106.8456° E</span>
          <span>SYSTEM_VERSION_2026.04</span>
        </div>

      </div>
    </section>
  );
}

export default Cobaan;
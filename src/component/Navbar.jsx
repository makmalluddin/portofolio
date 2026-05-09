import React, { useState, useEffect } from 'react'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    //Scroll Handler
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'experience', href: '#experience' },
        { name: 'skills', href: '#skills' },
        { name: 'projects', href: '#projects' },
        { name: 'contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 flex z-50 w-full text-md transition-all duration-500 ${isScrolled ? 'h-16 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800' : 'h-24 bg-transparent'}`}>
            <div className='flex justify-between max-w-7xl w-full items-center px-6 lg:px-8 mx-auto'>

                {/* Udin Text */}
                <div className='flex font-mono justify-start cursor-pointer group'>
                    <a href="#" className="relative">
                        {'</UDN>'}
                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 transition-all group-hover:w-full"></div>
                    </a>
                </div>

                {/* 3 & 5. Menu Navigasi dengan Anchor Links */}
                <ul className='hidden md:flex gap-10 text-white items-center justify-center uppercase font-mono tracking-[0.3em]'>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="hover:text-amber-400 transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* 4. Open to Work dengan Efek Breath */}
                <div className="flex items-center gap-3 px-2 py-1.5 border border-emerald-500/30 bg-emerald-500/5 rounded-full">
                    <div className="relative flex h-2.5 w-2.5">
                        {/* Efek Radar/Ping */}
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        {/* Titik Inti */}
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </div>
                    <span className="text-[10px] font-mono font-medium tracking-wider text-emerald-400 uppercase">
                        Open to work
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
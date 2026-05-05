import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Format waktu Jakarta (WIB)
    const jakartaTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(time);

    return (
        <footer className="w-full py-10 border-t border-gray-800 bg-transparent font-mono">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between">

                    {/* Build With */}
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">Build Stack</span>
                        <div className="flex gap-3 text-gray-400">
                            <Icon icon="logos:react" height="15" />
                            <Icon icon="logos:tailwindcss-icon" height="15" />
                            <Icon icon="logos:framer-motion" height="20" />
                        </div>
                    </div>

                    {/* Times */}
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-[10px] uppercase tracking-widest">Local Time / JKT</span>
                        <span className="text-amber-300 text-xl font-bold">{jakartaTime} <span className="text-[10px] text-gray-600">WIB</span></span>
                    </div>


                    {/* Copyright */}
                    <div className="flex flex-col lg:items-end">
                        <span className="text-gray-500 text-[10px] uppercase tracking-widest">Edition</span>
                        <p className="text-gray-400 text-sm">© 2026 — All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
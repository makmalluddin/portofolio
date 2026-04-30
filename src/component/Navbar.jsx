import React from 'react'

function Navbar() {
    return (
        <nav className='navbar fixed flex z-50 w-full'>
            <div className='flex justify-between max-w-7xl w-full items-center bg-[#161616] h-20 gap-auto mx-auto'>
                <div className='flex font-mono justify-start max-w-xl text-white text-lg'> {"</udin>"} </div>

                <ul className='flex gap-10 text-white items-center justify-center uppercase text-sm tracking-[0.3em]'>
                    <li>experience</li>
                    <li>skills</li>
                    <li>projects</li>
                    <li>contact</li>
                </ul>

                <div className='flex justify-center text-white'>open to work</div>
            </div>
        </nav>

    )
}

export default Navbar
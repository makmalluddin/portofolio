import React from 'react'

function Navbar() {
    return (
        <nav className='w-full border-b border-gray-600'>
            <div className='grid grid-cols-3 items-center bg-[#161616] h-20 gap-20 max-w-7xl mx-auto sm:px-6 lg:px-8'>
                <div className='flex justify-start text-white'> {"</udin>"} </div>

                <div className='flex justify-center text-white'>
                    <ul className='flex gap-10'>
                        <li>experience</li>
                        <li>skills</li>
                        <li>projects</li>
                        <li>contact</li>
                    </ul>
                </div>

                <div className='flex justify-end text-white'>open to work</div>
            </div>
        </nav>
    ) 
}

export default Navbar
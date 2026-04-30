import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

function SosmedCard() {
    return (
        <div className='flex text-white border-2 gap-40 justify-between p-2 border-dashed border-blue-400 hover:border-solid transitition-all duration-300 hover:-translate-x-2'>
            <div className='flex flex-col gap-2'>
                <div className='text-lg text-blue-300'>
                    Profesional Network
                </div>
                <div className='text-xl'>
                    LinkedIn
                </div>
            </div>
            <div className='flex items-center'>
                <FaLinkedin className='text-4xl text-blue-500' />
            </div>
        </div>
    )
}

export default SosmedCard
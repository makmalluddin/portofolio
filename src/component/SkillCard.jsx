import React from 'react'
import { FaReact } from "react-icons/fa";

function SkillCard() {
    return (
    <div className='flex flex-col gap-2 border w-55 h-fit rounded-lg shadow-amber-300 shadow-md p-3'>
        <div className='flex justify-center'>
            <FaReact size={40} color="#61DBFB" /> 
        </div>

        <div className='flex justify-center text-lg'>
            React
        </div>

        <div className='flex gap-1 justify-center'>
            <div className='border h-2 w-2 border-amber-300'></div>
            <div className='border h-2 w-2 border-amber-300'></div>
            <div className='border h-2 w-2 border-amber-300'></div>
            <div className='border h-2 w-2 border-amber-300'></div>
            <div className='border h-2 w-2 border-amber-300'></div>
        </div>
    </div >
  )
}

export default SkillCard
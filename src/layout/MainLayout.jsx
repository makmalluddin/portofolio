import React from 'react'

function MainLayout({children}) {
  return (
    <div className='max-w-7xl mx-auto my-2'>
        {children}
    </div>
  )
}

export default MainLayout
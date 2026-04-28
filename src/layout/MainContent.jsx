import React from 'react'

function MainContent({children}) {
  return (
    <div className='max-w-5xl mx-auto my-2'>
        {children}
    </div>
  )
}

export default MainContent
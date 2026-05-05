import React from 'react'

function MainLayout({children}) {
  return (
    // Tambahkan w-full dan px agar konten tidak menempel ke pinggir layar saat mobile
    <div className='w-full px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto my-2'>
          {children}
      </div>
    </div>
  )
}

export default MainLayout
import React from 'react'
import PillNav from '/components/PillNav'
import logo from '../assets/myself/avatar.jpg'

function Navbarr() {
    return (
        <nav className='fixed top-0 inset-x-0 z-50 flex justify-center p-6'>
            <PillNav
                logo={logo}
                logoAlt="Company Logo"
                items={[
                    { label: 'experience', href: '#' },
                    { label: 'skills', href: '#' },
                    { label: 'projects', href: '#' },
                    { label: 'contact', href: '#' }
                ]}
                activeHref="/"
                className="texas"
                ease="power2.easeOut"
                baseColor="#ffffff"
                pillColor="#000000"
                hoveredPillTextColor="#000000"
                pillTextColor="#ffffff"
                theme="dark"
                initialLoadAnimation
            />

        </nav>
    )
}

export default Navbarr
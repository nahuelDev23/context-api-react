import React from 'react'
import { Nav } from '../nav/Nav'
import './layaout.css'
export const Layaout = ({ children }) => {
    return (
        <div className='container mx-auto'>
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
}

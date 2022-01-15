import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export const Nav = () => {

    return (
        <div className='center mt'>
            <span className='nav-button'>
                <Link to='/'>Home</Link>
            </span>
            <span className='nav-button'>
                <Link to='about'>About</Link>
            </span>
        </div>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    return (
        <>
            <div className='text-center'>
                <h1>404</h1>
                <h2>Sorry page not found</h2>
                <p>The page you are looking for might have been removed or changed temporarily</p>
                <NavLink to='/'>Back to Home</NavLink>
            </div>
        </>
    )
}

export default Errorpage
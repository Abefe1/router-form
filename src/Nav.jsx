import  './Nav.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import React from 'react';

const Nav = ({setPage, page})=>{

    // const [page, setPage] = useState(false)

    const togglePage = ()=>{
    
        setPage((previousState)=> !previousState)
    }

    return(
        <div className="maindiv">
            <div className="logo">
                <div className="image">
                    <img src="vite.svg" alt="" />
                </div>
                <h3>LOGO</h3>
            </div>

            <div className="navLinks">
                <div className="links">
                    <Link to={'/'}>
                        <div>Home</div>
                    </Link>

                    <Link to={'/about'}>
                        <div>About</div>
                    </Link>

                    <Link to={'/services'}>
                        <div>Services</div>
                    </Link>

                    <Link to={'/contact'}>
                        <div>Contact</div>
                    </Link>
                </div>
                <div className="button">
                    <button onClick={()=>{togglePage()}}>{page ? `Logout` : `Login`}</button>
                </div>
            </div>
        </div>
    )
}


export default Nav
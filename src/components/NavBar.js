import React, { useRef } from 'react'
import { NavLink } from "react-router-dom"
import "../css/style.css"
import bars from "../assets/bars-solid.svg"
import xmark from "../assets/xmark-solid.svg"


function NavBar() {
    const navRef = useRef();

    const showMenu = () => {
        navRef.current.classList.toggle("responsive-menu")
    
    }
  return (
    <>
        <header>
            <h2 className='nav-logo'><NavLink to="/">Kob's Blog</NavLink></h2>
    
            <nav className="nav-container" ref={navRef}>
                <li>
                    <NavLink onClick={showMenu} to="/">Home</NavLink>
                </li>
            
                <li>
                    <NavLink onClick={showMenu} to="/about">About Us</NavLink>
                </li>
                <li>
                    <NavLink onClick={showMenu} to="/">Blog</NavLink>
                </li>
                
                <button type='button' onClick={showMenu} className='menu-bar nav-close-btn' id='cross'><img src={xmark} alt="humburger menu" id='btn-svg' /> </button>
        
            </nav>
            <div id="bars">
                <button type="button" onClick={showMenu} className='menu-bar'><img src={bars} alt="humburger menu" id='btn-svg' /> </button>
            </div>
        
        </header>
    </>
  )
}

export default NavBar
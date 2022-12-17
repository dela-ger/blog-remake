import React from 'react'
import { Link } from "react-router-dom"
import "../css/style.css"
import linkedIn from "../assets/linkedin.svg"
import gitHub from "../assets/square-github.svg"
import twitter from "../assets/square-twitter.svg"

function Footer() {
  return (
    <footer>
        <div className="footer-logo">
            <h1>Kob's Blog</h1>  
        </div>
      

      <div className="footer-social-media">
        <Link to='https://linkedin.com/in/germaine-djameh'>
            <img src={linkedIn} alt="linkedIn account" width="50px" />        
        </Link>
        <Link to='https://github.com/dela-ger'>
            <img src={gitHub} alt="linkedIn account" width="50px" />        
        </Link>
        <Link to='https://mobile.twitter.com/kobby_germain'>
            <img src={twitter} alt="linkedIn account" width="50px" />        
        </Link>
        
      </div>

      

   </footer>
  )
}

export default Footer
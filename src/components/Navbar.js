import React from 'react'
import { Link } from "react-router-dom"
import Proflogin from './prof-login'
// import {Navbar,Nav} from "react-bootstrap";

export default function Navbar() {
  return (
    <nav>
      <a id="logo" href="/index.html">Online Proctoring System</a>
      <div>
        {/* <a className="navitems" href="prof-login.js">Professor Login</a> */}
        <Link to="/prof-login">Professor Login</Link>
        <Link to="/login">Student Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/contact">Contact Us</Link>
        {/* <a className="navitems" href="login.js">Student Login</a>
        <a className="navitems" href="register.js">Register</a>
        <a className="navitems" href="contact.js">Contact Us</a> */}
        {/* <!-- <a className="navitems" href="/faq.html">FAQs</a> --> */}
      </div>
    </nav>

    
  )
}

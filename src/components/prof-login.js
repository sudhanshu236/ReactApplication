import React from 'react'
// import {Navbar,Nav} from "react-bootstrap";
import Navbar from './components/Navbar'

export default function Proflogin() {
  return (
    <>
    <Navbar/>
        <div className="container">
        <h1>Log In</h1>
        <hr/>
        <form>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Enter your Email"/>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your Password"/>
          <br/>
          <a href="teacher-dashboard.html"><input type="submit"/></a>
        </form>
        {/* <!-- <div class="mg"><img src="/teacher.png" alt=""></div> --> */}
      </div>

    </>
    
    
  )
}

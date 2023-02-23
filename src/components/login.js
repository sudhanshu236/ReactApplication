import React from 'react'
// import {Navbar,Nav} from "react-bootstrap";
import Navbar from './components/Navbar'

export default function Changepass() {
  return (
    <>
    <Navbar/>
    <div class="container">
        <h1>Get Logged in</h1>
        <hr/>
        <form>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Enter your Email"/>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter the Password"/>
          <br/>
          <a href="student-dashboard.html"><input type="submit" value="Login"/></a>
        </form>
        <a style="text-decoration: none;" href="forgot-pass.html" class="forgot-password">Forgot Password?</a>
      </div>

    </>
    
    
  )
}

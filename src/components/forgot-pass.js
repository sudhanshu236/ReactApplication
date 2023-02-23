import React from 'react'
// import {Navbar,Nav} from "react-bootstrap";
import Navbar from './components/Navbar'

export default function Forgotpass() {
  return (
    <>
    <Navbar/>
    <div class="container">
        <h1>Forgot Password</h1>
        <form action="#">
          <label for="email">Email:</label>
          <input type="text" id="email" name="email"/>
          <input type="submit" value="Send Reset Link"/>
        </form>
      </div>

    </>
    
    
  )
}

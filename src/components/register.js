import React from 'react'
// import {Navbar,Nav} from "react-bootstrap";
import Navbar from './components/Navbar'

export default function Register() {
  return (
    <>
    <Navbar/>
    <div className="container">
        <h1>Register</h1>
        <hr/><br/>
        <form action="#">
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Enter your Email"/>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your Name"/>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your Password"/>
          <label for="user_type">User Type:</label>
          <select id="user_type" name="user_type">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <label for="image">Capture Image:</label>
          
          <br/>
          <input style="margin-top: 15px;" type="submit" value="Register"/>
        </form>
    </div>
      <p>Already have an account? <a href="login.html">Login</a></p>
    </>
    
    
  )
}

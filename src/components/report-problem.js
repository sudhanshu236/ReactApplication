import React from 'react'
// import {Navbar,Nav} from "react-bootstrap";
import Navbar from './components/Navbar'

export default function Reportproblem() {
  return (
    <>
    <Navbar/>
    <div class="container">
      <h1>Report Problem</h1>
      <form>
        <label for="problem-category">Problem Category:</label>
        <select id="problem-category" name="problem-category">
          <option value="login">Login</option>
          <option value="register">Register</option>
          <option value="face-verification">Face Verification</option>
          <option value="logout">Logout</option>
        </select>
        <label for="problem-description">Problem Description:</label>
        <textarea id="problem-description" name="problem-description"></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>

    </>
    
    
  )
}

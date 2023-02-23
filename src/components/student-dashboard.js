import React from 'react'
// import {Navbar,Nav} from "react-bootstrap";
import Navbar from './components/Navbar'

export default function Studentdash() {
  return (
    <>
    <Navbar/>
        <div class="container">
      <div class="sidebar">
        <a href="#">Give Exam</a>
        <a href="#">Exam History</a>
        <a href="#">Results</a>
        <a href="report-problem.html">Report Problem</a>
        <a href="change-pass.html">Change Password</a>
        <a href="#">Logout</a>
      </div>
      <div class="content">
        <h1>Student Dashboard</h1>
        <p>Welcome to the student dashboard of the Online Proctoring System. You can access various features from the left-side menu.</p>
      </div>
    </div>
    </>

    
  )
}

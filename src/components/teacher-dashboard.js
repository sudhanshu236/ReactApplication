import React from 'react'
// import {Navbar,Nav} from "react-bootstrap";
import Navbar from './components/Navbar'

export default function Teacherdash() {
  return (
    <>
    <Navbar/>
        <div class="container">
      <div class="sidebar">
        <a href="#">Create Exam</a>
        <a href="#">Generate Questions</a>
        <a href="#">View Questions</a>
        <a href="#">Update Questions</a>
        <a href="#">Delete Questions</a>
        <a href="#">Exam History</a>
        <a href="#">Live Monitoring</a>
        <a href="#">Student Monitoring</a>
        <a href="#">Insert Marks</a>
        <a href="#">Publish Results</a>
        <a href="#">Results</a>
        <a href="#">Logout</a>
      </div>
      <div class="content">
        <h1>Professor Dashboard</h1>
        <p>Welcome to the Professor dashboard of the Online Proctoring System. You can access various features from the left-side menu.</p>
      </div>
    </div>
    </>

    
  )
}

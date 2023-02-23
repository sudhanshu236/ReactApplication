import React from 'react'
// import {Navbar,Nav} from "react-bootstrap";
import Navbar from './components/Navbar'

export default function Contact() {
  return (
    <>
    <Navbar/>
    <div class="container">
      <form action="#">
    
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    
        <label for="country">Email</label>
        <input type="text" id="email" name="email" placeholder="Your Email id.."/>
    
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    
        <input type="submit" value="Submit"/>
    
      </form>
    </div>

    </>
    
    
  )
}

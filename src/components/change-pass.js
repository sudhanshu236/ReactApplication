import React from 'react'
// import {Navbar,Nav} from "react-bootstrap";
import Navbar from './components/Navbar'

export default function Changepass() {
  return (
    <>
    <Navbar/>
    <div class="container">
      <h1>Change Password</h1>
      <form>
        <label for="old-password">Old Password:</label>
        <input type="password" id="old-password" name="old-password"/>
        <label for="new-password">New Password:</label>
        <input type="password" id="new-password" name="new-password"/>
        <input type="submit" value="Change Password"/>
      </form>
    </div>

    </>
    
    
  )
}

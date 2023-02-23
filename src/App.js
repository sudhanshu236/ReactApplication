// import logo from './logo.svg';
import './App.css';
import './index.css';
import './nav.css';
import Nav from "react-bootstrap/Nav";


import Navbar from './components/Navbar'


function App() {
  return (
    <>
    <Navbar/>
    
    <div className="container">

        <div className="info">
          <h1 id="heading" >Welcome to <span className="main">Online Proctoring System</span></h1>
          <h3 id="subhead" >Prevent cheating with AI-based proctoring solution!</h3>
          <p>Our fraud detection mechanism significantly reduces the cheating done by candidates. Also, it enables recruiters to detect the exact instances of how and when the cheating occurred.</p>
          <a href="#"><button  id="button" >Start a demo</button></a>
          <a href="register.html"><button id="registerbtn" >Register</button></a>
          <h5>Have a doubt? Read <a href="faq.html">Frequently Asked Questions</a></h5>
        </div>
        <div>
          <img id="f-image" src="" alt="Online Learning" />
        </div>
    </div>
    
    </>
  );
}

export default App;

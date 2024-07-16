import React from 'react';
import './firstpage.css';
import { Link } from 'react-router-dom';
import  logo from '../../assets/logooo.png'

function FirstPage() {
  return (
    <>
    <body>

      <div className="image-wrapper">

    <div className="logo-wrapper">
        <img src={logo} alt="logo" className="logo"  />
      </div>
        
   
      <div className="first-page-wrapper">
        <h1 className="first-page-welcome">Welcome to Localize AI</h1>
        <p className="first-page-text">Log-in or sign-up  with your existing to Continue</p>
        <div className="first-page-button-wrapper">
          <button className="first-page-button">
            <Link to="/login">Login</Link>
          </button>
          <button className="first-page-button">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
      </div>
     
      </body>
    </>
  )
}

export default FirstPage;

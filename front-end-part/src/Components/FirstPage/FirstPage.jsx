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
        <h1 className="first-page-welcome">እንኳን ወደ  Localize AI እንኳን በደህና መጡ</h1>
        <p className="first-page-text">ለመቀጠል ይግቡ ወይም ይመዝገቡ</p>
        <div className="first-page-button-wrapper">
          <div className="first-page-button">
            <Link to="/login">ይግቡ</Link>
          </div>
          <div className="first-page-button">
            <Link to="/signup">ይመዝገቡ</Link>
          </div>
        </div>
      </div>
      </div>
     
      </body>
    </>
  )
}

export default FirstPage;

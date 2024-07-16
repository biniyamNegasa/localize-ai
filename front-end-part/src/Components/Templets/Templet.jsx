import React from 'react';
import CapablityDisplayer from '../CapablityDisplayer/CapablityDisplayer.jsx';
import './Templets.css';
import { AiFillThunderbolt,AiTwotoneWarning } from "react-icons/ai";
import Example from '../Examples/Example.jsx';
import { Link,useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import  logo from '../../assets/small--logo.png'


function Templet() {
    const Contents = [
    
        {
          icon: <AiFillThunderbolt /> ,
          name: 'Capability', 
          data: ['Provides detailed explanations on a wide range of topics', 'Supports programming and coding with script generation and debugging advice', 'Helps with learning and education by explaining concepts'],
        },
        {
          icon: <AiTwotoneWarning color = "red" />,
          name: 'Limitation',
          data: ['Lack of true understanding or consciousness', 'Inability to fully understand context', 'Lack of real-time information'],
        },
      ];
      
  return (
    <div className="app_container">
      <div className="side-bar">
        <Sidebar />
      </div>
    <div className="main-side">



    <div className="image-wrapper">
    <div className="logo-wrapper">
    <img src={logo} alt="logo" className="logo"/>
  </div>



      <div className  = "templet-container">
      <div className="capability-list">
        <Example />
        {Contents.map((capability, index) => (
          <CapablityDisplayer
            key={index}
            icon={capability.icon}
            name={capability.name}
            data={capability.data}
          />
        ))}
      </div>
      <Link to="/main"><button className="navigation">Start Chat</button></Link>
      </div>

        </div>
        </div>

      </div>

   
  );
}

export default Templet;

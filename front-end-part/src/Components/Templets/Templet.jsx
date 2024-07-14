import React from 'react';
import CapablityDisplayer from '../CapablityDisplayer/CapablityDisplayer.jsx';
import './Templets.css';
import { AiFillThunderbolt,AiTwotoneWarning } from "react-icons/ai";
import Example from '../Examples/Example.jsx';
import { Link } from 'react-router-dom';

function Templet() {
    const Contents = [
    
        {
          icon: <AiFillThunderbolt color = "white" /> ,
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
    <Link to="/main"><button className="navigation">Go to home Page</button></Link>
    </div>
  );
}

export default Templet;

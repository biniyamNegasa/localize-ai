import React from 'react';
import './CapablityDisplayer.css';
import { AiFillThunderbolt } from "react-icons/ai";

function CapablityDisplayer({ icon, name, data }) {
  return (
    <div className="displayer-wrapper">

      <div className="displayer-icon">{icon}</div>
      <div className="displayer-data">
        <h3 className="displayer-data-name">{name}</h3>
        
          {data.map((item, index) => (
            <p className = "displayer-data-item" key={index}>{item}</p>
          ))}
      </div>
      
    </div>
  );
}

export default CapablityDisplayer;

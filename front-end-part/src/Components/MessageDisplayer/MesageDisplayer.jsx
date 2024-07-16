import React from 'react';
import './MessageDisplayer.css';
const MessageDisplayer = ({ messages = [] }) => {
 

  return (
    <div className="message-container">
      
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.role}`}>
          {message.content}<br />
        </div>
      ))}
    </div>
  );
};

export default MessageDisplayer;

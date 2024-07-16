import React, { useState } from 'react';
import './Example.css';
import { AiOutlineSun } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const Example = () => {
  const navigate = useNavigate();

  const handleSentenceClick = () => {
    navigate("/main");
  };

  const sentences = [
    "Can you explain the concept of object-oriented programming?",
    "What are some effective time management techniques?",
    "How do I write a thesis statement?"
  ];

  return (
    <div className="example-container">
      <div className="example-icon"><AiOutlineSun /></div>

        <p className="displayer-example-name"><b>Examples</b></p>

        <p className="paragraph">
          {sentences.map((sentence, index) => (
            <div
              key={index}
              onClick={() => handleSentenceClick()}
              className="clickable-sentence"
            >
              {sentence + ''}<br/>
            </div>
          ))}
        </p>
    
    </div>
  );
};

export default Example;

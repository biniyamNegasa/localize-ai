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
    "የነገር ተኮር ፕሮግራሚንግ ፅንሰ-ሀሳብን ማብራራት ትችላለህ?",
    "አንዳንድ ውጤታማ የጊዜ አያያዝ ዘዴዎች ምንድ ናቸው?",
    "የመመረቂያ መግለጫ እንዴት እጽፋለሁ??"
  ];

  return (
    <div className="example-container">
      <div className="example-icon"><AiOutlineSun /></div>

        <p className="displayer-example-name"><b>ምሳሌዎች</b></p>

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

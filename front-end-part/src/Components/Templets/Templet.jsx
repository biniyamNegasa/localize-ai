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
          name: 'ችሎታ', 
          data: ['በተለያዩ ርዕሰ ጉዳዮች ላይ ዝርዝር ማብራሪያዎችን ያቀርባል', 'በስክሪፕት ማመንጨት እና በማረም ምክር ፕሮግራሚንግ እና ኮድ መስጠትን ይደግፋል', 'ጽንሰ-ሀሳቦችን በማብራራት በመማር እና በትምህርት ይረዳል'],
        },
        {
          icon: <AiTwotoneWarning color = "red" />,
          name: 'ገደብ',
          data: ['የእውነተኛ ግንዛቤ ወይም የንቃተ ህሊና እጥረት', 'ዐውደ-ጽሑፉን ሙሉ በሙሉ ለመረዳት አለመቻል', 'የእውነተኛ ጊዜ መረጃ እጥረት'],
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
      <Link to="/main"><button className="btn margin-bottom">ውይይት ጀምር</button></Link>
      </div>

        </div>
        </div>

      </div>

   
  );
}

export default Templet;

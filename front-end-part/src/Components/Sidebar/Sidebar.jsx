import React from 'react';
import { FaTrash, FaMoon, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();

  const handleClearConversation = () => {
    navigate('/main');
  };

 

  const handleOpenAiDashboard = () => {
    navigate('/templet');
  };

  const handleLogOut = () => {
    navigate('/firstpage');
  };

  return (
    <div className="side-bar-wrapper">
      <div className="side-bar-row" onClick={handleClearConversation}>
        <div className="side-bar-icon">
          <FaTrash />
        </div>
        <p className="side-bar-text">ውይይት አጽዳ</p>
      </div>

     
      <div className="side-bar-row" onClick={handleOpenAiDashboard}>
        <div className="side-bar-icon">
          <FaTachometerAlt />
        </div>
        <p className="side-bar-text">AI ዳሽቦርድን ይክፈቱ</p>
      </div>

      <div className="side-bar-row" onClick={handleLogOut}>
        <div className="side-bar-icon">
          <FaSignOutAlt />
        </div>
        <p className="side-bar-text">ውጣ</p>
      </div>
    </div>
  );
};

export default Sidebar;

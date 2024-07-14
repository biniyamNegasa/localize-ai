import React from 'react';
import { FaTrash, FaMoon, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();

  const handleClearConversation = () => {
    navigate('/main');
  };

  const handleToggleLightMode = () => {
    console.log('toggle');
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
        <p className="side-bar-text">Clear Conversation</p>
      </div>

      <div className="side-bar-row" onClick={handleToggleLightMode}>
        <div className="side-bar-icon">
          <FaMoon />
        </div>
        <p className="side-bar-text">Light Mode</p>
      </div>

      <div className="side-bar-row" onClick={handleOpenAiDashboard}>
        <div className="side-bar-icon">
          <FaTachometerAlt />
        </div>
        <p className="side-bar-text">Open AI Dashboard</p>
      </div>

      <div className="side-bar-row" onClick={handleLogOut}>
        <div className="side-bar-icon">
          <FaSignOutAlt />
        </div>
        <p className="side-bar-text">Log Out</p>
      </div>
    </div>
  );
};

export default Sidebar;

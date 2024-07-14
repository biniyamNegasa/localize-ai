import React from 'react';
import { FaTrash, FaMoon, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa'; // Import icons from react-icons
import './Sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const handleClearConversation = () => {
    console.log('Cleared Conversation');
  };

  const handleToggleLightMode = () => {
    console.log('Toggled Light Mode');
  };

  const handleOpenAiDashboard = () => {
    console.log('Opened AI Dashboard');
  };

  const handleLogOut = () => {
    

    console.log('Logged Out');
  };

  return (
    <div className="side-bar-wrapper">

      <div className="side-bar-row" onClick = {handleClearConversation}>
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
        <Link to="/firstpage"><p className="side-bar-text">Log Out</p></Link>
      </div>
      
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Components/signUp/Signin.jsx';
import FirstPage from './Components/FirstPage/FirstPage.jsx';
import Templet from './Components/Templets/Templet.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Main from './Components/Main/Main.jsx';
import Login from './Components/Login/Login.jsx';
import './App.css';

function App() {
  return (
    <Router>

          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/signup" element={<Signin />} />
            <Route path="/main" element={<Main />} />
            <Route path="/templet" element={<Templet />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<FirstPage />} />
          </Routes>
       
    </Router>
  );
}

export default App;

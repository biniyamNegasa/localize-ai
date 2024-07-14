import React, { useState, useEffect } from 'react';
import './Main.css';
import { AiOutlineSend } from "react-icons/ai";
import MessageDisplayer from '../MessageDisplayer/MesageDisplayer.jsx';
import axios from 'axios';
import EmptyComponent from "./EmptyComponent.jsx"
import Sidebar from '../Sidebar/Sidebar.jsx';


const Main = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost/chatApptempo/chatapp.php');
        console.log('Initial Messages:', response.data);
        setMessages(response.data.messages || []);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    const newMessage = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    

    try {
      const response = await axios.post('http://localhost/chatApptempo/chatapp.php', { message: input });
      console.log('Response:', response.data);
      const assistantMessages = response.data.answer; 
      setMessages(prevMessages => [...prevMessages, ...assistantMessages]);
    } catch (error) {
      console.error('Error:', error);
    }
    setInput('');
  };

  return (
    <div className="app_container">
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="main-side">
      <div className="main-container">
      <main className="App-main">
       
          {messages && <MessageDisplayer messages={messages} /> }
      
      </main>

      <form onSubmit={handleSubmit} className="message-form">
        <div className="input-wrapper">
          <input 
            type="text" 
            placeholder="Enter your message..." 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
          />
          <button type="submit"><AiOutlineSend /></button>
        </div>
      </form>
    </div>

      </div>
    </div>

   
  );
}

export default Main;

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
  const [error, setError] = useState("")
  const fixText = (string_val) => {
    const s = string_val.replaceAll('**', ' \n\n\n')
    const final = s.replaceAll('*', " \n\n\n ")
    return final
  }
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setMessages([{role: "assistance",content: "ጥያቄዎችን በመመለስ፣ መረጃ በመስጠት፣ ጽሑፍ በማመንጨት እና በሌሎችም እገዛ ማድረግ እችላለሁ። ምን ማወቅ ወይም መወያየት ይፈልጋሉ?"}]);
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
    

    axios.post('http://localhost:5000/api/chat', {
      
      input
  }).then((res) => {
      console.log(res.data)
      if (res.data.data.success) {
        const answer = fixText(res.data.data.message)
          const responceMessage = {role: "assistance", content: answer}
          setMessages(prevMessages => [...prevMessages, responceMessage])
      }else{
          setError(res.data.data.message);
      }
  })
  .catch(e => {
      setError("Unkown Error")    
  })
    

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
            placeholder="መልዕክቶን ያስገቡ..." 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
          />
          <button type="submit" className='send-btn'><AiOutlineSend /></button>
        </div>
      </form>
    </div>

      </div>
    </div>

   
  );
}

export default Main;

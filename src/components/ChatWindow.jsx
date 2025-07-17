import React, { useState, useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import { MinimizeIcon, CloseIcon, ClearIcon } from './Icons';
import SendArrowIcon from './SendArrowIcon';
import '../App.css';
import { sendMessageToBot } from '../api/bot_api';

const LOCAL_STORAGE_KEY = 'chatbot_conversation';

function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  // Removed unused loading state
  const chatEndRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { message: input, isUser: true };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    try {
      const botResponse = await sendMessageToBot(input);
      setMessages((msgs) => [...msgs, { message: botResponse, isUser: false }]);
    } catch {
      setMessages((msgs) => [...msgs, { message: 'Error: Could not get response from bot.', isUser: false }]);
    }
  };

  const handleOptionClick = async (option) => {
    setMessages((msgs) => [
      ...msgs,
      { message: option, isUser: true },
    ]);
    try {
      const botResponse = await sendMessageToBot(option);
      setMessages((msgs) => [...msgs, { message: botResponse, isUser: false }]);
    } catch {
      setMessages((msgs) => [...msgs, { message: 'Error: Could not get response from bot.', isUser: false }]);
    }
    //   setMessages([]);
    //   localStorage.removeItem(LOCAL_STORAGE_KEY);
    // };
  };

  return (
    <div className={`chatbot-container chat-float-window`}>
      <div className="chatbot-header chat-float-header" style={{justifyContent:'flex-start', position:'relative'}}>
        <span style={{fontWeight:600, marginLeft: 18}}>TeKnowledge</span>
        <div className="chat-float-header-icons" style={{position:'absolute', right:12, top:0, height:'100%', display:'flex', alignItems:'center'}}>
          <button className="chat-float-header-btn" title="Minimize" onClick={onClose}>
            <MinimizeIcon />
          </button>
          {/* <button className="chat-float-header-btn" title="Clear messages" onClick={handleClear}>
            <ClearIcon />
          </button> */}
          <button className="chat-float-header-btn" title="Close" onClick={onClose}>
            <span style={{fontSize:'1.5rem',fontWeight:'bold',color:'#5c4dff',lineHeight:1}}>×</span>
          </button>
        </div>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <ChatBubble
            key={idx}
            message={msg.message}
            isUser={msg.isUser}
            options={msg.options}
            onOptionClick={handleOptionClick}
          />
        ))}
        <div ref={chatEndRef} />
      </div>
      <form className="chatbot-input-row" onSubmit={handleSend}>
        <input
          className="chatbot-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          autoFocus
        />
        <button className="chatbot-send-btn" type="submit" style={{padding:0, background:'none', border:'none', borderRadius:'50%', width:38, height:38, display:'flex', alignItems:'center', justifyContent:'center'}}>
          <SendArrowIcon size={24} color="#5c4dff" />
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;

import React, { useState } from 'react';
import ChatIcon from './components/ChatIcon';
import ChatWindow from './components/ChatWindow';
import Home from './pages/Home';
import './App.css';



function App() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw' }}>
      <Home />
      {!open && (
        <div className="chat-float-btn" onClick={() => { setOpen(true); setMinimized(false); }}>
          <ChatIcon size={44} />
        </div>
      )}
      {open && minimized && (
        <div className="chat-float-window-bg">
          <div className="chatbot-container chat-float-window minimized" onClick={() => setMinimized(false)} style={{cursor:'pointer'}}>
            <div className="chatbot-header chat-float-header" style={{justifyContent:'center'}}>
              <span>TeKnowledge (Click to restore)</span>
            </div>
          </div>
        </div>
      )}
      {open && !minimized && (
        <div className="chat-float-window-bg">
          <ChatWindow
            onMinimize={() => setMinimized(true)}
            onClose={() => { setOpen(false); setMinimized(false); }}
          />
        </div>
      )}
    </div>
  );
}

export default App;

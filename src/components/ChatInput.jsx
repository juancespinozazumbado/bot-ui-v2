import React, { useState } from 'react';
import SendArrowIcon from './SendArrowIcon';

const ChatInput = ({ onSend, loading }) => {
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    onSend(input);
    setInput('');
  };

  return (
    <form className="chatbot-input-row" onSubmit={handleSend}>
      <div className="chatbot-input-wrapper">
        <input
          className="chatbot-input chatbot-input-gray"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          autoFocus
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) handleSend(e); }}
          disabled={loading}
        />
        <span
          className="chatbot-send-icon"
          onClick={handleSend}
          aria-label="Send"
          tabIndex={0}
          role="button"
        >
          <SendArrowIcon size={22} color="#5c4dff" />
        </span>
      </div>
    </form>
  );
};

export default ChatInput;
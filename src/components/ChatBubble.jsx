import React from 'react';
import './ChatBubble.css';


const ChatBubble = ({ message, isUser, options, onOptionClick }) => {
  return (
    <div className={`chat-bubble ${isUser ? 'user' : 'bot'}`}> 
      <div className="chat-bubble-content">
        {message}
        {options && options.length > 0 && (
          <div className="chat-bubble-options" style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {options.map((opt, idx) => (
              <button
                key={idx}
                className="chat-bubble-option-btn"
                onClick={() => onOptionClick && onOptionClick(opt)}
                style={{
                  background: '#5c4dff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 14,
                  padding: '6px 16px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginTop: 2,
                  alignSelf: 'flex-start',
                  transition: 'background 0.2s',
                }}
                type="button"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;

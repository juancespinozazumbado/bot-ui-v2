import React from 'react';
import ChatBubble from './ChatBubble';
import OptionsMessage from './OptionsMessage';


const ChatMessages = ({ messages, chatEndRef, onOption }) => (
  <div className="chatbot-messages">
    {messages.map((msg, idx) => (
      msg.options ? (
        <div key={idx}>
          <ChatBubble message={msg.message} isUser={msg.isUser} />
          <OptionsMessage options={msg.options} onSelect={onOption} />
        </div>
      ) : (
        <ChatBubble key={idx} message={msg.message} isUser={msg.isUser} />
      )
    ))}
    <div ref={chatEndRef} />
  </div>
);

export default ChatMessages;
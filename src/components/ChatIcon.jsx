import React from 'react';

const ChatIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#5c4dff"/>
    <path d="M10 13.5C10 12.1193 11.1193 11 12.5 11H19.5C20.8807 11 22 12.1193 22 13.5V18.5C22 19.8807 20.8807 21 19.5 21H13.5L10 22V13.5Z" fill="white"/>
  </svg>
);

export default ChatIcon;

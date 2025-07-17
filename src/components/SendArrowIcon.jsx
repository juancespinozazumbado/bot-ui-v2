import React from 'react';

const SendArrowIcon = ({ size = 22, color = '#5c4dff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21L21 12L3 3V10L17 12L3 14V21Z" fill={color}/>
  </svg>
);

export default SendArrowIcon;
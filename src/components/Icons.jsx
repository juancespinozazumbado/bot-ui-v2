import React from 'react';

export const MinimizeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="9" width="12" height="2" rx="1" fill="#5c4dff"/>
  </svg>
);

export const CloseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="5" x2="15" y2="15" stroke="#5c4dff" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15" y1="5" x2="5" y2="15" stroke="#5c4dff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ClearIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="9" width="12" height="2" rx="1" fill="#ff4d4d"/>
    <rect x="9" y="4" width="2" height="12" rx="1" fill="#ff4d4d"/>
  </svg>
);

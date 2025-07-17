import React from 'react';

const OptionsMessage = ({ options, onSelect }) => (
  <div className="chat-options-message">
    {options.map((opt, idx) => (
      <button
        key={idx}
        className="chat-option-btn"
        onClick={() => onSelect(opt)}
      >
        {opt.label}
      </button>
    ))}
  </div>
);

export default OptionsMessage;

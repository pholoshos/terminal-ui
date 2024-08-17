// src/components/TerminalInput.js
import React from 'react';
import { useState } from 'react';

const TerminalInput = ({ prompt, onSubmit }) => {
  const [input, setInput] = useState('');
  const handleChange = (e) => setInput(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(input);
      setInput('');  // Clear the input after submission
    }
  };

  return (
    <div className="flex items-center">
      <span className="text-terminalText">{prompt}</span>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="bg-transparent text-terminalText ml-2 focus:outline-none"
        autoFocus
      />
    </div>
  );
};

export default TerminalInput;

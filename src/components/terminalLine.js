// src/components/TerminalLine.js
import React from 'react';

const TerminalLine = ({ prompt, children }) => {
  return (
    <div className="flex bg-gray-900">
      <span className="text-terminalText">{prompt}</span>
      <span className="ml-2 text-terminalText">{children}</span>
    </div>
  );
};

export default TerminalLine;

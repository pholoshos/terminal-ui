// src/components/TerminalOutput.js
import React from 'react';

const TerminalOutput = ({ output }) => {
  return (
    <div className="text-terminalText ml-4 bg-gray-900">
      {output}
    </div>
  );
};

export default TerminalOutput;

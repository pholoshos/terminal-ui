// src/components/CommandHistory.js
import React from 'react';

const CommandHistory = ({ history }) => {
  return (
    <div className="flex flex-col">
      {history.map((item, index) => (
        <div key={index} className="mb-2">
          <div className="flex">
            <span className="text-terminalText">{item.prompt}</span>
            <span className="ml-2 text-terminalText">{item.command}</span>
          </div>
          <div className="text-terminalText ml-4">{item.output}</div>
        </div>
      ))}
    </div>
  );
};

export default CommandHistory;

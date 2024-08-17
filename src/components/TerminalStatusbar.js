// src/components/TerminalStatusBar.js
import React from 'react';

const TerminalStatusBar = ({ directory = '~', status = 'Normal Mode' }) => {
  return (
    <div className=" border-t border-terminalText text-terminalText p-2 flex justify-between bg-gray-900">
      <span>{directory}</span>
      <span>{status}</span>
    </div>
  );
};

export default TerminalStatusBar;

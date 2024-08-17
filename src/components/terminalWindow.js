// src/components/TerminalWindow.js
import React from 'react';

const TerminalWindow = ({ children, onClose = () => { }, onHide = () => { }, onExpand = () => { } }) => {

  return (
    <div className="border border-terminalText rounded-md p-4 max-w-4xl mx-auto my-4">
      <div className="bg-terminalBg border-b border-terminalText text-terminalText p-2 rounded-t-md flex justify-between">
        <span>Terminal</span>
        <div>
          <span onClick={onHide} className="mr-2">_</span>
          <span onClick={onExpand} className="mr-2">□</span>
          <span onClick={onClose}>✕</span>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;

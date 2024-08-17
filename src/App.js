// src/App.js
import React, {useState} from 'react';
import TerminalWindow from './components/terminalWindow';
import TerminalLine from './components/terminalLine';
import TerminalPrompt from './components/terminalPrompt';
import TerminalInput from './components/terminalInput';
import TerminalOutput from './components/terminalOutput';
import CommandHistory from './components/commandHistory';
import TerminalStatusBar from './components/TerminalStatusbar';



function App() {
  const [history, setHistory] = useState([
    { prompt: '$', command: 'echo Welcome to the terminal!', output: 'Welcome to the terminal!' }
  ]);

  const handleCommandSubmit = (command) => {
    const newHistory = [...history, { prompt: '$', command, output: `You typed: ${command}` }];
    setHistory(newHistory);
  };

  return (
    <div className="">
      <TerminalWindow>
        <CommandHistory history={history} />
        <TerminalInput prompt="$" onSubmit={handleCommandSubmit} />
        <TerminalOutput output="Type a command and press Enter..." />
        <TerminalStatusBar directory="~/projects/terminal-ui-library" status="Normal Mode" />
      </TerminalWindow>
    </div>
  );
}


export default App;


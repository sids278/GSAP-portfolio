import React, { useState, useRef, useEffect } from 'react';
import TerminalHeader from './TerminalHeader';
import CommandLine from './CommandLine';
import CommandOutput from './CommandOutput';
import { useCommandContext } from '../context/CommandContext';
import { generateId } from '../utils/helpers';

const Terminal: React.FC = () => {
  const { commandHistory, addToHistory } = useCommandContext();
  const [inputValue, setInputValue] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when terminal is clicked
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Auto-scroll to bottom when command history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  // Show welcome message on initial render
  useEffect(() => {
    // Initial welcome message
    addToHistory({
      command: '',
      output: (
        <div className="mb-4">
          <p className="text-green-400 mb-1 typing-effect">Welcome to my Terminal Portfolio!</p>
          <p className="text-gray-300 mb-1">Type <span className="text-yellow-300">help</span> to see available commands.</p>
          <p className="text-gray-300">Type <span className="text-yellow-300">about</span> to learn more about me.</p>
        </div>
      ),
      id: generateId(),
    });
  }, []);

  return (
    <div className="w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
      <TerminalHeader />
      
      <div 
        ref={terminalRef}
        className="terminal-content h-[80vh] max-h-[600px] overflow-y-auto p-4 font-mono text-sm md:text-base bg-[#0d1117]"
        onClick={handleTerminalClick}
      >
        {/* Command history */}
        {commandHistory.map((item) => (
          <div key={item.id} className="mb-4">
            {item.command && (
              <div className="flex">
                <span className="text-green-400 mr-2">visitor@portfolio:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
            )}
            <div className="ml-0 mt-1">{item.output}</div>
          </div>
        ))}
        
        {/* Current command line */}
        <CommandLine 
          inputValue={inputValue} 
          setInputValue={setInputValue}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
};

export default Terminal;
import React, { KeyboardEvent, useRef, useEffect } from 'react';
import { useCommandContext } from '../context/CommandContext';

interface CommandLineProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
}

const CommandLine: React.FC<CommandLineProps> = ({ 
  inputValue, 
  setInputValue,
  inputRef
}) => {
  const { processCommand, commandHistory, historyIndex, setHistoryIndex } = useCommandContext();
  
  // Handle key press events
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim()) {
        processCommand(inputValue);
        setInputValue('');
        setHistoryIndex(-1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        
        // Get command from history, skip items with empty commands
        for (let i = newIndex; i < commandHistory.length; i++) {
          if (commandHistory[commandHistory.length - 1 - i]?.command) {
            setInputValue(commandHistory[commandHistory.length - 1 - i].command);
            setHistoryIndex(i);
            break;
          }
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        if (newIndex === 0) {
          setInputValue('');
        } else {
          setInputValue(commandHistory[commandHistory.length - 1 - newIndex]?.command || '');
        }
      } else {
        setInputValue('');
        setHistoryIndex(-1);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion
      const availableCommands = [
        'help', 'about', 'clear', 'projects', 
        'skills', 'experience', 'education', 
        'contact', 'resume', 'social'
      ];
      
      if (inputValue) {
        const matchingCommands = availableCommands.filter(cmd => 
          cmd.startsWith(inputValue.toLowerCase())
        );
        
        if (matchingCommands.length === 1) {
          setInputValue(matchingCommands[0]);
        } else if (matchingCommands.length > 1) {
          // Show available completions
          processCommand('');
          const output = (
            <div className="text-gray-400">
              <p>Tab completions:</p>
              <div className="pl-4 flex flex-wrap gap-x-4">
                {matchingCommands.map(cmd => (
                  <span key={cmd} className="text-yellow-300">{cmd}</span>
                ))}
              </div>
            </div>
          );
          processCommand('', output);
        }
      }
    }
  };

  // Automatically focus the input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex items-center mt-1">
      <span className="text-green-400 mr-2 whitespace-nowrap">visitor@portfolio:~$</span>
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent text-white outline-none caret-transparent"
          autoFocus
          aria-label="Terminal input"
        />
        {/* Show cursor at the end of input text */}
        <span 
          className="absolute top-0 left-0 text-white"
          style={{ marginLeft: `${inputValue.length}ch` }}
        >
          <span className="cursor"></span>
        </span>
      </div>
    </div>
  );
};

export default CommandLine;
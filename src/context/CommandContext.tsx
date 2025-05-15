import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CommandHistoryItem } from '../types';
import { generateId } from '../utils/helpers';
import { executeCommand } from '../utils/commandProcessor';

interface CommandContextType {
  commandHistory: CommandHistoryItem[];
  historyIndex: number;
  addToHistory: (item: Omit<CommandHistoryItem, 'id'>) => void;
  processCommand: (command: string, customOutput?: React.ReactNode) => void;
  clearHistory: () => void;
  setHistoryIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CommandContext = createContext<CommandContextType | undefined>(undefined);

export const CommandProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [commandHistory, setCommandHistory] = useState<CommandHistoryItem[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const addToHistory = (item: Omit<CommandHistoryItem, 'id'>) => {
    const newItem = { ...item, id: generateId() };
    setCommandHistory(prev => [...prev, newItem]);
  };

  const processCommand = (command: string, customOutput?: React.ReactNode) => {
    if (customOutput) {
      addToHistory({ command, output: customOutput });
      return;
    }
    
    const output = executeCommand(command);
    addToHistory({ command, output });
  };

  const clearHistory = () => {
    setCommandHistory([]);
  };

  return (
    <CommandContext.Provider 
      value={{ 
        commandHistory, 
        historyIndex,
        addToHistory, 
        processCommand, 
        clearHistory,
        setHistoryIndex
      }}
    >
      {children}
    </CommandContext.Provider>
  );
};

export const useCommandContext = () => {
  const context = useContext(CommandContext);
  if (context === undefined) {
    throw new Error('useCommandContext must be used within a CommandProvider');
  }
  return context;
};
import React from 'react';
import { CommandHistoryItem } from '../types';

interface CommandOutputProps {
  history: CommandHistoryItem[];
}

const CommandOutput: React.FC<CommandOutputProps> = ({ history }) => {
  return (
    <div className="mb-4">
      {history.map((item) => (
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
    </div>
  );
};

export default CommandOutput;
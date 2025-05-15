import React from 'react';
import { Terminal } from 'lucide-react';

const TerminalHeader: React.FC = () => {
  return (
    <div className="bg-gray-800 p-2 flex items-center justify-between border-b border-gray-700">
      <div className="flex items-center">
        <Terminal className="w-5 h-5 text-green-400 mr-2" />
        <span className="text-white font-medium">portfolio.sh</span>
      </div>
      
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
};

export default TerminalHeader;
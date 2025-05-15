import React, { useEffect } from 'react';
import Terminal from './components/Terminal';
import { CommandProvider } from './context/CommandContext';
import './App.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Terminal Portfolio";
    
    // Update favicon to a terminal icon
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "/terminal-icon.svg";
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <CommandProvider>
        <Terminal />
      </CommandProvider>
    </div>
  );
}

export default App;
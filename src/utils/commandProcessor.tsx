import React from 'react';
import { 
  aboutCommand, 
  helpCommand, 
  projectsCommand,
  skillsCommand,
  experienceCommand,
  educationCommand,
  contactCommand,
  resumeCommand,
  socialCommand
} from './commands';

export const executeCommand = (commandStr: string): React.ReactNode => {
  // Trim leading/trailing whitespace and handle empty commands
  const trimmedCommand = commandStr.trim();
  if (!trimmedCommand) {
    return null;
  }

  // Split the command into command name and arguments
  const [command, ...args] = trimmedCommand.split(' ');
  
  // Convert command to lowercase for case-insensitivity
  const lowerCommand = command.toLowerCase();

  // Process commands
  switch (lowerCommand) {
    case 'help':
      return helpCommand.execute();
    case 'about':
      return aboutCommand.execute();
    case 'projects':
      return projectsCommand.execute(args);
    case 'skills':
      return skillsCommand.execute();
    case 'experience':
      return experienceCommand.execute();
    case 'education':
      return educationCommand.execute();
    case 'contact':
      return contactCommand.execute();
    case 'resume':
      return resumeCommand.execute();
    case 'social':
      return socialCommand.execute();
    case 'clear':
      // Clear is handled separately in the CommandContext
      window.location.reload();
      return <p className="text-gray-400">Clearing terminal...</p>;
    default:
      return (
        <p className="text-red-400">
          Command not found: {command}. Type <span className="text-yellow-300">help</span> to see available commands.
        </p>
      );
  }
};
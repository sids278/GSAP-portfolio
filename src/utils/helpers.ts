/**
 * Generates a unique ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};

/**
 * Simulates a typing effect by gradually revealing text
 * @param text Text to type
 * @param speed Speed in milliseconds per character
 */
export const typeText = (text: string, speed: number = 50): Promise<string> => {
  return new Promise((resolve) => {
    let i = 0;
    const result = '';
    
    const typing = setInterval(() => {
      if (i >= text.length) {
        clearInterval(typing);
        resolve(text);
        return;
      }
      
      i++;
    }, speed);
  });
};
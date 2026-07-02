// frontend/src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  isCyberpunk: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isCyberpunk, setIsCyberpunk] = useState(true);

  const toggleTheme = () => {
    setIsCyberpunk(!isCyberpunk);
    document.body.classList.toggle('cyber-theme', !isCyberpunk);
  };

  return (
    <ThemeContext.Provider value={{ isCyberpunk, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
import React, { createContext, useState, useEffect } from 'react';

export const BioContext = createContext();

export default function ThemeContextProvider({ children }) {
  // Load the theme from localStorage, default to 'true' (light mode)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true; // true = light, false = dark
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <BioContext.Provider value={[theme, setTheme]}>
      {children}
    </BioContext.Provider>
  );
}

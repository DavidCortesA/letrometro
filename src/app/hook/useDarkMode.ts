'use client'
import { useEffect, useState } from "react";

// Dark mode function
export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  //Read local storage
  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode');
    if(storedPreference === 'true'){
      setDarkMode(true);
      document.body.classList.add('dark');
    } else {
      setDarkMode(false);
      document.body.classList.remove('dark');
    }
  }, []);

  // Save if preference change
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if(darkMode){
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  
  return { darkMode, toggleDarkMode };
}
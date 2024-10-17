'use client';

import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to update header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle theme toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-scrolled-dark'
            : 'bg-scrolled'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Jaman</div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#profile" className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500">Profile</a>
          <a href="#about" className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500">About Me</a>
          <a href="#projects" className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500">Contact</a>
          <button onClick={toggleTheme} className="text-gray-800 dark:text-gray-200 focus:outline-none">
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1M12 20v1M4.22 4.22l.707.707M17.071 17.071l.707.707M1 12h1M22 12h1M4.22 19.78l.707-.707M17.071 6.929l.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-gray-800 dark:text-gray-200 focus:outline-none">
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1M12 20v1M4.22 4.22l.707.707M17.071 17.071l.707.707M1 12h1M22 12h1M4.22 19.78l.707-.707M17.071 6.929l.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <a href="#profile" className="block py-2 px-6 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Profile</a>
          <a href="#about" className="block py-2 px-6 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">About Me</a>
          <a href="#projects" className="block py-2 px-6 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block py-2 px-6 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;

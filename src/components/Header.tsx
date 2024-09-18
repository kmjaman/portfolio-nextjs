import React from 'react'

const Header = () => {
  return (
    <header id="header" className="fixed top-0 left-0 w-full z-50 header-transition bg-transparent">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="text-2xl font-bold">JAMAN</div>
            <div className="hidden md:flex items-center space-x-6">
                <a href="#profile" className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500">Profile</a>
                <a href="#about" className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500">About Me</a>
                <a href="#projects" className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500">Projects</a>
                <a href="#contact" className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500">Contact</a>
                <button id="theme-toggle" className="text-gray-800 dark:text-gray-200 focus:outline-none">
                    <svg id="theme-icon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path id="sun-icon" d="M12 3v1M12 20v1M4.22 4.22l.707.707M17.071 17.071l.707.707M1 12h1M22 12h1M4.22 19.78l.707-.707M17.071 6.929l.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        <path id="moon-icon" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" className="hidden"></path>
                    </svg>
                </button>
            </div>
            <div className="md:hidden flex items-center space-x-4">
                <button id="theme-toggle-mobile" className="text-gray-800 dark:text-gray-200 focus:outline-none">
                    <svg id="theme-icon-mobile" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path id="sun-icon-mobile" d="M12 3v1M12 20v1M4.22 4.22l.707.707M17.071 17.071l.707.707M1 12h1M22 12h1M4.22 19.78l.707-.707M17.071 6.929l.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        <path id="moon-icon-mobile" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" className="hidden"></path>
                    </svg>
                </button>
                <button id="menu-toggle" className="text-gray-800 dark:text-gray-200 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div id="mobile-menu" className="md:hidden bg-white dark:bg-gray-800 hidden">
            <a href="#profile" className="block py-2 px-6 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Profile</a>
            <a href="#about" className="block py-2 px-6 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">About Me</a>
            <a href="#projects" className="block py-2 px-6 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a>
            <a href="#contact" className="block py-2 px-6 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
        </div>
    </header>
  )
}

export default Header
"use client";
import React from 'react'
import { useEffect, useState } from 'react';

const ScrollUp = () => {

  const [showButton, setShowButton] = useState(false);

  // Function to handle scroll and toggle visibility of the button
  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 300) {
              setShowButton(true);
          } else {
              setShowButton(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  // Function to scroll back to top smoothly
  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  };


  return (
    <button id="scrollToTopBtn" onClick={scrollToTop} className={`fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-opacity duration-300 ${ showButton ? 'opacity-100' : 'opacity-0'}`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
    </button>
  )
}

export default ScrollUp
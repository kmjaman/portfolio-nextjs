import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold">Kamrujjaman Md</h3>
                <p className="text-gray-400">Python Developer</p>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M22.54 6.42c-.83.37-1.72.62-2.66.73a4.62 4.62 0 002.02-2.55 9.28 9.28 0 01-2.93 1.12 4.6 4.6 0 00-7.88 4.2A13.07 13.07 0 013.1 5.66a4.6 4.6 0 001.43 6.13 4.55 4.55 0 01-2.08-.57v.06a4.6 4.6 0 003.69 4.52 4.66 4.66 0 01-2.07.08 4.6 4.6 0 004.3 3.2 9.25 9.25 0 01-5.73 1.97 13.02 13.02 0 007.07 2.07c8.49 0 13.14-7.04 13.14-13.14 0-.2 0-.4-.02-.6a9.4 9.4 0 002.3-2.4"></path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/kamrujjaman-md-6589a244/" className="text-gray-400 hover:text-white transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-2v-10h2v10zm-1-11.27c-.73 0-1.33-.6-1.33-1.33s.6-1.33 1.33-1.33 1.33.6 1.33 1.33-.6 1.33-1.33 1.33zm11.27 11.27h-2v-5c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v5h-2v-10h2v1.47c.62-.97 2-1.67 3.47-1.67 2.35 0 4.27 1.92 4.27 4.27v5.93z"/>
                    </svg>
                </a>
                <a href="https://github.com/jaman-dci" className="text-gray-400 hover:text-white transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2.04c-5.53 0-10 4.48-10 10 0 4.41 3.58 8.05 8 8.05.58 0 .84-.27.84-.6 0-.29-.01-1.04-.01-2.04-3.34.72-4.04-1.61-4.04-1.61-.52-1.32-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.14.08 1.74 1.18 1.74 1.18 1.03 1.75 2.7 1.24 3.36.95.1-.75.41-1.24.74-1.53-2.66-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.41 1.24-3.26-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.24.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.56 3.3-1.24 3.3-1.24.66 1.64.24 2.86.12 3.16.78.85 1.24 1.94 1.24 3.26 0 4.62-2.81 5.66-5.49 5.95.43.38.82 1.1.82 2.22 0 1.6-.01 2.88-.01 3.28 0 .33.26.6.84.6 4.42 0 8-3.64 8-8.05 0-5.52-4.48-10-10-10z"/>
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-2 15h-3v-6h3v6zm-1.5-7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm8.5 7h-3v-3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3.5h-3v-6h3v1.06c.58-.6 1.41-.96 2.31-.96 1.83 0 3.31 1.48 3.31 3.31v2.59z"/>
                    </svg>
                </a>
            </div>
            <div className="text-center md:text-left">
                <h4 className="text-lg font-bold mb-2">Get in Touch</h4>
                <p className="text-gray-400">Email: kmjaman@outlook.com</p>
                <p className="text-gray-400">Phone: +123 456 7890</p>
            </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400">
            &copy; 2024 Kamrujjaman Md. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer
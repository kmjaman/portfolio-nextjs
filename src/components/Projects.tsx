import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="bg-white dark:bg-gray-800 py-12">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Project 1 --> */}
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                    <a href="https://github.com/kmjaman/nextjs-blog">
                        <img src="images/project-01.png" alt="Project 1" className="rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Blog Site</h3>
                        <p className="text-gray-700 dark:text-gray-400">A beautifully designed blog website built with Django backend and Nextjs as frontend allowing users to read and create blog posts on the go.</p>
                    </a>
                </div>
                {/* <!-- Project 2 --> */}
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                    <a href="https://esagor.com">
                        <img src="images/project-02.png" alt="Project 2" className="rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">E-commerce Shop</h3>
                        <p className="text-gray-700 dark:text-gray-400">This is an e-commerce website built with Python Django and Bootstrap where people can buy and sell all kinds of goods and services.</p>
                    </a>
                </div>
                {/* <!-- Project 3 --> */}
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                    <a href="https://pyxone.pythonanywhere.com">
                        <img src="images/project-03.png" alt="Project 3" className="rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Shorten Url</h3>
                        <p className="text-gray-700 dark:text-gray-400">The aim of this project is to shorten any long website urls allowing users to easily bookmark and share the link with anyone.</p>
                    </a>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Projects
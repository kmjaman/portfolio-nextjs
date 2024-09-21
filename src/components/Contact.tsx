import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-12">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">Feel free to reach out for collaborations or just a friendly chat.</p>
            <form action="#" method="POST" className="max-w-lg mx-auto">
                <div className="mb-4">
                    <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <textarea name="message" placeholder="Your Message" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
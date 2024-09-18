import React from 'react'

const Profile = () => {
  return (
    <section id="profile" className="bg-white dark:bg-gray-800 py-12 mt-20">
        <div className="container mx-auto flex flex-col items-center">
            <img src="/images/photo.png" alt="Profile Picture" className="w-32 h-32 rounded-full shadow-lg" />
            <h1 className="mt-4 text-4xl font-bold">Kamrujjaman Md</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Python Developer</p>
        </div>
    </section>
  )
}

export default Profile
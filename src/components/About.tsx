import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg text-gray-700 dark:text-gray-400">I am a passionate Python developer with experience in building web applications, API development,  data analysis, cloud services, and automation. I enjoy solving complex problems and learning new technologies. <br/>
                    With six years of experience as a Python developer, I've honed my skills and developed a deep understanding of the Python programming language and its vast ecosystem. My expertise spans web development using Django and Flask, building dynamic and secure web applications, and designing RESTful APIs. My database management skills include proficiency in SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases, and I’m experienced with SQLAlchemy for seamless database interaction. I have hands-on experience with cloud platforms like AWS and GCP, containerization with Docker, and orchestration using Kubernetes, ensuring scalable and portable application deployment. My passion for Python programming drives me to stay active in the Python community, participate in meetups, and keep up with the latest industry trends and advancements.
                </p>
            </div>
            <div className="md:w-1/2">
                <img src="images/about-me.jpg" alt="About Me" className="rounded-lg shadow-lg" />
            </div>
        </div>
    </section>
  )
}

export default About
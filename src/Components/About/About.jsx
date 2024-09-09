import React from 'react'

const About = () => {
  return (
    <>
      <div>
        <h1 className=' text-3xl font-bold  mt-5 mb-5 flex items-center justify-center text-red-500'>About Me</h1>
        <img className='max-w-96 max-h-96 m-auto mt-10' src="https://cdn.pixabay.com/photo/2023/07/02/19/01/ai-generated-8102806_1280.jpg" alt="" />
      </div>
      <div className='text-white font-bold mt-14'>
        <h1 className='text-4xl flex items-center justify-center text-red-500'>I,m a passionate frontend developer</h1>
        <p className='mt-4 text-2xl m-20'>As a passionate Frontend Developer, I specialize in crafting visually appealing, responsive, and user-friendly web interfaces. With expertise in HTML, CSS, JavaScript, and frameworks like React, I focus on delivering seamless user experiences across all devices. I thrive on transforming design concepts into interactive and efficient applications, while ensuring high performance and code quality. Keeping up with the latest web technologies, I am always eager to learn and adopt new tools to enhance my development process. Collaboration and problem-solving are my strengths, and I enjoy working closely with cross-functional teams to bring creative digital solutions to life.</p>
      </div>


      <div className='text-white flex-col'>
        <p className='text-3xl font-bold text-red-600  flex items-center justify-center'>SKILLS</p>

        <div className='flex items-center justify-center font-bold hover:text-red-500 cursor-pointer'><p>HTML</p></div>
        <div className='flex items-center justify-center font-bold hover:text-red-500 cursor-pointer'><p>CSS</p></div>
        <div className='flex items-center justify-center font-bold hover:text-red-500 cursor-pointer'><p>JavaScript</p>  </div>
        <div className='flex items-center justify-center font-bold hover:text-red-500 cursor-pointer'><p>ReactJS</p></div>
      </div>
    </>
  )
}

export default About

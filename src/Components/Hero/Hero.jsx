import React from 'react'

const Hero = () => {
  return (
    <>
        <div>
            <img className='max-w-72 max-h-64 rounded-full m-auto mt-24' src="https://cdn.pixabay.com/photo/2024/02/11/08/17/ai-generated-8566108_1280.png" alt="girl" />
        </div>
        <div>
            <div className=' mt-12 font-bold text-red-600 text-4xl flex items-center justify-center'>
                <h1 className=' font-extrabold text-white text-5xl'>I'm <span className='text-red-600 '>ANANYA RAJ,</span> Frontend Developer.</h1>
            </div>
            <div className='flex items-center justify-center'>
                <p className='text-white font-medium text-2xl mt-7'>I use to create websites that are eye <br /> catching and user friendly.</p>
            </div>
      </div>
      <div className='flex items-center justify-center ' >
        <button className='p-3 mt-8 rounded-lg text-white bg-red-600 font-bold hover:bg-red-400 cursor-pointer hover:text-black'>Resume</button>
      </div>
    </>
  )
}

export default Hero

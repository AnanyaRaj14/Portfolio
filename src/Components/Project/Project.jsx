import React from 'react'

const Project = () => {
  return (
    <>
      <div className='text-red-500 mt-14 text-3xl font-bold underline flex items-center justify-center'>Projects</div>
      
      
      <div className='text-white mt-10'>


        <div className='flex items-center justify-around mt-10 text-center font-bold'>
          <div className='h-48 w-96 bg-red-600 '>
            <p className='mt-5 text-black underline'>Todo</p>
            <p className='mt-5'>Stay organized and on top of your tasks with this efficient and easy-to-use To-Do project, designed to boost productivity and help you accomplish your goals</p>
            <a className='text-blue-700 underline' 
            href="https://github.com/AnanyaRaj14/react-todo">Source Code</a>
          </div>
          <div className='h-48 w-96 bg-red-600 '>
            <p className='mt-5 text-black underline'>Password Generator</p>
            <p className='mt-5'>Generate strong, secure passwords effortlessly with this password generator, ensuring your accounts stay protected with just a click!</p>
            <a className='text-blue-700 underline' 
            href="https://github.com/AnanyaRaj14/react-password">Source Code</a>
          </div>
          <div className='h-48 w-96 bg-red-600 '>
            <p className='mt-5 text-black underline'>Theme Switcher</p>
            <p className='mt-5'>Easily toggle between light and dark modes to suit your style and comfort. Switch themes instantly for a personalized browsing experience—day or night.</p>
            <a className='text-blue-700 underline' 
            href="https://github.com/AnanyaRaj14/Theme-Switcher">Source Code</a>
          </div>
        </div>


        <div className='flex items-center justify-around mt-10 text-center font-bold'>
          <div className='h-48 w-96 bg-red-600'>
            <p className='mt-5 text-black underline'>Random Quote Generator</p>
            <p className='mt-5'>Get inspired anytime with a random quote generator—fuel your day with wisdom and motivation!</p>
            <a className='text-blue-700 underline' 
            href="https://github.com/AnanyaRaj14/Random_quotes_generator">Source Code</a>
          </div>
          <div className='h-48 w-96 bg-red-600'>
            <p className='mt-5 text-black underline'>Stopwatch</p>
            <p className='mt-5'>Track your time with precision and ease using this simple and reliable stopwatch—perfect for any task</p>
            <a className='text-blue-700 underline' 
            href="https://github.com/AnanyaRaj14/Stopwatch">Source Code</a>
          </div>
          <div className='h-48 w-96 bg-red-600'>
            <p className='mt-5 text-black underline'>Image Slider</p>
            <p className='Image Slider mt-5'>Showcase your gallery with a seamless image slider—perfect for any presentation!</p>
            <a className='text-blue-700 underline ' 
            href="https://github.com/AnanyaRaj14/image_slider">Source Code</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project

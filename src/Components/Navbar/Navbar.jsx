import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between m-3'>
        {/* <img className='max-h-20 max-w-90 ml-10' src="https://clipart-library.com/2023/360_F_220487271_ywVxN2Jff7qIsIl4CDbPyEux8xI0tWnh.jpg" alt="Portfolio logo" /> */}
        <div className='text-red-600 text-7xl ml-16 font-extrabold font-serif'>Portfolio</div>
        <ul className='flex items-center text-lg mr-40 text-white'>
            <li className='mr-11 p-8 font-bold hover:text-red-600 cursor-pointer '>Home</li>
            <li className='mr-11 p-8 font-bold hover:text-red-600 cursor-pointer'>About</li>
            <li className='mr-11 p-8 font-bold hover:text-red-600 cursor-pointer'>Projects</li>
            <li className='mr-11 p-8 font-bold hover:text-red-600 cursor-pointer'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar

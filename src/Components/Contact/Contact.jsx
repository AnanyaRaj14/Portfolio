import React from 'react'
import { MdPermContactCalendar } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
const Contact = () => {
  return (
    <>
      <div>
        <div className='text-white'>
        <h1 className='text-3xl font-bold  mt-7 mb-5 flex items-center justify-center text-red-500 underline'>Contact Me</h1>
        </div>
        <div className='text-white '>
        <p  className='text-xl flex items-center justify-center'><MdPermContactCalendar /><a className='ml-2'
        href="ananyam748@gmail.com">ananyam748@gmail.com</a></p>
        <div className='flex items-center justify-around text-4xl mt-5 cursor-pointer '>
          <p className=' hover:text-red-500'><FaLinkedin /></p>
          <p className=' hover:text-red-500'><FaGithub /><a href="https://www.linkedin.com/in/ananya-raj-796409297"></a></p>
          <p className=' hover:text-red-500'><FaInstagram /><a href="https://www.instagram.com/ananyam2552"></a></p>
          <p className=' hover:text-red-500'><FaXTwitter /><a href="https://x.com/AnanyaRaj143/"></a></p>
        </div>
        <form className='text-white flex flex-col items-center mt-8'>
          <label className='text-lg font-bold' htmlFor="">Your Name</label>
          <input className=' text-black border-none w-[700px] h-[78] p-2 rounded-md' type="text" placeholder='Enter Your Name' name='name' />

          <label className='text-lg font-bold' htmlFor="">Your Email</label>
          <input className='text-black border-none w-[700px] h-[78] p-2 rounded-md' type="email" placeholder='Enter Your Email' name='email' />

          <label className='text-lg font-bold' htmlFor="">Write Your Message Here</label>
          <textarea className='text-black border-none w-[700px] h-[78] p-2 rounded-md ' rows={5} placeholder='Enter Your Message'></textarea>

          <button className='mt-9 p-3 rounded-lg bg-red-500' type='submit'>Submit</button>
          <div className='text-red-500'>
            <p>Copyright @AnanyaRaj</p>
            <p className=' mt-1 flex items-center justify-center'><IoHeart /></p>
          </div>
        </form>
        </div> 
      </div>
    </>
  )
}

export default Contact

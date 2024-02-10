import React from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { IoLogoTwitter } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
export default function Closing () { 
  const navigate = useNavigate()
  return (
    <div>
      <div className='bg-[#343434] h-auto cursor-default w-full py-[3%] px-[10%] text-white flex gap-10 justify-between'>
        <div className='w-[31%] p-1'>
          <p className='text-[2.2rem] m-1 font-[700]'>FitnessDecoder.</p>
          <p className='text-[13.5px] m-1'>
            Embark on a personalized journey to well-being with our Life Coach
            service. Our experts are here to guide you every step of the way,
            tailoring fitness plans and mental health support to your unique
            needs. Dive into a range of offerings designed to promote holistic
            wellness:
          </p>
          <div className='flex gap-5 my-4'>
            <button onClick={() => navigate('/')}>
              <FaFacebook size={19} />
            </button>
            <button onClick={() => navigate('/')}>
              <FaInstagram size={19} />
            </button>
            <button onClick={() => navigate('/')}>
              <IoLogoTwitter size={19} />
            </button>
          </div>
        </div>
        <div className='ml-[4%] w-[60%] flex gap-32 px-8 justify-end'>
          <ul className=''>
            <li className='font-[500] text-[16.6px] mb-2 cursor-default '>
              Quick Links
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Home</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Blogs</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Contact Us</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>About</a>
            </li>
          </ul>
          <ul>
            <li className='font-[500] text-[16.6px] mb-2 cursor-default'>
              Services
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Term Of Service</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>FAQ's</a>
            </li>
          </ul>
          <ul>
            <li className='font-[500] text-[16.6px] mb-2 cursor-default'>
              Account
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Log in</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>24/7 Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

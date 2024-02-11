import React from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { IoLogoTwitter } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Closing () {
  const navigate = useNavigate()
  return (
    <div className=''>
      <div className='bg-[#343434] h-auto cursor-default w-[100%] py-[3%] px-[10%] text-white flex gap-10 justify-between max-[960px]:px-[5%] max-[960px]:gap-4 max-[740px]:flex-col max-[740px]:justify-center max-[740px]:items-center'>
        <div className='w-[31%] p-1 max-[740px]:w-[80%] max-[420px]:w-[90%]'>
          <p className='text-[2.2rem] m-1 font-[700] max-[740px]:text-[1.9rem] max-[420px]:text-[1.5rem] max-[310px]:text-[1.23rem]'>
            FitnessDecoder.
          </p>
          <p className='text-[13.5px] m-1 max-[740px]:text-[12px] max-[420px]:text-[10px] max-[310px]:text-[8.23px]'>
            Embark on a personalized journey to well-being with our Life Coach
            service. Our experts are here to guide you every step of the way,
            tailoring fitness plans and mental health support to your unique
            needs. Dive into a range of offerings designed to promote holistic
            wellness:
          </p>
          <div className='flex gap-5 my-4'>
            <button onClick={() => navigate('/')}>
              <FaFacebook size={18} />
            </button>
            <button onClick={() => navigate('/')}>
              <FaInstagram size={18} />
            </button>
            <button onClick={() => navigate('/')}>
              <IoLogoTwitter size={18} />
            </button>
          </div>
        </div>
        <div className='ml-[4%] w-[60%] flex gap-32 py-1 px-8 justify-end max-[960px]:gap-16 max-[740px]:w-[80%] max-[420px]:w-[90%] max-[740px]:justify-start max-[740px]:ml-[1%] max-[740px]:px-[5px] max-[310px]:gap-[2rem]'>
          <ul className=''>
            <li className='font-[500] text-[16.7px] mb-2 cursor-default max-[740px]:text-[14.7px] max-[420px]:text-[11.7px] max-[420px]:font-[600] max-[310px]:text-[9.2px]'>
              Quick Links
            </li>
            <li className='text-[13.5px] mb-1 max-[740px]:text-[10px] max-[310px]:text-[8.2px]'>
              <Link to='/'>Home</Link>
            </li>
            <li className='text-[13.5px] mb-1 max-[740px]:text-[10px] max-[310px]:text-[8.2px]'>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li className='text-[13.5px] mb-1 max-[740px]:text-[10px] max-[310px]:text-[8.2px]'>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li className='text-[13.5px] mb-1 max-[740px]:text-[10px] max-[310px]:text-[8.2px]'>
              <Link to='/about'>About</Link>
            </li>
          </ul>
          <ul>
            <li className='font-[500] text-[16.7px] mb-2 cursor-default max-[740px]:text-[14.7px] max-[420px]:text-[11.7px] max-[420px]:font-[600] max-[310px]:text-[9.2px]'>
              Services
            </li>
            <li className='text-[13.5px] mb-1 max-[740px]:text-[10px] max-[310px]:text-[8.2px]'>
              <Link to='/'>Term Of Service</Link>
            </li>
            <li className='text-[13.5px] mb-1 max-[740px]:text-[10px] max-[310px]:text-[8.2px]'>
              <Link to='/'>FAQ's</Link>
            </li>
          </ul>
          <ul>
            <li className='font-[500] text-[16.7px] mb-2 cursor-default max-[740px]:text-[14.7px] max-[420px]:text-[11.7px] max-[420px]:font-[600] max-[310px]:text-[9.2px]'>
              Account
            </li>
            {/* <li className='text-[13.5px] mb-1 max-[740px]:text-[12.7px]'>
              <Link to= '/'>Log in</Link>
            </li> */}
            <li className='text-[13.5px] mb-1 max-[740px]:text-[10px] max-[310px]:text-[8.2px]'>
              <Link to='/contact'>24/7 Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

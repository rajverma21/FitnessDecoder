import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../assets/images/LoGo2.png'

export default function Navbar () {
  const navigate = useNavigate()
  return (
    <div className='flex flex-row justify-around items-center py-1 bg-[#404040fc] fixed top-0 left-0 font-[700] right-0 z-50 cursor-default'>
      <div onClick={() => navigate('/')}>
        <img src={logo} className="h-[6rem] " alt='LoGo' />
      </div>
      <div>
        <ul className='flex flex-row text-[1.4rem] text-[rgb(186,185,185)] gap-16'>
          <li className='transition hover-underline-animation ease-in-out font-medium'>
            <Link to='/'>Home</Link>
          </li>
          <li className='transition hover-underline-animation ease-in-out font-medium'>
            <Link to='/about'>About</Link>
          </li>
          <li className='transition hover-underline-animation ease-in-out font-medium'>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li className='transition hover-underline-animation ease-in-out font-medium'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          
        </ul>
      </div>
      <div>
        <button
          className='p-4 login-button text-[rgb(176,174,174)]'
          onClick={() => navigate('/login')}
        >
          <span className='text-[1.35rem] font-[00]'>LOGIN</span>
        </button>
      </div>
    </div>
  )
}

import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/Config'
import logo from '../assets/images/LoGo2.png'
import userLogo from '../icons/user.png'
import edit from '../icons/edit.png'
import settings from '../icons/settings.png'
import help from '../icons/help.png'
import logout from '../icons/logout.png'

export default function Navbar () {
  const [UserName, setUserName] = useState('LOGIN')
  const [toggle, setToggle] = useState(false)

  const menuRef = useRef()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUserName(user.displayName)
      } else {
        setUserName('LOGIN')
      }
    })
  }, [])

  const navigate = useNavigate()
  const auth = getAuth()
  const user = auth.currentUser
  const whereToNavigate = () => {
    if (user) {
      setToggle(!toggle)
    } else {
      navigate('/login')
    }
  }

  return (
    <div className='flex flex-row justify-around items-center py-2 bg-gradient-to-b from-gray-700 to-gray-900 fixed top-0 left-0 font-[700] right-0 z-40 cursor-default'>
      <button onClick={() => navigate('/')}>
        <img src={logo} className='h-[6rem] ' alt='LoGo' />
      </button>
      <div>
        <ul className='flex flex-row text-[1.4rem] text-[rgb(186,185,185)] gap-16'>
          <li className='transition duration-100 hover-underline-animation ease-in-out font-medium'>
            <Link to='/'>Home</Link>
          </li>
          <li className='transition duration-100 hover-underline-animation ease-in-out font-medium'>
            <Link to='/about'>About</Link>
          </li>
          <li className='transition duration-100 hover-underline-animation ease-in-out font-medium'>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li className='transition duration-100 hover-underline-animation ease-in-out font-medium'>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>

      <div>
        {UserName === 'LOGIN' ? (
          <button
            className='p-4 login-button text-[rgb(176,174,174)] relative'
            onClick={whereToNavigate}
          >
            <span className='text-[1.35rem]'>{UserName}</span>
          </button>
        ) : (
          <button
            className='p-4 login-button text-[rgb(176,174,174)] relative '
            onClick={whereToNavigate}
          >
            <span className='text-[1.35rem]'>{UserName}</span>
          </button>
        )}
        <div className="flex justify-center">
          <div className={`dropdown-menu ${toggle ? 'active' : 'inactive'}`}>
            <button className='flex justify-start items-center gap-[2rem] px-[1rem] mx-[1rem] py-[1rem] border-b-2 border-[#9d9696] hovering-effect'>
              <img src={userLogo} className='h-[3rem] w-[3rem]' alt='' />
              <p className='text-white font-[400] text-[1.2rem]'>My Profile</p>
            </button>
            <button className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] py-[1rem] border-b-2 border-[#9d9696] hovering-effect'>
              <img src={edit} className='h-[3rem] w-[3rem]' alt='' />
              <p className='text-white font-[400] text-[1.2rem]'>
                Edit Profile
              </p>
            </button>
            <button className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] py-[1rem] border-b-2 border-[#9d9696] hovering-effect'>
              <img src={settings} className='h-[3rem] w-[3rem]' alt='' />
              <p className='text-white font-[400] text-[1.2rem]'>Settings</p>
            </button>
            <button className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] py-[1rem] border-b-2 border-[#9d9696] hovering-effect'>
              <img src={help} className='h-[3rem] w-[3rem]' alt='' />
              <p className='text-white font-[400] text-[1.2rem]'>Help</p>
            </button>
            <button className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] py-[1rem] hovering-effect'>
              <img src={logout} className='h-[3rem] w-[3rem]' alt='' />
              <p className='text-white font-[400] text-[1.2rem]'>Logout</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

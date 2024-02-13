import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/Config'
import { signOut } from 'firebase/auth'
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
  const helpNavigate = () => {
    navigate('/contact')
  }

  const UserSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful')
      })
      .catch(error => {
        console.log('Sign-out unsuccessfuly')
      })
    setToggle(!toggle)
  }

  return (
    <div className='flex flex-row w-[100%] h-[12vh] justify-around items-center bg-gradient-to-b from-gray-700 to-gray-900 sticky top-0 left-0 font-[700] right-0 z-40 cursor-default max-[693px]:h-auto max-[693px]:justify-center max-[693px]:py-[2.2rem] max-[693px]:gap-[1rem] max-[693px]:flex-col max-[1440px]:text-[2rem]'>
      <button onClick={() => navigate('/')}>
        <img
          src={logo}
          className='h-[60px] max-[960px]:h-[50px] max-[693px]:h-[40px]'
          alt='LoGo'
        />
      </button>
      <div>
        <ul className='flex items-center justify-center flex-row text-[1.47rem] text-[rgb(203,200,200)] gap-[7rem] max-[960px]:gap-[5rem] max-[693px]:text-[1.2rem] max-[693px]:gap-[4rem] max-[510px]:text-[1.2rem] max-[510px]:gap-[1.8rem] max-[371px]:gap-[1.2rem] max-[371px]:text-[1rem]'>
          <li className='transition duration-100 hover-underline-animation ease-in-out font-medium flex justify-center items-center'>
            <Link to='/'>Home</Link>
          </li>
          <li className='transition duration-100 hover-underline-animation ease-in-out font-medium'>
            <Link to='/about'>About</Link>
          </li>
          <li className='transition duration-100 hover-underline-animation ease-in-out font-medium'>
            <Link to='/services'>Services</Link>
          </li>
          <li className='transition duration-100 hover-underline-animation ease-in-out font-medium'>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li className='transition duration-100 hover-underline-animation ease-in-out font-medium'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <div className='hidden max-[693px]:block'>
            {UserName === 'LOGIN' ? (
              <button
                className='p-4 login-button text-[rgb(176,174,174)] relative flex justify-center items-center max-[960px]:px-[1.6rem] max-[960px]:py-[0.8rem] max-[510px]:px-[1rem] max-[510px]:py-[0.5rem]'
                onClick={whereToNavigate}
              >
                <span className='text-[1.35rem] max-[510px]:text-[0.9rem] '>
                  {UserName}
                </span>
              </button>
            ) : (
              <div className='flex h-[3.3rem] gap-[1rem]'>
                <img src={userLogo} className='' alt='userLogo' />
                <button
                  className='p-4 login-button text-[rgb(176,174,174)] relative flex justify-center items-center max-[960px]:px-[1.6rem] max-[960px]:py-[0.8rem] max-[510px]:px-[1rem] max-[510px]:py-[0.5rem]'
                  onClick={whereToNavigate}
                >
                  <span className='text-[1.35rem] max-[510px]:text-[0.9rem] '>
                    {UserName}
                  </span>
                </button>
              </div>
            )}
            <div className='flex justify-center'>
              <div
                className={`dropdown-menu ${toggle ? 'active' : 'inactive'}`}
              >
                <button className='flex justify-start items-center gap-[2rem] px-[1rem] mx-[1rem] py-[1rem] border-b-2 border-[#9d9696] max-[693px]:py-[0.6rem]'>
                  <img
                    src={userLogo}
                    className='h-[3rem] w-[3rem] max-[693px]:h-[2rem] max-[693px]:w-[2rem]'
                    alt=''
                  />
                  <p className='text-white font-[400] text-[1.2rem] max-[693px]:text-[1.1rem]'>
                    My Profile
                  </p>
                </button>
                <button className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] py-[1rem] border-b-2 border-[#9d9696] max-[693px]:py-[0.6rem]'>
                  <img
                    src={edit}
                    className='h-[3rem] w-[3rem] max-[693px]:h-[2rem] max-[693px]:w-[2rem]'
                    alt=''
                  />
                  <p className='text-white font-[400] text-[1.2rem] max-[693px]:text-[1.1rem]'>
                    Edit Profile
                  </p>
                </button>

                {/* <button className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] py-[1rem] border-b-2 border-[#9d9696] max-[693px]:py-[0.6rem]'>
                  <img
                    src={settings}
                    className='h-[3rem] w-[3rem] max-[693px]:h-[2rem] max-[693px]:w-[2rem]'
                    alt=''
                  />
                  <p className='text-white font-[400] text-[1.2rem] max-[693px]:text-[1.1rem]'>
                    Settings
                  </p>
                </button> */}

                <button
                  className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] py-[1rem] border-b-2 border-[#9d9696] max-[693px]:py-[0.6rem]'
                  onClick={helpNavigate}
                >
                  <img
                    src={help}
                    className='h-[3rem] w-[3rem] max-[693px]:h-[2rem] max-[693px]:w-[2rem]'
                    alt=''
                  />
                  <p className='text-white font-[400] text-[1.2rem] max-[693px]:text-[1.1rem]'>
                    Help
                  </p>
                </button>
                <button
                  className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] pt-[0.5rem] pb-[0.4rem]'
                  onClick={UserSignOut}
                >
                  <img
                    src={logout}
                    className='h-[3rem] w-[3rem] max-[693px]:h-[2rem] max-[693px]:w-[2rem]'
                    alt=''
                  />
                  <p className='text-white font-[400] text-[1.2rem] max-[693px]:text-[1.1rem]'>
                    Logout
                  </p>
                </button>
              </div>
            </div>
          </div>
        </ul>
      </div>

      <div className='max-[693px]:hidden'>
        {UserName === 'LOGIN' ? (
          <button
            className='p-4 login-button text-[rgb(176,174,174)] relative flex justify-center items-center max-[960px]:px-[1.6rem] max-[960px]:py-[0.8rem] max-[510px]:px-[1rem] max-[510px]:py-[0.6rem]'
            onClick={whereToNavigate}
          >
            <span className='text-[1.35rem] max-[510px]:text-[1rem] '>
              {UserName}
            </span>
          </button>
        ) : (
          <div className='flex h-[3.3rem] gap-[1rem]'>
            <img src={userLogo} className='' alt='userLogo' />
            <button
              className='p-4 login-button text-[rgb(176,174,174)] relative flex justify-center items-center max-[960px]:px-[1.6rem] max-[960px]:py-[0.8rem] max-[510px]:px-[1rem] max-[510px]:py-[0.6rem]'
              onClick={whereToNavigate}
            >
              <span className='text-[1.35rem] max-[510px]:text-[1rem] '>
                {UserName}
              </span>
            </button>
          </div>
        )}
        <div className='flex justify-center'>
          <div className={`dropdown-menu ${toggle ? 'active' : 'inactive'}`}>
            <button className='flex justify-start items-center gap-[2rem] px-[1rem] mx-[1rem] py-[1rem] border-b-2 border-[#9d9696] max-[693px]:py-[0.6rem]'>
              <img
                src={userLogo}
                className='h-[3rem] w-[3rem] max-[693px]:h-[2rem] max-[693px]:w-[2rem]'
                alt=''
              />
              <p className='text-white font-[400] text-[1.2rem] max-[693px]:text-[1.1rem]'>
                My Profile
              </p>
            </button>
            <button className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] py-[1rem] border-b-2 border-[#9d9696] max-[693px]:py-[0.6rem]'>
              <img
                src={edit}
                className='h-[3rem] w-[3rem] max-[693px]:h-[2rem] max-[693px]:w-[2rem]'
                alt=''
              />
              <p className='text-white font-[400] text-[1.2rem] max-[693px]:text-[1.1rem]'>
                Edit Profile
              </p>
            </button>
            {/* <button className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] py-[1rem] border-b-2 border-[#9d9696] max-[693px]:py-[0.6rem]'>
              <img
                src={settings}
                className='h-[3rem] w-[3rem] max-[693px]:h-[2rem] max-[693px]:w-[2rem]'
                alt=''
              />
              <p className='text-white font-[400] text-[1.2rem] max-[693px]:text-[1.1rem]'>
                Settings
              </p>
            </button> */}
            <button
              className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] py-[1rem] border-b-2 border-[#9d9696] max-[693px]:py-[0.6rem]'
              onClick={helpNavigate}
            >
              <img
                src={help}
                className='h-[3rem] w-[3rem] max-[693px]:h-[2rem] max-[693px]:w-[2rem]'
                alt=''
              />
              <p className='text-white font-[400] text-[1.2rem] max-[693px]:text-[1.1rem]'>
                Help
              </p>
            </button>
            <button
              className='flex justify-start items-center gap-[2rem] mx-[1rem] px-[1rem] py-[1rem]'
              onClick={UserSignOut}
            >
              <img
                src={logout}
                className='h-[3rem] w-[3rem] max-[693px]:h-[2rem] max-[693px]:w-[2rem]'
                alt=''
              />
              <p className='text-white font-[400] text-[1.2rem] max-[693px]:text-[1.1rem]'>
                Logout
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

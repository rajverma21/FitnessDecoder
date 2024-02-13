import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import mail_icon from '../icons/mail.png'
import padlock from '../icons/lock.png'
import password1 from '../icons/hidden.png'
import password2 from '../icons/visible.png'
import minus from '../icons/minus.png'
import facebook from '../icons/facebook.png'
import google from '../icons/search.png'
import twitter from '../icons/twitter.png'
import user from '../icons/user.png'
import auth from '../firebase/Config'

export default function Signup () {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Username, setUsername] = useState('')
  const [DisableDoubleClick, setDisableDoubleClick] = useState(false)
  const [Type, setType] = useState('password')
  const [Visibility, setVisibility] = useState(password1)
  const [ErrMessage, setErrMessage] = useState('')
  const navigate = useNavigate()

  const show_password = event => {
    event.preventDefault()
    if (Type === 'text') {
      setType('password')
      setVisibility(password1)
    } else {
      setType('text')
      setVisibility(password2)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    setDisableDoubleClick(true)
    createUserWithEmailAndPassword(auth, Email, Password)
      .then(async userCredential => {
        setDisableDoubleClick(false)
        console.log(userCredential)
        const user = userCredential.user
        await updateProfile(user, {
          displayName: Username
        })
        console.log(userCredential.user.displayName)
        navigate('/')
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        setDisableDoubleClick(false)
        setErrMessage(errorCode.toUpperCase().substring(5))
      })
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center w-full'>
        <form
          className='flex flex-col justify-center w-[67%] gap-1'
          onSubmit={handleSubmit}
        >
          <div>
            <div className='bg-slate-100 flex items-center px-4 rounded-3xl h-[4rem] border-2 border-[#c9cfda] mb-3 hover:border-2 hover:border-[#ff9090]'>
              <img src={user} className='h-[1.7rem]' alt='email_icon' />
              <input
                value={Username}
                onChange={e => setUsername(e.target.value)}
                type='text'
                className='flex-1 bg-transparent px-4 h-full text-[1.4rem] focus:outline-none placeholder:text-[1.4rem]'
                placeholder='Enter Username'
                required
              />
            </div>
            <div className='bg-slate-100 flex items-center px-4 rounded-3xl h-[4rem] border-2 border-[#c9cfda] mb-3 hover:border-2 hover:border-[#ff9090]'>
              <img src={mail_icon} className='h-[1.7rem]' alt='email_icon' />
              <input
                value={Email}
                onChange={e => setEmail(e.target.value)}
                type='email'
                className='flex-1 bg-transparent px-4 h-full text-[1.4rem] focus:outline-none placeholder:text-[1.4rem]'
                placeholder='Enter Email Address'
                required
              />
            </div>
            <div className='bg-slate-100 flex items-center px-4 rounded-3xl h-[4rem] border-2 border-[#c9cfda] hover:border-2 hover:border-[#ff9090]'>
              <img src={padlock} className='h-[1.9rem]' alt='password_icon' />
              <input
                value={Password}
                onChange={e => setPassword(e.target.value)}
                type={Type}
                className='h-full px-4 bg-transparent flex-1 text-[1.4rem] focus:outline-none placeholder:text-[1.4rem]'
                placeholder='Password'
                required
                autoComplete="off"
              />
              <button>
                <img
                  src={Visibility}
                  className='h-[1.9rem]'
                  onClick={show_password}
                  alt='hidden_icon'
                />
              </button>
            </div>
          </div>
          <div>
            <p className='w-full text-center font-[700] pt-[1.2rem] pb-[0.75rem] text-[#484848bc] text-[1.1rem]'>
              {ErrMessage}
            </p>
          </div>
          <div>
            <button
              type='submit'
              className='w-full bg-[#fd5858] text-white font-semibold text-[1.3rem] h-[4rem] rounded-3xl mt-2'
              disabled={DisableDoubleClick}
            >
              CREATE ACCOUNT
            </button>
            {/* <p className='text-[12px] p-1 my-2'>
              Already have an account?
              <strong>
                <Link to='/login'> Login</Link>
              </strong>
            </p> */}
          </div>
          <p className='text-center	text-[1.1rem] mt-4'>
            By clicking on 'Create Account' you are agreeing to the
            <strong> Terms of Service </strong>
            and the <strong> Privacy Policy</strong>.
          </p>
        </form>
        <div className='flex items-center gap-2 my-12'>
          <img src={minus} className='w-[12.5rem] h-[1.4rem]' alt='' />
          <div className='text-[1.34rem] text-[#828790] font-semibold'>
            Join with
          </div>
          <img src={minus} className='w-[12.5rem] h-[1.4rem]' alt='' />
        </div>
        <div>
          <div className='flex gap-10'>
            <button className='h-[3.7rem] p-3 border-2 rounded-[50%] border-[#b8bdc5]'>
              <img src={facebook} className='h-[1.9rem]' alt='' />
            </button>
            <button className='h-[3.7rem] p-3 border-2 rounded-[50%] border-[#b8bdc5]'>
              <img src={google} className='h-[1.9rem]' alt='' />
            </button>
            <button className='h-[3.6rem] p-3 border-2 rounded-[50%] border-[#b8bdc5]'>
              <img src={twitter} className='h-[1.4rem]' alt='' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import mail_icon from '../icons/mail.png'
import padlock from '../icons/lock.png'
import password1 from '../icons/hidden.png'
import password2 from '../icons/visible.png'
import minus from '../icons/minus.png'
import facebook from '../icons/facebook.png'
import google from '../icons/search.png'
import twitter from '../icons/twitter.png'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebase/Config'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export default function Login () {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [DisableDoubleClick, setDisableDoubleClick] = useState(false)
  const [Type, setType] = useState('password')
  const [Visibility, setVisibility] = useState(password1)
  const [ErrMessage, setErrMessage] = useState('')
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()

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
    signInWithEmailAndPassword(auth, Email, Password)
      .then(userCredential => {
        setDisableDoubleClick(false)
        navigate('/')
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        setDisableDoubleClick(false)
        setErrMessage(errorCode.toUpperCase().substring(5))
      })
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <form
        className='flex flex-col justify-center w-[67%] gap-1'
        onSubmit={handleSubmit}
      >
        <div>
          <div className=' flex items-center px-4 rounded-3xl h-[4.5rem] border-2 border-[#c9cfda] mb-4 hover:border-2 hover:border-[#ff9090]'>
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
          <div className='bg-slate-100 flex items-center px-4 rounded-3xl h-[4.5rem] border-2 border-[#c9cfda] hover:border-2 hover:border-[#ff9090]'>
            <img src={padlock} className='h-[1.7rem]' alt='password_icon' />
            <input
              value={Password}
              onChange={e => setPassword(e.target.value)}
              type={Type}
              className='h-full px-4 bg-transparent flex-1 text-[1.4rem] focus:outline-none placeholder:text-[1.4rem]'
              placeholder='Password'
              required
              autoComplete='off'
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
          <div className='flex px-2 items-center text-[12.5px] py-2 gap-2 font-[500] text-[#9298a3]'>
            <input type='checkbox' className='scale-125' />
            <span className='flex-1 1.4rem '>Rememeber me</span>
            <a href='/' className='1.4rem'>
              Forgot Password?
            </a>
          </div>
        </div>
        <div>
          <p className='w-full text-center font-[700] p-2 text-[#484848bc] text-[1.2rem]'>
            {ErrMessage}
          </p>
        </div>
        <div>
          <button
            type='submit'
            className='w-full bg-[#fd5858] text-white font-semibold text-[1.3rem] h-[4.1rem] rounded-3xl mt-5'
            disabled={DisableDoubleClick}
          >
            LOGIN
          </button>
          {/* <p className='text-[12px] p-1 my-2'>
            Don't have an account?
            <strong>
              <Link to='/signup'> Create Account</Link>
            </strong>
          </p> */}
        </div>
      </form>
      <div className='flex items-center gap-2 my-12'>
        <img src={minus} className='w-[12.5rem] h-[1.4rem]' alt='' />
        <div className='text-[1.34rem] text-[#828790] font-semibold'>
          Login with
        </div>
        <img src={minus} className='w-[12.5rem] h-[1.4rem]' alt='' />
      </div>
      <div>
        <div className='flex gap-10'>
          <button className='h-[3.8rem] p-3 border-2 rounded-[50%] border-[#b8bdc5]'>
            <img src={facebook} className='h-[1.9rem]' alt='' />
          </button>
          <button
            className='h-[3.8rem] p-3 border-2 rounded-[50%] border-[#b8bdc5]'
            onClick={signInWithGoogle}
          >
            <img src={google} className='h-[1.9rem]' alt='' />
          </button>
          <button className='h-[3.7rem] p-3 border-2 rounded-[50%] border-[#b8bdc5]'>
            <img src={twitter} className='h-[1.6rem]' alt='' />
          </button>
        </div>
      </div>
    </div>
  )
}

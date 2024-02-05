import React, { useState } from 'react'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

const LoginForm = () => {
  const [isActive, setIsActive] = useState(false) // Track active form state

  const handleToggle = () => {
    setIsActive(!isActive) // Toggle the state
  }

  return (
    <div className='flex justify-center items-center h-[100vh] flex-col bg-[#c9d6ff] bg-gradient-to-tr from-indigo-700 to-purple-200'>
      <div className={`container ${isActive ? 'active' : ''}`}>
        <div className='form-container sign-up flex justify-center items-center'>
          <Signup />
        </div>
        <div className='form-container sign-in flex justify-center items-center '>
          <Login />
        </div>
        <div className='toggle-container'>
          <div className='toggle'>
            <div className='toggle-panel toggle-left flex text-center gap-3'>
              <h1 className='text-[3rem]'>No account yet?</h1>
              <div>
                <p className='text-[1.1rem]'>What are you waiting for?</p>
                <p className='text-[1.1rem]'>
                  Join the community and connect with like-minded individuals.
                </p>
              </div>
              <button
                className='shadow-2xl bg-[#C46262] border-[#DDDDDD] rounded-2xl text-[1.3rem] font-[500] p-4 mt-4 hover:border-none  hover:text-[#121212] hover:bg-purple-400 transition-all ease-in-out duration-500'
                id='login'
                onClick={handleToggle}
              >
                Sign In
              </button>
            </div>
            <div className='toggle-panel toggle-right flex text-center gap-3'>
              <h1 className='text-[3rem]'>No account yet?</h1>
              <div>
                <p className='text-[1.1rem]'>What are you waiting for?</p>
                <p className='text-[1.1rem]'>
                  Join the community and connect with like-minded individuals.
                </p>
              </div>
              <button
                className='shadow-2xl bg-[#C46262] border-[#DDDDDD] rounded-2xl text-[1.3rem] font-[500] p-4 mt-4 hover:border-none  hover:text-[#121212] hover:bg-purple-400 transition-all ease-in-out duration-500'
                id='register'
                onClick={handleToggle}
              >
                Sign up now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm

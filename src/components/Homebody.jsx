import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

function Homebody ({ UserLogin, setUserLogin }) {
  // const navigate = useNavigate()
  // const auth = getAuth()
  // onAuthStateChanged(auth, user => {
  //   if (user) {
  //     const uid = user.uid
  //     setUserLogin(true)
  //   }
  // })
  return (
    <div className='flex flex-col justify-center items-center h-[92vh] bg-[#d59baaed]'>
      <h1 className='text-[6.4rem] font-[700] text-[black]'>
        Your Gateway to Holistic Well-Being
      </h1>
      <p className='p-4 mb-5 text-[1.2rem]'>
        Are you ready to unlock the full potential of your mind and body? At
        Fitness Decoder, we’re on a mission to redefine health and wellness
      </p>
      <button className='p-4 login-button m-5' onClick={() => navigate('/')}>
        <span>Join the Waitlist</span>
      </button>
      <button>
        <span>Join the Waitlist</span>
      </button>
    </div>
  )
}

export default Homebody

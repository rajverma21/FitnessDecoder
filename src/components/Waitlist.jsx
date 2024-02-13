import React from 'react'
import minus from '../icons/minus.png'
import Navbar from './Navbar'
import Closing from './Closing'

function Waitlist () {
  return (
    <div className='w-[100%] flex flex-col items-center bg-[#d59baaed]'>
      <Navbar />
      <div className='flex justify-center items-center flex-col h-[85vh]'>
        <h1 className='text-[6rem] text-[#121212]'>Sucessfully!</h1>
        <div className='flex gap-5 items-center justify-center'>
          <img src={minus} className='w-[12.5rem] h-[1.4rem]' alt='' />
          <p className='text-[1.4rem] text-[#121212] font-[600]'>
            Joined the Waitlist
          </p>
          <img src={minus} className='w-[12.5rem] h-[1.4rem]' alt='' />
        </div>
      </div>
      <Closing />
    </div>
  )
}

export default Waitlist

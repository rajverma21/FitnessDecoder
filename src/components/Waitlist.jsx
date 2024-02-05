import React from 'react'
import minus from '../icons/minus.png'

function Waitlist () {
  return (
    <div className='h-[100vh] w-[100%] flex flex-col justify-center items-center bg-[#d59baaed]'>
      <h1 className='text-[6rem] text-[#121212]'>Sucessfully!</h1>
      <div className='flex gap-5 items-center justify-center'>
        <img src={minus} className='w-[12.5rem] h-[1.4rem]' alt='' />
        <p className='text-[1.4rem] text-[#121212] font-[600]'>
          Joined the Waitlist
        </p>
        <img src={minus} className='w-[12.5rem] h-[1.4rem]' alt='' />
      </div>
    </div>
  )
}

export default Waitlist

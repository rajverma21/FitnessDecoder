import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
function Card (props) {
  const iconStyles = { color: 'white', fontSize: '5rem' }
  return (
    <div className='flex flex-col justify-center text-gray-700 bg-white shadow-xl h-[40rem] rounded-[2.1rem]'>
      <div className='p-10 flex flex-col justify-center'>
        <div className='border-2 p-[1.2rem] h-[6rem] w-[6rem] flex items-center justify-center bg-white rounded-[35%]'>
          <img src={props.image} alt='' />
        </div>
        <h5 className='p-2 mt-4 font-sans text-[2.8rem] font-[600] tracking-normal text-blue-gray-900'>
          {props.title}
        </h5>
        <p className='p-2 font-sans text-[1.24rem] antialiased font-light leading-relaxed text-inherit'>
          {props.description}
        </p>
      </div>
      <div className='p-9 pt-0'>
        <a href='/' className='inline-block'>
          <button
            className='flex items-center gap-2 px-4 py-4 font-sans text-[1.1rem] font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20'
            type='button'
          >
            Learn More
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  )
}

export default Card

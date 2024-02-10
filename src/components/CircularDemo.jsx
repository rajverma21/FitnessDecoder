import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import user from '../assets/images/user.png'
import multipleUsers from '../assets/images/multipleUsers.png'
import configuration from '../assets/images/configuration.png'
import running from '../assets/images/running.png'

function CircularDemo () {
  const iconStyles = { color: 'white', fontSize: '5rem' }
  return (
    <div className='flex justify-center items-center m-auto gap-[20px] w-[90vw] h-[80vh]'>

      {/* CARD1 */}

      <div className='text-gray-700 bg-white shadow-xl py-[3.7rem] px-[28px] rounded-[20px]'>
        <div className='border-2 p-[1.2rem] h-[60px] w-[60px] flex items-center justify-center bg-white rounded-[31%]'>
          <img src={user} alt='' />
        </div>
        <h5 className='mt-[10px] font-sans text-[2.8rem] font-[600] w-[90%] text-blue-gray-900'>
          Prioritizing Mental Health
        </h5>
        <p className='font-sans h-[100px] text-[1.24rem] antialiased  mt-[10px] leading-relaxed text-inherit'>
          We understand that true well-being starts from within. Our core
          emphasis on mental health sets us apart. We believe that a strong mind
          is the foundation for a strong body and a fulfilling life.
        </p>
        <div className='mt-[1.4rem] flex justify-center'>
          <a href='/' className='inline-block'>
            <button
              className='flex items-center py-4 px-6 gap-2 font-sans text-[1.1rem] font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20'
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
                <path d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* CARD2 */}

      <div className='flex flex-col justify-center text-gray-700 bg-white shadow-xl py-10 px-[8px] h-[400px] rounded-[20px]'>
        <div className='flex flex-col justify-center px-[20px]'>
          <div className='border-2 p-[1.2rem] h-[60px] w-[60px] flex items-center justify-center bg-white rounded-[31%]'>
            <img src={multipleUsers} alt='' />
          </div>
          <h5 className='mt-[10px] font-sans text-[2.8rem] font-[600] w-[90%] text-blue-gray-900'>
            Open Community Connection
          </h5>
          <p className='font-sans text-[1.24rem] h-[100px] antialiased  mt-[10px] leading-relaxed text-inherit'>
            You're never alone. Join our vibrant community of like-minded
            individuals who share a passion for both mental and physical health.
            Together, we uplift, motivate, and support one another.
          </p>
          <div className='mt-[1.4rem] flex justify-center'>
            <a href='/' className='inline-block'>
              <button
                className='flex items-center mx-3 py-4 px-6 gap-2 font-sans text-[1.1rem] font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20'
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
                  <path d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* CARD3 */}

      <div className='flex flex-col justify-center text-gray-700 bg-white shadow-xl py-10 px-[8px] h-[400px]  rounded-[20px]'>
        <div className='flex flex-col justify-center px-[20px]'>
          <div className='border-2 p-[1.2rem] h-[60px] w-[60px] flex items-center justify-center bg-white rounded-[31%]'>
            <img src={configuration} alt='' />
          </div>
          <h5 className='mt-[10px] font-sans text-[2.8rem] font-[600] w-[90%] text-blue-gray-900'>
            Integrated Personal Evolution
          </h5>
          <p className='font-sans text-[1.24rem] h-[100px] antialiased  mt-[10px] leading-relaxed text-inherit'>
            Beyond physical fitness, we're here to guide you towards personal
            growth. Our workshops and courses are designed to foster mental
            resilience, self-awareness, and the skills you need to excel in
            every area of your life.
          </p>
          <div className='mt-[1.4rem] flex justify-center'>
            <a href='/' className='inline-block'>
              <button
                className='flex items-center mx-3 py-4 px-6 gap-2 font-sans text-[1.1rem] font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20'
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
                  <path d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* CARD4 */}

      <div className='flex flex-col justify-center text-gray-700 bg-white shadow-xl py-10 px-[8px] h-[400px]  rounded-[20px]'>
        <div className='flex flex-col justify-center px-[20px]'>
          <div className='border-2 p-[1.2rem] h-[60px] w-[60px] flex items-center justify-center bg-white rounded-[31%]'>
            <img src={running} alt='' />
          </div>
          <h5 className='mt-[10px] font-sans text-[2.8rem] font-[600] w-[90%] text-blue-gray-900'>
            Customized Fitness Journeys
          </h5>
          <p className='font-sans text-[1.24rem] h-[100px] antialiased  mt-[10px] leading-relaxed text-inherit'>
            No two individuals are the same, and neither should their fitness
            journeys be. Our expert trainers curate personalized fitness plans
            that align with your goals, preferences, and physical abilities.
          </p>
          <div className='mt-[1.4rem] flex justify-center'>
            <a href='/' className='inline-block'>
              <button
                className='flex items-center mx-3 py-4 px-6 gap-2 font-sans text-[1.1rem] font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20'
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
                  <path d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CircularDemo

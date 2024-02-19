// Sidebar.js
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ selectedOption, onOptionChange }) => {
  const navigate = useNavigate()
  const options = ['My Profile', 'Edit Profile', 'Settings']
  const BackToHome = () => {
    navigate('/')
  }

  return (
    <div className='w-1/5 bg-gradient-to-b from-gray-800 to-gray-700 text-white p-6 shadow-lg rounded-r-lg flex flex-col'>
      <h2 className='text-[4rem] font-bold mb-6'>Dashboard</h2>
      <ul className='flex-1'>
        {options.map(option => (
          <li
            key={option}
            className={`cursor-pointer text-[1.4rem] mb-4 px-6 py-5 rounded-2xl ${
              selectedOption === option
                ? 'bg-blue-600 text-white'
                : 'hover:bg-blue-600 hover:text-white'
            }`}
            onClick={() => onOptionChange(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button
        className='text-[1.4rem] mb-4 px-6 py-5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white w-[100%]'
        onClick={BackToHome}
      >
        Back to Home
      </button>
    </div>
  )
}

export default Sidebar

import React from 'react'

const Content = ({ selectedOption }) => {
  return (
    <div className='flex-1 p-8 bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg rounded-l-lg'>
      <h2 className='text-[2.7rem] text-[#232121] font-bold mb-6'>
        {selectedOption}
      </h2>
      {selectedOption === 'My Profile' && (
        <div className='flex justify-center items-center h-[90%] w-[100%]'>
          <div className=''></div>
        </div>
      )}
      {selectedOption === 'Edit Profile' && <p className='text-gray-700'></p>}
      {selectedOption === 'Settings' && <p className='text-gray-700'></p>}
    </div>
  )
}

export default Content

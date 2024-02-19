import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('My Profile')

  const handleOptionChange = option => {
    setSelectedOption(option)
  }

  return (
    <div className='flex h-screen bg-gray-200'>
      <Sidebar
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      <Content selectedOption={selectedOption} />
    </div>
  )
}

export default Dashboard

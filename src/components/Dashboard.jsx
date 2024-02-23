import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Introduction')

  const handleOptionChange = option => {
    setSelectedOption(option)
  }

  return (
    <div className='flex min-h-[100vh] '>
      <Sidebar
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      <Content selectedOption={selectedOption} />
    </div>
  )
}

export default Dashboard

import React from 'react'
import Card from './Card'
import { FaUsers } from 'react-icons/fa'
import user from '../assets/images/user.png'
import multipleUsers from '../assets/images/multipleUsers.png'
import configuration from '../assets/images/configuration.png'
import running from '../assets/images/running.png'

function WhyChooseUs () {
  return (
    <div className='flex gap-[3rem] justify-center items-center h-[100vh] w-[100%] px-[8rem] bg-[#efefef]'>
      <Card
        title='Prioritizing Mental Health'
        description='We understand that true well-being starts from within. Our core emphasis on mental health sets us apart. We believe that a strong mind is the foundation for a strong body and a fulfilling life.'
        image={user}
      />
      <Card
        title='Community Connection'
        description="You're never alone on your well-being journey. Join our vibrant community of like-minded individuals who share a passion for both mental and physical health. Together, we uplift, motivate, and support one another."
        image={multipleUsers}
      />
      <Card
        title='Integrated personal evolution'
        description="Beyond physical fitness, we're here to guide you towards personal growth. Our workshops and courses are designed to foster mental resilience, self-awareness, and the skills you need to excel in every area of your life."
        image={configuration}
      />
      <Card
        title='Customized Fitness Journeys'
        description='No two individuals are the same, and neither should their fitness journeys be. Our expert trainers curate personalized fitness plans that align with your goals, preferences, and physical abilities.'
        image={running}
      />
    </div>
  )
}

export default WhyChooseUs

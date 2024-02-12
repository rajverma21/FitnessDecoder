import React from 'react'
import Card from './Card'
import { FaUsers } from 'react-icons/fa'
import user from '../assets/images/user.png'
import multipleUsers from '../assets/images/multipleUsers.png'
import configuration from '../assets/images/configuration.png'
import running from '../assets/images/running.png'

function WhyChooseUs () {
  return (
    <div className='flex flex-col py-[6rem] px-[3rem] gap-[4rem] justify-center items-center bg-[#efefef]'>
      <div>
        <h1 className='text-[4rem] text-[#424141] font-[400] underline-offset-4 underline'>
          Hello Bhai Log!
        </h1>
      </div>
      <div className='grid grid-cols-4 justify-items-center gap-[3rem] max-[1250px]:grid-cols-2 max-[600px]:grid-cols-1'>
        <Card
          title='Prioritizing Mental Health'
          description='We understand that true well-being starts from within. Our core
          emphasis on mental health sets us apart. We believe that a strong mind
          is the foundation for a strong body and a fulfilling life.'
          image={user}
          buttonDescription='Learn More'
        />
        <Card
          title='Open Community Connection'
          description="You're never alone. Join our vibrant community of like-minded individuals who share a passion for both mental and physical health. Together, we uplift, motivate, and support one another."
          image={multipleUsers}
          buttonDescription='Explore'
        />
        <Card
          title='Integrated Personal Evolution'
          description="Beyond physical fitness, we're here to guide you towards personal growth. Our workshops are designed to foster mental resilience, self-awareness, and the skills you need in every area of your life."
          image={configuration}
          buttonDescription='Learn More'
        />
        <Card
          title='Customized Fitness Journeys'
          description='No two individuals are the same, and neither should their fitness journeys be. Our expert trainers curate personalized fitness plans that align with your goals, preferences, and physical abilities.'
          image={running}
          buttonDescription='Explore'
        />
      </div>
      <div className='hidden grid-cols-4 gap-[4rem] max-[912px]:grid-cols-2 max-[415px]:grid-cols-1'>
        <Card
          title='Prioritizing Mental Health'
          description='We understand that true well-being starts from within. Our core
          emphasis on mental health sets us apart. We believe that a strong mind
          is the foundation for a strong body and a fulfilling life.'
          image={user}
          buttonDescription='Learn More'
        />
        <Card
          title='Open Community Connection'
          description="You're never alone. Join our vibrant community of like-minded individuals who share a passion for both mental and physical health. Together, we uplift, motivate, and support one another."
          image={multipleUsers}
          buttonDescription='Explore'
        />
        <Card
          title='Integrated Personal Evolution'
          description="Beyond physical fitness, we're here to guide you towards personal growth. Our workshops are designed to foster mental resilience, self-awareness, and the skills you need in every area of your life."
          image={configuration}
          buttonDescription='Learn More'
        />
        <Card
          title='Customized Fitness Journeys'
          description='No two individuals are the same, and neither should their fitness journeys be. Our expert trainers curate personalized fitness plans that align with your goals, preferences, and physical abilities.'
          image={running}
          buttonDescription='Explore'
        />
      </div>
    </div>
  )
}

export default WhyChooseUs

import React from 'react'
import Card from './Card'
import { FaUsers } from 'react-icons/fa'
import user from '../assets/images/user.png'
import multipleUsers from '../assets/images/multipleUsers.png'
import configuration from '../assets/images/configuration.png'
import running from '../assets/images/running.png'
import Navbar from './Navbar'
import Closing from './Closing'

function WhyChooseUs () {
  return (
    <div className='flex flex-col w-[100%] gap-[4rem] justify-center items-center bg-[#efefef]'>
      <Navbar />
      <div>
        <h1 className='text-[4rem] text-[#373636] font-[500] underline-offset-4 underline max-[1250px]:text-[3.7rem] max-[650px]:text-[3.5rem] max-[470px]:text-[3.3rem] services-heading'>
          SERVICES
        </h1>
      </div>
      <div className='grid grid-cols-4 px-[3rem] justify-items-center gap-[3rem] max-[1250px]:grid-cols-2 max-[600px]:grid-cols-1 max-[1250px]:w-[80%] max-[900px]:w-[100%] max-[400px]:px-[1rem]'>
        <Card
          title='AI-Powered Personalized Guidance'
          description='Our platform utilizes advanced AI algorithms to provide tailored recommendations and guidance based on your unique needs and goals.'
          image={user}
          buttonDescription='Learn More'
        />
        <Card
          title='Self-Reflection Tools'
          description='Engage in self-reflection exercises and journaling prompts to gain deeper 
          insights into your thoughts, emotions, and behaviors.'
          image={configuration}
          buttonDescription='Explore'
        />
        <Card
          title='Peer Support'
          description='Connect with like-minded individuals, share experiences, and receive support from a supportive community of individuals on a similar path.'
          image={multipleUsers}
          buttonDescription='Learn More'
        />
        <Card
          title='Goal Setting and Tracking'
          description='Set meaningful goals and track your progress to stay motivated and focused on your personal growth journey.'
          image={running}
          buttonDescription='Explore'
        />
      </div>
      <div className='hidden grid-cols-4 gap-[4rem] max-[912px]:grid-cols-2 max-[415px]:grid-cols-1'>
        <Card
          title=' Goal Setting and Tracking'
          description='Set meaningful goals and track your progress to stay motivated and focused on your personal growth journey.
          '
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
      <Closing />
    </div>
  )
}

export default WhyChooseUs

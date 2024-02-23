import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='p-[6rem] w-[60%]'>
        <div className='p-12 bg-[#dee8f6] rounded-2xl about-us-left-div'>
          <Accordion
            title='Lack of motivation and direction in personal growth journey?'
            answer='FitnessDecoder provides personalized guidance and resources to help individuals stay motivated and focused in thier personal growth journey.'
          />
          <Accordion
            title='Diffuculty in overcoming mental health barriers?'
            answer='FitnessDecoder offers tools and techniques to help individuals overcome mental health barriers, providing a safe space for self- reflection and growth.'
          />
          <Accordion
            title='Negative self-talk and limiting beliefs?'
            answer='FitnessDecoder helps individuals identify and challenge negative self-talk and limiting beliefs, providing tools and techniques to cultivate a positive and empowering mindset.'
          />
          <Accordion
            title='Lack of self-awareness & understanding of personal strengths?'
            answer='FitnessDecoder offers assessments and exercises to help individuals gain self-awareness and understand their personal strengths and weaknesses, enabling them to make informed decisions for personal growth.'
          />
          <Accordion
            title='Limited resources & guidance for specific personal growth area?'
            answer='FitnessDecoder offers a wide range of resources and expert guidance in various personal growth areas, catering to the specific needs and interests of individuals.'
          />
          <Accordion
            title='Lack of community & support network for personal growth?'
            answer='FitnessDecoder provides a community of like-minded individuals. fostering a supportive network for personal growth, collaboration, and shared learning.'
          />
        </div>
      </div>
    </div>
  )
}

export default FAQ

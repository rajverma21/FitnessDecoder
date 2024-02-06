import React from 'react'
import about_us_first_img from '../assets/images/AboutUs.png'

function AboutUs () {
  return (
    <div className='h-[100vh] w-[100%] flex flex-col justify-center items-center'>
      <div className='flex'>
        <div className='flex flex-col'>
          <div className="leading-[3rem]">
            <h3 className='text-[2.9rem] font-[sans-serif] font-[800] text-[#FF3C3C]'>
              How it <br />{' '}
              <span className='text-[#2c1b1b] font-[900] text-[4rem]'>
                Started
              </span>
            </h3>
          </div>
          <div>
            <h1 className=' text-[3.9rem]'>
              Journey with Fitness Decoder,
              <br /> Where Mind <br /> & Body Unite For Thriving.
            </h1>
          </div>
        </div>
        <div>
          <img
            src={about_us_first_img}
            className='h-[40rem]'
            alt='AboutUs-Image'
          />
        </div>
      </div>
      <div className='flex'>
        <div>
          <p>
            we believe in empowering you to live a balanced life that radiates
            well-being from the inside out. Our team of experienced fitness
            experts, mental health professionals, and wellness enthusiasts are
            here to support you on your transformative journey. By providing
            personalized fitness plans, mental health tools, and a platform for
            community connection, we’re here to nurture your holistic
            well-being.
          </p>
        </div>
        <div className='grid grid-cols-2 grid-rows-2'>
          <div>
            <h1>3.5</h1>
            <p>Years of Experience</p>
          </div>
          <div>
            <h1>23</h1>
            <p>Project Challenges</p>
          </div>
          <div>
            <h1>830+</h1>
            <p>Positive Reviews</p>
          </div>
          <div>
            <h1>100K</h1>
            <p>Trusted Customers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

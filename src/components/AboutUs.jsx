import React from 'react'
import Aboutus_logo from '../assets/images/AboutUs.png'
import fastforward from '../icons/fast-forward.png'
import left1 from '../assets/images/left1.png'
import left2 from '../assets/images/left2.png'
import right1 from '../assets/images/right1.png'
import Navbar from './Navbar'
import Closing from './Closing'

function AboutUs () {
  return (
    <div className='flex flex-col gap-[6rem] justify-center items-center w-[100%] max-[1024px]:gap-[3rem] bg-[#EFEFEF]'>
      <Navbar />
      <h1 className='services-heading text-[4rem] underline underline-offset-4 text-[#373636]'>ABOUT US</h1>
      <div className='flex flex-1 w-[95%] justify-center gap-[3.5rem] px-[2rem] my-[20px] max-[1024px]:flex-col max-[1024px]:my-[12px] max-[400px]:my-[7px]'>
        <div className='flex flex-col px-[4rem] py-[5rem] about-us-left-div w-[50%] rounded-3xl max-[1024px]:w-[100%] max-[600px]:px-[1.5rem] max-[400px]:py-[3rem]'>
          <h4 className='about-us-small-heading text-[1.8rem] px-[2rem] max-[400px]:text-[1.6rem]'>
            How it Started
          </h4>
          <h1 className='text-[4rem] mb-[30px] pt-[7px] text-wrap px-[2rem] about-us-main-heading max-[600px]:text-[3.2rem] max-[400px]:text-[2.4rem] max-[400px]:mb-[22px]'>
            Journey with Fitness Decoder,
            <br /> Where Mind & Body Unite For Thriving
          </h1>
          <p className='text-[1.5rem] px-[2rem] about-us-description max-[600px]:text-[1.4rem] max-[400px]:text-[1.3rem]'>
            At our core, we are dedicated to fostering a holistic approach to
            well-being, aiming to empower individuals to cultivate a life that
            exudes balance and vitality. Within our community, you will find a
            team of seasoned fitness experts, adept mental health professionals,
            and passionate wellness enthusiasts, all committed to guiding and
            supporting you throughout your transformative journey. We understand
            that true well-being extends beyond the physical realm, encompassing
            mental and emotional facets as well.
          </p>
        </div>
        <div className='flex w-[40%] justify-center items-center max-[1024px]:w-[100%]'>
          <img src={Aboutus_logo} className='object-cover w-[70%] max-[1024px]:w-[50%] max-[800px]:w-[60%] max-[600px]:w-[70%]' alt='' />
        </div>
      </div>
      {/* <div className='flex w-[90%] justify-center gap-[4rem] px-[2rem]'>
        <div className='flex justify-center items-center'>
          <img src={left1} className='object-cover w-[90%]' alt='' />
        </div>
        <div className='flex flex-col px-[4rem] py-[5rem] w-[40%] justify-center rounded-3xl'>
          <h4 className='about-us-small-heading text-[1.6rem] px-[2rem]'>
            ENPOWER YOUR EVERYDAY
          </h4>
          <h1 className=' text-[4rem] text-wrap mb-[20px] px-[2rem] pt-[7px] tracking-wide about-us-main-heading'>
            My Routine
          </h1>
          <p className='text-[1.5rem] px-[2rem] about-us-description mb-[32px]'>
            Elevate your daily routine with our My Routine service. We believe
            that consistent habits contribute to lasting change. With a range of
            tools and resources, you can integrate wellness seamlessly into your
            life:
          </p>
          <div className='px-[2rem] flex flex-col gap-[1.6rem]'>
            <div className='flex items-center gap-[1.6rem]'>
              <div>
                <img src={fastforward} className='h-[18px]' alt='' />
              </div>
              <p className='font-[500] text-[1.8rem] text-[#5d5757]'>
                Habit Trackers
              </p>
            </div>
            <div className='flex items-center gap-[1.6rem]'>
              <div>
                <img src={fastforward} className='h-[18px]' alt='' />
              </div>
              <p className='font-[500] text-[1.8rem] text-[#5d5757]'>
                Journaling
              </p>
            </div>
            <div className='flex items-center gap-[1.6rem]'>
              <div>
                <img src={fastforward} className='h-[18px]' alt='' />
              </div>
              <p className='font-[500] text-[1.8rem] text-[#5d5757]'>
                Self-Assessment Tests
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-[90%] justify-center gap-[4rem] px-[2rem]'>
        <div className='flex flex-col px-[4rem] py-[5rem] w-[40%] justify-center rounded-3xl'>
          <h4 className='about-us-small-heading text-[1.6rem] px-[2rem]'>
            UNLOCK YOUR POTENTIAL
          </h4>
          <h1 className=' text-[4rem] text-wrap mb-[20px] px-[2rem] pt-[7px] tracking-wide about-us-main-heading'>
            Life Coach
          </h1>
          <p className='text-[1.5rem] px-[2rem] about-us-description mb-[32px]'>
            Embark on a personalized journey to well-being with our Life Coach
            service. Our experts are here to guide you every step of the way,
            tailoring fitness plans and mental health support to your unique
            needs. Dive into a range of offerings designed to promote holistic
            wellness:
          </p>
          <div className='px-[2rem] flex flex-col gap-[1.6rem]'>
            <div className='flex items-center gap-[1.6rem]'>
              <div>
                <img src={fastforward} className='h-[18px]' alt='' />
              </div>
              <p className='font-[500] text-[1.8rem] text-[#5d5757]'>
                BMI and Calories Calculators
              </p>
            </div>
            <div className='flex items-center gap-[1.6rem]'>
              <div>
                <img src={fastforward} className='h-[18px]' alt='' />
              </div>
              <p className='font-[500] text-[1.8rem] text-[#5d5757]'>
                Meditation and Mindfulness
              </p>
            </div>
            <div className='flex items-center gap-[1.6rem]'>
              <div>
                <img src={fastforward} className='h-[18px]' alt='' />
              </div>
              <p className='font-[500] text-[1.8rem] text-[#5d5757]'>
                Live Workout Sessions
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src={right1} className='object-cover w-[90%]' alt='' />
        </div>
      </div>
      <div className='flex w-[90%] justify-center gap-[4rem] px-[2rem]'>
        <div className='flex justify-center items-center'>
          <img src={left2} className='object-cover w-[90%]' alt='' />
        </div>
        <div className='flex flex-col px-[4rem] py-[5rem] w-[40%] justify-center rounded-3xl'>
          <h4 className='about-us-small-heading text-[1.6rem] px-[2rem]'>
            THRIVE TOGETHER
          </h4>
          <h1 className=' text-[4rem] text-wrap mb-[20px] px-[2rem] pt-[7px] tracking-wide about-us-main-heading'>
            Peer Support
          </h1>
          <p className='text-[1.5rem] px-[2rem] about-us-description mb-[32px]'>
            Wellness is a shared journey, and our Peer Support service fosters a
            sense of community, connection, and growth. Engage in collaborative
            efforts towards well-being:
          </p>
          <div className='px-[2rem] flex flex-col gap-[1.6rem]'>
            <div className='flex items-center gap-[1.6rem]'>
              <div>
                <img src={fastforward} className='h-[18px]' alt='' />
              </div>
              <p className='font-[500] text-[1.8rem] text-[#5d5757]'>
                Peer-to-Peer Connections
              </p>
            </div>
            <div className='flex items-center gap-[1.6rem]'>
              <div>
                <img src={fastforward} className='h-[18px]' alt='' />
              </div>
              <p className='font-[500] text-[1.8rem] text-[#5d5757]'>
                Expert-Led Group Sessions
              </p>
            </div>
            <div className='flex items-center gap-[1.6rem]'>
              <div>
                <img src={fastforward} className='h-[18px]' alt='' />
              </div>
              <p className='font-[500] text-[1.8rem] text-[#5d5757]'>
                Personalized Counseling
              </p>
            </div>
          </div> 
        </div>
      </div>*/}
      <Closing />
    </div>
  )
}

export default AboutUs

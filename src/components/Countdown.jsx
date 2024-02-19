import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Closing from './Closing'

const Countdown = () => {
  const targetDate = new Date('2024-02-18T00:00:00').getTime()
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center w-[100%] gap-[3rem] bg-slate-200'>
      <Navbar />
      <div className='h-[75vh] flex flex-col justify-center gap-[5rem] items-center'>
        <div className='text-[5rem] underline underline-offset-8 font-bold text-gray-800 max-[460px]:text-[4rem] max-[360px]:text-[3.5rem]'>
          COMING SOON!
        </div>
        {timeLeft.days !== undefined ? (
          <div className='flex items-center justify-center gap-[3rem] max-[460px]:gap-[2rem] max-[380px]:gap-[1.5rem]'>
            <div className='flex flex-col justify-center items-center p-[3rem] bg-[#e0d3d3] gap-[1rem] rounded-3xl w-[20%] countdown-time max-[646px]:p-[2rem] max-[400px]:p-[1.5rem]'>
              <div className='text-4xl font-bold max-[400px]:text-[2rem]'>{timeLeft.days}</div>
              <div className='text-gray-700 text-[1.4rem]'>Days</div>
            </div>
            <div className='flex flex-col justify-center items-center p-[3rem] bg-[#e0d3d3] gap-[1rem] rounded-3xl w-[20%] countdown-time max-[646px]:p-[2rem] max-[400px]:p-[1.5rem]'>
              <div className='text-4xl font-bold max-[400px]:text-[2rem]'>{timeLeft.hours}</div>
              <div className='text-gray-700 text-[1.4rem]'>Hours</div>
            </div>
            <div className='flex flex-col justify-center items-center p-[3rem] bg-[#e0d3d3] gap-[1rem] rounded-3xl w-[20%] countdown-time max-[646px]:p-[2rem] max-[400px]:p-[1.5rem]'>
              <div className='text-4xl font-bold max-[400px]:text-[2rem]'>{timeLeft.minutes}</div>
              <div className='text-gray-700 text-[1.4rem]'>Minutes</div>
            </div>
            <div className='flex flex-col justify-center items-center p-[3rem] bg-[#e0d3d3] gap-[1rem] rounded-3xl w-[20%] countdown-time max-[646px]:p-[2rem] max-[400px]:p-[1.5rem]'>
              <div className='text-4xl font-bold max-[400px]:text-[2rem]'>{timeLeft.seconds}</div>
              <div className='text-gray-700 text-[1.4rem]'>Seconds</div>
            </div>
          </div>
        ) : (
          <div className='text-xl text-gray-800'>Countdown expired!</div>
        )}
      </div>
      <Closing />
    </div>
  )
}

export default Countdown

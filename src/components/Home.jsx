import React from 'react'
import Navbar from './Navbar'
import { BackgroundBeamsDemo } from './Join'
import WhyChooseUs from './WhyChooseUs'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Closing from './Closing'
import CircularDemo from './CircularDemo'

function Home () {
  return (
    <div>
      <Navbar />
      <BackgroundBeamsDemo />
      <AboutUs />
      <CircularDemo />
      {/* <WhyChooseUs /> */}
      <ContactUs />
      <Closing />
    </div>
  )
}

export default Home

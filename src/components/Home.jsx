import React from 'react'
import Navbar from './Navbar'
import { BackgroundBeamsDemo } from './Join'
import WhyChooseUs from './WhyChooseUs'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Closing from './Closing'

function Home () {
  return (
    <div>
      <Navbar />
      <BackgroundBeamsDemo />
      <WhyChooseUs />
      <ContactUs />
      <Closing />
      <AboutUs />
    </div>
  )
}

export default Home

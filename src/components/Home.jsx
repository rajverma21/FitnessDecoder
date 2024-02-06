import React from 'react'
import Navbar from './Navbar'
import Closing from './Closing'
import About from './About'
import Homebody from './Homebody'
import Waitlist from './Waitlist'
import WhyChooseUs from './WhyChooseUs'
import { BackgroundBeamsDemo } from './Join'
import ContactUs from './ContactUs'

function Home () {
  return (
    <div>
      <Navbar />
      <BackgroundBeamsDemo />
      {/* <Homebody /> */}
      {/* <About /> */}
      {/* <Waitlist /> */}
      <WhyChooseUs />
      <ContactUs />
      <Closing />
    </div>
  )
}

export default Home

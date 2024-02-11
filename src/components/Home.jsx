import React from 'react'
import Navbar from './Navbar'
import { BackgroundBeamsDemo } from './Join'
import WhyChooseUs from './WhyChooseUs'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Closing from './Closing'
import CircularDemo from './CircularDemo'
import Footer from './Footer'

function Home () {
  return (
    <div>
      <Navbar />
      <BackgroundBeamsDemo />
      {/* <AboutUs /> */}
      {/* <CircularDemo /> */}
      {/* <WhyChooseUs /> */}
      <ContactUs />
      <Closing />
      <Footer />
    </div>
  )
}

export default Home

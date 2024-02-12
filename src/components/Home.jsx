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
    <>
      <Navbar />
      <BackgroundBeamsDemo />
      {/* <AboutUs /> */}
      <WhyChooseUs />
      <ContactUs />
      <Closing />
      <Footer />
    </>
  )
}

export default Home

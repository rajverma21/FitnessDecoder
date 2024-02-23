import React from 'react'
import Navbar from './Navbar'
import { BackgroundBeamsDemo } from './Join'
import WhyChooseUs from './WhyChooseUs'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Closing from './Closing'
import Footer from './Footer'
import FAQ from './FAQ'

function Home () {
  return (
    <>
      <Navbar />
      <BackgroundBeamsDemo />
      <FAQ />
      <Closing />
    </>
  )
}

export default Home

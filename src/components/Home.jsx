import React from 'react'
import Navbar from './Navbar'
import Closing from './Closing'
import About from './About'
import Homebody from './Homebody'
import Waitlist from './Waitlist'
import WhyChooseUs from './WhyChooseUs'
import { BackgroundBeamsDemo } from './Join'

function Home ({ UserLogin, setUserLogin }) {
  return (
    <div>
      <Navbar />
      <BackgroundBeamsDemo />
      <Homebody UserLogin={UserLogin} setUserLogin={setUserLogin} />
      <About />
      <Waitlist />
      <WhyChooseUs />
      <Closing />
    </div>
  )
}

export default Home

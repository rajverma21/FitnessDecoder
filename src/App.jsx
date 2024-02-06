import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Waitlist from './components/Waitlist'
import { BackgroundBeamsDemo } from './components/Join'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import auth from './firebase/Config'
import WhyChooseUs from './components/WhyChooseUs'
import ContactUs from './components/ContactUs'
import AboutUs from './components/About'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/waitlist' element={<Waitlist />} />
          <Route path='/join' element={<BackgroundBeamsDemo />} />
          <Route path='/blogs' element={<WhyChooseUs />} />
          <Route path='/Contact' element={<ContactUs />} />
          <Route path='/About' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

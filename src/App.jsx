import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BackgroundBeamsDemo } from './components/Join'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/Config'
import Home from './components/Home'
import Waitlist from './components/Waitlist'
import LoginForm from './components/LoginForm'
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
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

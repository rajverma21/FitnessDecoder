import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Waitlist from './components/Waitlist'
import { BackgroundBeamsDemo } from './components/Join'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import auth from './firebase/Config'

function App () {
  const [UserLogin, setUserLogin] = useState(true)
  const auth = getAuth()
  const user = auth.currentUser
  // console.log("user", user)
  if (user) {
    setUserLogin(true)
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home UserLogin={UserLogin} setUserLogin={setUserLogin} />}
          />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/waitlist' element={<Waitlist />} />
          <Route path='/join' element={<BackgroundBeamsDemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

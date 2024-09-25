import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/setting' element={<Settings />} />
    <Route path='/about' element={<About />} />
    </Routes>
    </>
  )
}

export default App
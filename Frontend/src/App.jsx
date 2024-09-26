import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import About from './Pages/About'
import Users from './Pages/Users'
import Analytics from './Pages/Analytics'
import Product from './Pages/Product'

const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/product' element={<Product />} />
    <Route path='/setting' element={<Settings />} />
    <Route path='/about' element={<About />} />
    <Route path='/users' element={<Users />} />
    <Route path='/analytics' element={<Analytics />} />
    </Routes>
    </>
  )
}

export default App
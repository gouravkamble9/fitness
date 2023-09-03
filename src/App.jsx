import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Exercise from './pages/Exercise'
import { useState } from 'react'

const App = () => {
  const [activeLink,setActiveLink]=useState('Home')

  return (
    <BrowserRouter>
    <Navbar activeLink={activeLink} setActiveLink={setActiveLink}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:id' element={<Exercise setActiveLink={setActiveLink}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
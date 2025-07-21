import React from 'react'
import Header from './components/Header'
import Products from './pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Factory from './pages/Factory'
import Referances from './pages/Referances'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/factory" element={<Factory/>}/>
      <Route path="/referances" element={<Referances/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Factory from './pages/Factory'
import Referances from './pages/Referances'
import Home from './pages/Home'
import {Route, Routes, BrowserRouter} from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:categoryId" element={<Products/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/factory" element={<Factory/>}/>
      <Route path="/referances" element={<Referances/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Header from './components/Header'
import Products from './pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/products" element={<Products/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

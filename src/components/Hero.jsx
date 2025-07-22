import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='absolute inset-0 z-10 flex flex-col items-start justify-center ml-7 mb-20 text-white '>
      <h1 className='text-5xl font-bold mb-4'>Aluminium Systems for all Architecture</h1>
      <p className='text-xl mb-8'>Eco-friendly aluminium systems for windows, doors, and curtain walls
      </p>
      <div class="w-30 border-t border-red-500 mb-8.5"></div>

      <Link
      to="/products"
      className="border-1 border-white text-white px-6 py-3 font-medium flex items-center gap-2 hover:bg-red-600/70 transition-all duration-700"
      >
      Products
      <div className="hover:animate-pulse text-white text-xl">→</div>
      </Link>

     
    </div>
  )
}

export default Hero

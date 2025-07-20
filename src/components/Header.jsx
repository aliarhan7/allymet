import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [isBarOpen, setIsBarOpen] = useState(false);
  
  const MenuItems = [
    {title: 'Products', path: '/products'},
    {title: 'About Us', path: '/about'},
    {title: 'Contact', path: '/contact'},
    {title: 'Referances', path: '/referances'},
    {title: 'Factory', path: '/factory'},
  ];

  console.log(MenuItems)

  return (
   <header className='relative h-screen'>
    
    <div className='absolute inset-0 bg-gray-200'>
      <img src="/testForest.png" alt="company-hero" className='w-full h-full object-cover' />
    </div>
    
    <div className='absolute inset-0 bg-black opacity-30'></div>

    <div className='relative z-10'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-6'>
          <div className='text-white text-2xl font-bold'>LOGO</div>
          <nav className='hidden lg:flex lg:space-x-30'>
            {MenuItems.map((item) => (
              <a
              key={item.title}
              href={item.path}
              className='text-white hover:text-gray-300 transition-colors font-medium'
              >
                {item.title}
              </a>
            ))}
          </nav>
          
          <button className='text-white focus:outline-none'
          onClick={() => setIsBarOpen(!isBarOpen)}>
            <div className='w-6 h-6 flex flex-col justify-center items-center'>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isBarOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isBarOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isBarOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {isBarOpen && (
          <nav className='bg-black bg-opacity-80 rounded-lg mt-4 p-4'>
            {MenuItems.map((item) => (
              <Link
              key={item.title}
              to={item.path}
              className='block text-white hover:text-gray-300 transition-colors font-medium py-2 border-b border-gray-600 last:border-b-0'
              onClick={() => setIsBarOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}


      </div>
    </div>
   
   </header>
  )
}

export default Header;

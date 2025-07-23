import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BarButton from './BarButton';
import BarMenu from './BarMenu';

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

    <div className='relative z-20'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-6'>
          <div><img src="logo.png" alt="logo" className='w-auto h-11.5'/></div>
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
          
          {/* header */}
          
          <BarButton isOpen={isBarOpen} setIsOpen={setIsBarOpen} />
        
        </div>
      </div>
    </div>

    <BarMenu isOpen={isBarOpen} setIsOpen={setIsBarOpen} menuItems={MenuItems} />

   
   </header>
  )
}

export default Header;

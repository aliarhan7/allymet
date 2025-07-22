import React from 'react';
import { Link } from 'react-router-dom';
import BarButton from './BarButton';

const BarMenu = ({ isOpen, setIsOpen, menuItems }) => {
  return (
    <div
      className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100 z-30' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Menü Butonu */}
      <BarButton isOpen={isOpen} setIsOpen={setIsOpen}/>

      {/* Menü Öğeleri */}
      <nav
        className={`flex flex-col items-center justify-center h-full space-y-6 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        } transition-all duration-500 ease-in-out`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={item.title}
            to={item.path}
            className="text-white text-2xl font-medium hover:text-red-500 transition-colors duration-300"
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default BarMenu;
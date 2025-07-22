import React from 'react'

const BarButton = ({isOpen, setIsOpen}) => {
  return (
    <div>
      {/* Menü Butonu */}
      <button
        className="fixed top-6 right-4 focus:outline-none p-2.5 bg-gradient-to-r from-red-500 to-gray-500 z-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
          ></span>
        </div>
      </button>
    </div>
  )
}

export default BarButton

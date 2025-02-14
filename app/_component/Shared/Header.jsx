import React from 'react'
import GlidDownAnimation from '@/components/GlidDownAnimation'

const Header = () => {
return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
      <GlidDownAnimation>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/"> 
            <img src="/LogoHeader.png" alt="Logo" className=" w-10 h-10 md:w-16 md:h-16" />
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <nav className=" flex space-x-6">
            <a href="/policy" className="md:text-base text-xs font-medium text-gray-700 hover:text-gray-900">
              <p>Policy</p>
            </a>

          </nav>

          <button
            className="rounded-full border-2 border-black bg-[#D32020] text-black hover:bg-red-600 transition-colors px-8 md:px-16 py-3 md:py-5 text-base md:text-lg font-semibold"
          >
            <p>Download</p>
          </button>
        </div>
      </div>
      </GlidDownAnimation>
    </header>
)
}

export default Header
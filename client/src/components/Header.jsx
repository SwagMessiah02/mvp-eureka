import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='shadow-md bg-blue-800'>
      <div className="flex items-center justify-between px-9 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <div className='flex items-center'>
          <img 
            className='h-16'
            src="../src/assets/images/Logo.png"
            alt="Logo Eureka"
          />
        </div>

        {/* Container dos botões alinhado à direita */}
        <div className="flex items-center gap-4">

          {/* Botão LOGIN */}
          <Link
            to="/login"
            className='text-white font-bold rounded-full border-2 border-white px-8 py-2 
            cursor-pointer hover:bg-gray-200 hover:text-blue-800 transition duration-300'
          >
            LOGIN
          </Link>

          {/* Botão REGISTER */}
          <Link
            to="/register"
            className='text-white font-bold rounded-full border-2 border-white px-4 py-2
            cursor-pointer hover:bg-gray-200 hover:text-blue-800 transition duration-300'
          >
            REGISTER
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Header

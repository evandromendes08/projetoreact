import React from 'react'
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='bg-transparent z-50 w-full'>
        <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
            <div className='flex flex-grow items-center'>
                <Link to='/'>
                <img src={logo} alt="Logo" className='w-36 cursor-pointer'/>
                <h1 className='text-center text-3xl font-semibold text-gray-700'> Food App</h1>
                </Link>
            </div>
            <div className='flex items-center justify-end space-x-6'>
                <Link to='/login'>
                <button className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Login</button>
                </Link>
                <Link to='/registro'>
                <button className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Register</button>
                </Link>
                <Link to='/notfound'>
                <button className='bg-primary px-6 text-white rounded-full transition duration-700 hover:scale-105'>Contato</button>
                </Link>
            </div>
        </nav>

    </header>
  )
}

export default Navbar
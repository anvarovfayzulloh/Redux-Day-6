import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-bold">Home</Link>
        <ul className="flex space-x-6">
          <Link to="/register">
            <p  className="text-white hover:text-gray-200 transition duration-300">Register</p>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Nav

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from "../redux/register-slice"

const Register = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, age }));
    setName('');
    setAge('');
  }

  return (
    <div className="flex pt-[160px] justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white h-[290px] p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Register Student</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"  onChange={(e) => setName(e.target.value)}  value={name}  type="text"  placeholder="Enter Name"  />
          <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"  onChange={(e) => setAge(e.target.value)}  value={age}  type="text"  placeholder="Enter Age"  />
          <button 
            className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300" 
            type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register

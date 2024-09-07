import React from 'react'
import { useSelector } from 'react-redux'

const Groups = () => {

  const users = useSelector(state => state.register.user)

  return (
    <div className='flex py-[15px] items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600' >
      <section className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">N66 group</h2>
      {
        users.length > 0 ? (
          users.map((user, i) => (
            <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md" key={i}>
              <p className="text-xl font-semibold text-gray-700">Name: {user.name}</p>
              <p className="text-lg text-gray-600">Age: {user.age}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No users registered yet.</p>
        )
      }
    </section>
    </div>
  )
}

export default Groups
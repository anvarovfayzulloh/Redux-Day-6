import React from 'react';
import { useSelector } from 'react-redux';

const Groups = () => {
  const users = useSelector(state => state.register.user);

  return (
    <div className='flex py-[15px] items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600'>
      <section className="max-w-3xl w-full mx-auto bg-white p-8 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">N66 group</h2>
        {
          users.length > 0 ? (
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-2xl">№</th>
                  <th className="py-2 px-4 border-b text-2xl">Name</th>
                  <th className="py-2 px-4 border-b text-2xl">Age</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i}>
                    <td className="py-2 px-4 border-b text-center">{i + 1}</td>
                    <td className="py-2 px-4 border-b text-center capitalize">{user.name}</td>
                    <td className="py-2 px-4 border-b text-center">{user.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500 text-lg">No users registered yet.</p>
          )
        }
      </section>
    </div>
  );
};

export default Groups;

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const AllMarchent = () => {
    const [search, setSearch] = useState("");

  // const dummyMerchants = [
  //   { _id: "1", name: "Rahim Store", email: "rahim@store.com", role: "marchent" },
  //   { _id: "2", name: "Karim Fashion", email: "karim@shop.com", role: "marchent" },
  //   { _id: "3", name: "Sakib Electronics", email: "sakib@tech.com", role: "marchent" },
  //   { _id: "4", name: "Jubayer Mart", email: "jubayer@mart.com", role: "marchent" },
  // ];
  let [allUsers,setAllUsers] = useState([])
    useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_URL}/api/v1/api/auth/allusers`, {
        withCredentials: true,
      }).then((res) => {
        setAllUsers(res.data.data)
      }).catch((err) => {
        console.error(err);
      })
    }, []);
    let users = allUsers.filter((u) => u.role === "marchent");
   
  const filteredMerchants = users.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="p-6 min-h-screen bg-gray-100">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Merchants</h1>

        <input
          type="text"
          placeholder="Search merchant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded-lg w-64"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredMerchants.map((m) => (
              <tr key={m._id} className="border-t">
                <td className="p-4">{m.name}</td>
                <td className="p-4">{m.email}</td>

                <td className="p-4">
                  <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                    {m.role}
                  </span>
                </td>

                <td className="p-4 flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded">
                    View
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
    </>
  )
}

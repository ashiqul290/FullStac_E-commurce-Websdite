import axios from "axios";
import React, { useEffect, useState } from "react";

export const AllUser = () => {
  const [search, setSearch] = useState("");

  // const dummyUsers = [
  //   { _id: "1", name: "Rahim", role: "user", email: "rahim@gmail.com" },
  //   { _id: "2", name: "Karim", role: "user", email: "karim@gmail.com" },
  //   { _id: "3", name: "Sakib", role: "user", email: "sakib@gmail.com" },
  //   { _id: "4", name: "Jubayer", role: "user", email: "jubayer@gmail.com" },
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
    let users = allUsers.filter((u) => u.role === "user");
   

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Users</h1>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user._id} className="border-t hover:bg-gray-50">

                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4 text-gray-600">{user.email}</td>
                  <td className="p-4">  <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                    {user.role}
                  </span></td>


                   <td className="p-4 flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded">
                    View
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded">
                    Delete
                  </button>
                </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-500">
                  No user found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};
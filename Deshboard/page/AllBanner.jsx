import axios, { all } from "axios";
import React, { use, useEffect, useState } from "react";

// const dummyBanners = [
//   {
//     _id: "1",
//     image:
//       "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200",
//   },
//   {
//     _id: "2",
//     image:
//       "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200",
//   },
//   {
//     _id: "3",
//     image:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
//   },
// ];

export default function AllBanner() {
  let [allBanner,setAllBanner] = useState([])
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/v1/api/banner/all-banners`, {
      withCredentials: true,
    }).then((res) => {
      setAllBanner(res.data.data)
    }).catch((err) => {
      console.error(err);
    })
  }, []);
 

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Banners</h1>

        <button className="bg-black text-white px-4 py-2 rounded-lg">
          + Add Banner
        </button>
      </div>

      {/* Banner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {allBanner.map((banner) => (
          <div
            key={banner._id}
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
          >

            {/* Image */}
            <img
              src={banner.image}
              alt="banner"
              className="w-full h-40 object-cover"
            />

            {/* Actions */}
            <div className="p-4 flex justify-between items-center">
              <p className="text-sm text-gray-500">
                Banner ID: {banner._id}
              </p>

              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white text-sm rounded">
                  Delete
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
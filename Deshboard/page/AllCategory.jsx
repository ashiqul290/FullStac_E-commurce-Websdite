import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const AllCategory = () => {

// const dummyCategories = [
//   {
//     _id: "1",
//     name: "Clothing",
//     discount: 20,
//     image:
//       "https://images.unsplash.com/photo-1521334884684-d80222895322?w=500",
//     subcategory: ["Tshirt", "Shirt", "Jeans"],
//   },
//   {
//     _id: "2",
//     name: "Electronics",
//     discount: 10,
//     image:
//       "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500",
//     subcategory: ["Mobile", "Laptop", "Watch"],
//   },
//   {
//     _id: "3",
//     name: "Shoes",
//     discount: 15,
//     image:
//       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
//     subcategory: ["Sneakers", "Formal", "Sports"],
//   },
// ];

 let [allCategory,setAllCategory] = useState([])
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/v1/api/category/all-category`, {
      withCredentials: true,
    }).then((res) => {
      setAllCategory(res.data.data)
    }).catch((err) => {
      console.error(err);
    })
  }, []);

  return (
    <>
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Category</h1>

        <button className="bg-black text-white px-4 py-2 rounded-lg">
          + Add Sub Category
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {allCategory.map((cat) => (
          <div
            key={cat._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >

            {/* Image */}
            <img
              src={cat.image}
              alt=""
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4">

              {/* Name + Discount */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{cat.name}</h2>

                {
                  cat.discount > 0 && (
                    <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded">
                      {cat.discount}% OFF
                    </span>
                  )
                }
              </div>

              {/* Subcategories
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.subcategory.map((sub, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {sub}
                  </span>
                ))}
              </div> */}

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-blue-500 text-white py-1 rounded">
                  Edit
                </button>
                <button className="flex-1 bg-red-500 text-white py-1 rounded">
                  Delete
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>

    {/* <div className="px-3">
        <h1 className="text-2xl font-bold mb-6">All Sub Category</h1>
          <div className=" border rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold">Saree</h3>

          </div>
    </div> */}
</>
  );
}

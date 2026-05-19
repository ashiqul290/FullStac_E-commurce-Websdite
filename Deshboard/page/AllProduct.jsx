import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export const AllProduct = () => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/v1/api/product/all-product`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllProducts(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/v1/api/product/delete-product/${id}`,
        {
          withCredentials: true,
        },
      );

      // UI থেকে remove (instant update)
      setAllProducts((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  const handleEdit = (item) => {
  setSelectedProduct(item);
  setIsModalOpen(true);
};
useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/api/v1/api/category/all-category`)
    .then((res) => {
      setCategories(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

const handleUpdate = async () => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/v1/api/product/update-product/${selectedProduct._id}`,
      selectedProduct,
      { withCredentials: true }
    );

    setAllProducts((prev) =>
      prev.map((item) =>
        item._id === selectedProduct._id ? res.data.data : item
      )
    );

    setIsModalOpen(false);
  } catch (err) {
    console.log(err);
  }
};
  return (
    <>
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        {/* Header */}
        <div className="flex px-4 relative mt-2 justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">All Products</h1>

          {/* Search */}
          <input
            type="text"
            placeholder="Search product title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
            className="border border-gray-400 px-3 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Search dropdown */}
          {isFocused && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="flex justify-between p-3 border-b hover:bg-gray-50"
                  >
                    <span>{product.title}</span>
                    <span>${product.price}</span>
                  </div>
                ))
              ) : (
                <div className="p-3 text-gray-500">No product found</div>
              )}
            </div>
          )}
        </div>

        {/* TABLE */}
        <table className="w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {allProducts.map((item) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">
                {/* IMAGE FIXED */}
                <td className="p-4">
                  <img
                    src={item.image?.[0]?.url}
                    alt="product"
                    className="w-14 h-14 object-cover rounded-lg"
                  />
                </td>

                <td className="p-4 font-medium">{item.title}</td>
                <td className="p-4">${item.price}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      item.stock > 0
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.stock > 0 ? item.stock : "Out of Stock"}
                  </span>
                </td>

                <td className="p-4 flex gap-2">
                 <button
  onClick={() => handleEdit(item)}
  className="flex-1 bg-blue-500 text-white py-1 rounded cursor-pointer"
>
  Edit
</button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

{isModalOpen && selectedProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

    <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">

      <h2 className="text-xl font-bold mb-4">Update Product</h2>

      {/* Title */}
      <input
        type="text"
        value={selectedProduct.title || ""}
        onChange={(e) =>
          setSelectedProduct({
            ...selectedProduct,
            title: e.target.value,
          })
        }
        className="w-full border p-2 mb-3 rounded"
        placeholder="Title"
      />

      {/* Price */}
      <input
        type="number"
        value={selectedProduct.price || ""}
        onChange={(e) =>
          setSelectedProduct({
            ...selectedProduct,
            price: e.target.value,
          })
        }
        className="w-full border p-2 mb-3 rounded"
        placeholder="Price"
      />

      {/* Discount Price */}
      <input
        type="number"
        value={selectedProduct.descountprice || ""}
        onChange={(e) =>
          setSelectedProduct({
            ...selectedProduct,
            descountprice: e.target.value,
          })
        }
        className="w-full border p-2 mb-3 rounded"
        placeholder="Discount Price"
      />

      {/* SKU */}
      <input
        type="text"
        value={selectedProduct.sku || ""}
        onChange={(e) =>
          setSelectedProduct({
            ...selectedProduct,
            sku: e.target.value,
          })
        }
        className="w-full border p-2 mb-3 rounded"
        placeholder="SKU"
      />

      {/* Description */}
      <textarea
        value={selectedProduct.discription || ""}
        onChange={(e) =>
          setSelectedProduct({
            ...selectedProduct,
            discription: e.target.value,
          })
        }
        className="w-full border p-2 mb-3 rounded"
        placeholder="Description"
      />

      {/* Category select */}
    <select
  value={selectedProduct.category}
  onChange={(e) =>
    setSelectedProduct({
      ...selectedProduct,
      category: e.target.value,
    })
  }
  className="w-full border p-2 mb-3 rounded"
>
  <option>Select Category</option>
  {categories.map((cat) => (
    <option key={cat._id} value={cat._id}>
      {cat.name}
    </option>
  ))}
</select>

      {/* Variant Type */}
      <select
        value={selectedProduct.variantType || "singlevariant"}
        onChange={(e) =>
          setSelectedProduct({
            ...selectedProduct,
            variantType: e.target.value,
          })
        }
        className="w-full border p-2 mb-3 rounded"
      >
        <option value="singlevariant">Single Variant</option>
        <option value="multivariant">Multi Variant</option>
      </select>

      {/* Buttons */}
      <div className="flex justify-between mt-4">

        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>

        <button
          onClick={handleUpdate}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>

      </div>

    </div>
  </div>
)}

        {/* CARD VIEW */}
        <h2 className="text-xl font-semibold mt-10 mb-4 px-4">Product Cards</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {allProducts.map((item) => (
            <div key={item._id} className="bg-white shadow rounded-lg p-4">
              {/* IMAGE FIXED */}
              <img
                src={item.image?.[0]?.url}
                alt=""
                className="h-60 w-full object-cover rounded"
              />

              <h5 className="text-gray-500 mt-2">{item.category?.name}</h5>

              <h3 className="font-bold">{item.title}</h3>
              <p>${item.price}</p>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 bg-blue-500 text-white py-1 rounded cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

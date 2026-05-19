import axios from "axios";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

const AddCategory = () => {
  const [form, setForm] = useState({
    name: "",
    discount: null,
    subcategory: "",
    image: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ FIX: image preview support
  const handleFile = (e) => {
    const file = e.target.files[0];

    setForm({
      ...form,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
          const formData = new FormData();
    
          if (form.image) {
            formData.append("image", form.image);
          }
    
          if (form.name) {
            formData.append("name", form.name);
          }
          if (form.discount) {
            formData.append("discount", form.discount);
          }
          if (form.subcategory) {
            formData.append("subcategory", form.subcategory);
          }
    
          const res =  axios.post(
            `${import.meta.env.VITE_API_URL}/api/v1/api/category/add-category`,
            formData,
            {
              withCredentials: true,
            }
          );
    
          alert("Category added successfully");
        } catch (error) {
          alert("Failed to add category");
          console.error(error);
        }
  };

  return (
    <div className="w-full p-6 rounded-xl shadow">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Add Category</h1>

      {/* Form Box */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <label className="font-medium ml-1">Category Name</label>
            <input
              name="name"
              onChange={handleChange}
              className="border mt-2 w-full py-2 rounded px-2"
              placeholder="Enter Category Name"
            />
          </div>

          <div className="w-full">
            <label className="font-medium ml-1">Discount</label>
            <input
              name="discount"
              type="number"
              onChange={handleChange}
              className="border mt-2 w-full py-2 rounded px-2"
              placeholder="Enter Discount..."
            />
          </div>
          <div className="w-full">
            <label className="font-medium ml-1">Sub Category</label>
           <select name="subcategory" id="" onChange={handleChange} className="border mt-2 w-full py-2 rounded px-2">
              <option value="">Select Sub Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
            </select>
          </div>
        </div>
      </div>

      {/* Image Upload */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Category Image</h2>

        <div className="relative border-2 border-dashed rounded-xl h-40 flex items-center justify-center text-gray-500">

          {/* input */}
          <input
            type="file"
            onChange={handleFile}
            className="absolute w-full h-full opacity-0 cursor-pointer"
          />

          <div className="flex flex-col items-center pointer-events-none">
            <FiUpload className="text-3xl" />
            <p>Click or drag & drop</p>
          </div>
        </div>

        {/* ✅ Preview */}
        {form.image && (
          <div className="mt-4">
            <p className="text-sm mb-2">Preview:</p>

            <img
              src={URL.createObjectURL(form.image)}
              alt="preview"
              className="w-full h-40 object-cover rounded-lg shadow"
            />
          </div>
        )}
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 font-bold bg-blue-600 text-white rounded-lg"
        >
          Publish Category
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
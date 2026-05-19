import React, { useEffect } from "react";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import axios from "axios";

export const AddProduct = () => {
  const [stock, setStock] = useState(1);
  const [images, setImages] = useState([]);
  const [variantType, setVariantType] = useState("singlevariant");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    discountprice: "",
    stock: "",
    description: "",
    sku: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFile = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };
  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  const handleSizeToggle = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:5100/api/v1/api/category/all-category")
      .then((res) => setCategories(res.data.data));
  }, []);
  const handleSubmit = async () => {
    try {
      // validation
      if (variantType === "multivariant" && selectedSizes.length === 0) {
        alert("Please select at least one size");
        return;
      }

      const data = new FormData();

      data.append("title", formData.title);
      data.append("price", formData.price);
      data.append("discountprice", formData.discountprice);
      data.append("stock", formData.stock);
      data.append("description", formData.description);
      data.append("sku", formData.sku);
      data.append("variantType", variantType);
      data.append("category", category);

      images.forEach((img) => {
        data.append("images", img);
      });

      const res = await axios.post(
        "http://localhost:5100/api/v1/api/product/add-product",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      const result = res.data;

      console.log("PRODUCT RESPONSE:", result);

      // safe product id extraction
      const productId =
        result?.data?._id || result?.product?._id || result?._id;

      if (!productId) {
        throw new Error("Product ID not found in response");
      }

      // variant create
      if (variantType === "multivariant") {
       await axios.post(
  "http://localhost:5100/api/v1/api/variant/add-variant",
  {
    product: productId,
    sku: formData.sku,
    size: selectedSizes,
  }
);
      }

      console.log("SUCCESS DONE");
    } catch (error) {
      console.log("ERROR:", error.message);
    }
  };

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Add Product</h1>
          <p className="text-sm text-gray-500">Home &gt; Add Product</p>
        </div>

        {/* Product Description */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Products Description</h2>
          <hr className=" text-gray-200 py-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full">
              <label className=" font-medium ml-1"> Product Name</label>
              <input
                name="title"
                onChange={handleChange}
                className=" border mt-2 w-full py-2 border-gray-200 outline-none rounded-[10px] px-2"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="">
              <label className=" font-medium ml-1"> Product SKU</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border mt-2 w-full py-2 border-gray-200 text-gray-500 outline-none focus:text-black rounded-[10px] px-2"
              >
                <option className=" ">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label className=" font-medium ml-1"> Price</label>
              <input
                name="price"
                onChange={handleChange}
                className=" border mt-2 w-full py-2 border-gray-200 outline-none rounded-[10px] px-2"
                placeholder="Enter Price..."
              />
            </div>
            <div className="w-full">
              <label className=" font-medium ml-1">Discount Price</label>
              <input
                name="discountprice"
                onChange={handleChange}
                type="number"
                className=" border mt-2 w-full py-2 border-gray-200 outline-none rounded-[10px] px-2"
                placeholder="Enter Discount Price..."
              />
            </div>

            <div className="w-full col-span-2">
              <label className=" font-medium ml-1"> Product Description</label>
              <textarea
                name="description"
                onChange={handleChange}
                className=" col-span-2 h-28 border mt-2 w-full py-2 border-gray-200  text-black outline-none focus:border rounded-[10px] px-2"
                placeholder="Description"
              />
            </div>
          </div>
        </div>

        {/* Pricing & Availability */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Stock & Varient</h2>

          <div className=" flex gap-6 mb-6">
            <div className=" w-full">
              <label className=" font-medium ml-1"> Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className=" border mt-2 w-full py-2 border-gray-200 outline-none rounded-[10px] px-2"
                placeholder="Enter Stock Quantity"
              />
            </div>
            <div className=" w-full">
              <label className=" font-medium ml-1"> Variant Type</label>
              <select
                value={variantType}
                onChange={(e) => setVariantType(e.target.value)}
                className="border mt-2 w-full py-2 border-gray-200 text-gray-500 outline-none focus:text-black rounded-[10px] px-2"
              >
                <option value="singlevariant">singlevariant</option>
                <option value="multivariant">multivariant</option>
              </select>
            </div>
          </div>
          <div
            className={`${variantType === "multivariant" ? "flex" : "hidden"} gap-6 mb-6`}
          >
            <div className="">
              <label className=" font-medium ml-1"> Variant Options</label>
              <div className="mt-2 flex gap-4">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeToggle(size)}
                    className={`px-4 py-2 rounded-lg text-2xl font-bold 
        ${
          selectedSizes.includes(size)
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700"
        }
      `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* <div className="">
              <label className=" font-medium ml-1"> Color</label>
              <div className="mt-2 flex gap-4">
                <button className="w-10 h-10 focus:border-2 focus:border-black bg-blue-600 rounded-full "></button>
                <button className="w-10 h-10 focus:border-2 focus:border-black bg-red-600 rounded-full "></button>
                <button className="w-10 h-10 focus:border-2 focus:border-black bg-green-600 rounded-full "></button>
                <button className="w-10 h-10 focus:border-2 focus:border-black bg-yellow-400 rounded-full "></button>
                <button className="w-10 h-10 focus:border-2 focus:border-black bg-purple-600 rounded-full "></button>

              </div>
            </div> */}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Product Images</h2>

          {/* Upload Box */}
          <div className="relative border-2 border-dashed rounded-xl h-40 flex items-center justify-center text-gray-500 hover:text-blue-600 transition">
            <input
              type="file"
              multiple
              onChange={handleFile}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />

            <div className="flex flex-col items-center pointer-events-none">
              <FiUpload className="text-3xl mb-2" />
              <p>Click or drag & drop images</p>
            </div>
          </div>

          {/* Preview Grid */}
          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden shadow"
                >
                  <img
                    src={URL.createObjectURL(img)}
                    className="w-full h-28 object-cover"
                  />

                  {/* Remove Button */}
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-center ">
          <button
            onClick={handleSubmit}
            className=" cursor-pointer px-6 py-2 font-bold bg-blue-600 text-white rounded-lg"
          >
            Publish Product
          </button>
        </div>
      </div>
    </>
  );
};

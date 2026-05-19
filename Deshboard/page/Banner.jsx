import axios from "axios";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

export const Banner = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleFile = (e) => {
    setImage(e.target.files[0]);
    setUrl(""); // file দিলে URL clear
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
    setImage(null); // URL দিলে file clear
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      if (image) {
        formData.append("image", image);
      }

      if (url) {
        formData.append("url", url);
      }

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/api/banner/add-banner`,
        formData,
        {
          withCredentials: true,
        }
      );

      alert("Banner uploaded successfully");
    } catch (error) {
      alert("Failed to upload banner");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">Add Banner</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Upload */}
          <div>
            <label className="font-medium">Banner Image</label>

            <div className="relative border-2 border-dashed rounded-xl h-48 mt-3 flex items-center justify-center">
              <input
                type="file"
                onChange={handleFile}
                accept="image/*"
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />

              <div className="flex flex-col items-center">
                <FiUpload className="text-3xl mb-2" />
                <p className="text-sm">Click or drag image</p>
              </div>
            </div>

            {/* URL */}
            <div className="w-full mt-5">
              <label className="font-medium ml-1">Banner URL</label>
              <input
                value={url}
                onChange={handleUrl}
                className="border mt-2 w-full py-2 rounded px-2"
                placeholder="Enter Banner URL"
              />
            </div>
          </div>

          {/* Preview */}
          {(image || url) && (
            <div className="mt-4">
              <p className="text-sm mb-2">Preview:</p>
              <img
                src={image ? URL.createObjectURL(image) : url}
                alt="preview"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full cursor-pointer bg-black text-white py-2 rounded-lg"
          >
            Publish Banner
          </button>
        </form>
      </div>
    </div>
  );
};
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

import { IoGridSharp, IoSearch } from "react-icons/io5";
import { MdFormatListNumbered } from "react-icons/md";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Shop_list = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 20;

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=160")
      .then((res) => setAllProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = allProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-28.25 pb-30 bg-white">
      <Container>
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[25px] text-primary font-bold">
              Organic Fresh Food Fresh Juices
            </h2>

            <p className="text-[15px] text-[#666E77] mt-4">
              About {allProducts.length} results
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-4 gap-7.5 mt-12.5"
          >
            {currentProducts.map((product, index) => (

             <Link href={'/single_shop?id=' + product.id} key={index}>
              <div
                key={index}
                className="bg-white pb-5 shadow-xl relative overflow-hidden cursor-pointer group"
              >
                {/* Hover Area
                <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full opacity-0 group-hover:opacity-100 bg-white/70 duration-300 z-50">
                  <h3 className="absolute text-[14px] text-white top-2 right-2 py-1 px-2.5 bg-[#699405] rounded-br-xl rounded-tl-xl">
                    {product.discountPercentage}%
                  </h3>

                  <div className="flex items-center gap-5">
                    <div className="p-2.5 bg-[#699405] text-white rounded-full">
                      <FaRegHeart />
                    </div>

                    <div className="p-2.5 bg-[#699405] text-white rounded-full">
                      <PiShoppingCart />
                    </div>

                    <div className="p-2.5 bg-[#699405] text-white rounded-full">
                      <IoMdSearch />
                    </div>
                  </div>
                </div> */}

                {/* Product Image */}
                <Image
                  width={300}
                  height={300}
                  src={product.thumbnail}
                  alt={product.title}
                />

                {/* Product Info */}
                <div>
                  <div className="flex gap-1 items-center justify-center mt-5">
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-gray-600" />

                    <h4>({product.rating})</h4>
                  </div>

                  <h3 className="overflow-hidden h-13 text-[16px] text-primary font-bold text-center mt-2 mb-3">
                    {product.title}
                  </h3>

                  <h4 className="text-[14px] text-[#223645] text-center">
                    ${product.price.toFixed(2)}
                  </h4>
                </div>
              </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-16">
          {/* Prev Button */}
          <button
            onClick={() =>
              currentPage > 1 && handlePageChange(currentPage - 1)

            }
            className="p-3 rounded-full hover:bg-[#699405] hover:text-white duration-300"
          >
            <FaArrowLeftLong />
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`py-2 px-4 rounded-full border duration-300 ${currentPage === index + 1
                  ? "bg-[#699405] text-white border-[#699405]"
                  : "border-gray-300 hover:bg-[#699405] hover:text-white"
                }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              currentPage < totalPages &&
              handlePageChange(currentPage + 1)
            }
            className="p-3 rounded-full hover:bg-[#699405] hover:text-white duration-300"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Shop_list;
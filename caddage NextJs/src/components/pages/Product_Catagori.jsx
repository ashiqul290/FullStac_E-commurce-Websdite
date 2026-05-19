"use client"
import React, { useEffect } from 'react'
import Container from '../common/Container'
import { IoGridSharp } from "react-icons/io5";
import { MdFormatListNumbered } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Image from 'next/image'
import pro from '../../../public/images/pro.png';
import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import Link from 'next/link';
import axios from 'axios';
import { a } from 'framer-motion/client';


const Product_Catagoris = () => {
const [categories, setCategories] = useState([]);
const [filterProduct, setFilterProduct] = useState([]);
const [allProducts, setAllProducts] = useState([]);

useEffect(() => {
  axios.get('https://dummyjson.com/products?limit=160')
    .then(res => {

      const products = res.data.products;
      setAllProducts(products);

      const categoryData = {};

      products.forEach(product => {

        const category = product.category;

        if (!categoryData[category]) {
          categoryData[category] = {
            category: category,
            image: product.thumbnail, // first product image
            totalProduct: 1,
          };
        } else {
          categoryData[category].totalProduct += 1;
        }

      });

      // object → array
      const finalCategories = Object.values(categoryData);

      setCategories(finalCategories);

      // console.log(finalCategories);

    })
    .catch(err => console.log(err));

}, []);

  // const categories = [
  //   { name: "Allium", count: 5 },
  //   { name: "Beverages", count: 5 },
  //   { name: "Dairy Bread & Eggs", count: 6 },
  //   { name: "Fruits & Vegetables", count: 7 },
  //   { name: "Grocery & Staples", count: 7 },
  //   { name: "Health & Wellness", count: 3 },
  //   { name: "Leafy Green", count: 4 },
  //   { name: "Package Foods", count: 5 },
  //   { name: "Uncategorized", count: 36 },
  // ];

  const [activeCategory, setActiveCategory] = useState(null);

 
  const min = 0;
  const max = 8000;

  const [minVal, setMinVal] = useState(1000);
  const [maxVal, setMaxVal] = useState(6000);

  const getPercent = (value) => {
    return ((value - min) / (max - min)) * 100;
  };


  let handleCategory = (category) => {
   const filtered = allProducts.filter(
    product => product.category === category
  );
  setFilterProduct(filtered);
  }
  console.log(filterProduct)
  return (
    <>
      <section className='pt-28.25 pb-30 bg-white'>
        <Container>
          <div className="flex justify-between items-center ">
            <div className="">
              <h2 className='text-[25px] text-primary font-bold font-inter leading-[100%]'>Organic Fresh Food Fresh Juices</h2>
              <p className='text-[15px] text-[#666E77] font-normal font-nunito mt-4'>About 9,620 results (0.62 seconds) </p>
            </div>
            <div className=" flex justify-end gap-6.5 items-center">
              <div className="flex items-center gap-2">
                <h3>Per Page:</h3>
                <select className='py-1 px-2 border outline-none' name="" id="">
                  <option value="06">08</option>
                  <option value="12">12</option>
                  <option value="20">20</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <h3>Sort By:</h3>
                <select className='py-1 px-2 border outline-none' name="" id="">
                  <option value="Best Match">Best Match</option>
                  <option value="Good Match">Good Match</option>
                  <option value="Match">Match</option>
                </select>
              </div>

              <div className=" flex gap-2">

                <div className="p-2.5 bg-white cursor-pointer shadow-xl duration-300 ease-in-out hover:text-[#699405]">
                  <IoGridSharp />
                </div>
                <div className="p-2.5 bg-white cursor-pointer shadow-xl duration-300 ease-in-out hover:text-[#699405]">
                  <MdFormatListNumbered />
                </div>


              </div>
              <div className="">
              
                 <label className='flex items-center' htmlFor="">
                  < input type="Search" className=' w-49 p-2 border border-[#699405] outline-none  mt-2'placeholder=' Search'  />
                 <button className='bg-[#699405] border border-[#699405] text-white font-normal font-nunito py-3 px-4  mt-2 cursor-pointer leading-[150%] duration-300 ease-in-out hover:bg-white hover:text-[#699405] '><IoSearch /></button>
                 </label>
              </div>

            </div>
          </div>

          <div className=" lg:flex justify-between gap-9 mt-13.5 ">
            <div className="lg:w-[30%] w-full">
              <div className="py-12.5 px-12 bg-white shadow-xl ">
                <div className=" border-b border-[#272D61] ">
                  <h2 className='text-[20px] text-primary font-bold font-inter '>Product Catagoris</h2>
    

                  <ul className="space-y-3 my-5">
                    {categories.map((item, index) => {
                      const isActive = activeCategory === item.category;

                      return (
                        <li  onClick={()=>handleCategory(item.category)} key={index}>
                          <label className="flex items-center gap-2 cursor-pointer group">

                            {/* Hidden Checkbox */}
                            <input
                              type="checkbox"
                              checked={isActive}
                              onChange={() => setActiveCategory(item.category)}
                              className="hidden"
                            />

                            {/* Custom Checkbox */}
                            <div
                              className={`w-5 h-5 flex items-center justify-center rounded-md border-2
                  transition-all duration-300 ease-in-out
                  ${isActive
                                  ? "bg-[#80B500] border-[#80B500] scale-110"
                                  : "border-gray-400 group-hover:border-[#80B500]"
                                }`}
                            >
                              {isActive && (
                                <svg
                                  className="w-3 h-3 text-white animate-[fadeIn_.2s_ease-in]"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </div>

                            {/* Text */}
                            <span
                              className={`transition-colors duration-200 select-none
                  ${isActive
                                  ? "text-[#80B500] font-medium"
                                  : "text-gray-700 group-hover:text-[#80B500]"
                                }`}
                            >
                              {item.category} ({item.totalProduct})
                            </span>

                          </label>
                        </li>
                      );
                    })}
                  </ul>



                </div>
          
                


                     <div className="border-b border-[#272D61] pb-8">

      <h2 className="text-[20px] text-primary font-bold font-inter my-5 pb-5 border-b-2 border-[#699405]">
        Price/SQ Ft Filter
      </h2>

      <p className="text-[14px] text-[#272D61] font-nunito font-normal mb-6">
        From ${minVal} to ${maxVal}
      </p>

      <div className="relative w-full h-2 bg-gray-200 rounded-full">

        {/* Active Range Track */}
        <div
          className="absolute h-2 bg-[#699405] rounded-full"
          style={{
            left: `${getPercent(minVal)}%`,
            width: `${getPercent(maxVal) - getPercent(minVal)}%`,
          }}
        />

        {/* Min Range */}
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(e) =>
            setMinVal(Math.min(Number(e.target.value), maxVal - 100))
          }
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none slider-thumb"
        />

        {/* Max Range */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) =>
            setMaxVal(Math.max(Number(e.target.value), minVal + 100))
          }
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none slider-thumb"
        />
      </div>

      {/* Custom Thumb Style */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #80B500;
          cursor: pointer;
          pointer-events: auto;
          border: 3px solid white;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }

        input[type="range"]::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #80B500;
          cursor: pointer;
          pointer-events: auto;
          border: none;
        }
      `}</style>
    </div>



                <div className="border-b border-[#272D61]">
                  <h2 className='text-[20px] text-primary font-bold font-inter my-5  '>Filter By Color</h2>
                  <div className="flex items-center gap-6.5 ">
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-3.5 bg-[#5E37FF] rounded-full"></div>
                      <h4 className='text-[14px] text-[#272D61] font-nunito font-normal'>Blue</h4>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-3.5 bg-[#FF9437] rounded-full"></div>
                      <h4 className='text-[14px] text-[#272D61] font-nunito font-normal'>Orange</h4>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-3.5 bg-[#FFBF95] rounded-full"></div>
                      <h4 className='text-[14px] text-[#272D61] font-nunito font-normal'>Brown</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-6.5 mt-4.5 mb-5">
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-3.5 bg-[#33D221] rounded-full"></div>
                      <h4 className='text-[14px] text-[#272D61] font-nunito font-normal'>Green</h4>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-3.5 bg-[#E248FF] rounded-full"></div>
                      <h4 className='text-[14px] text-[#272D61] font-nunito font-normal'>Purple</h4>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-3.5 bg-[#26CBFF] rounded-full"></div>
                      <h4 className='text-[14px] text-[#272D61] font-nunito font-normal'>Sky</h4>
                    </div>
                  </div>


                </div>
                <div className="">
                  <h2 className='text-[20px] text-primary font-bold font-inter my-5  '>Releated Tags</h2>
                  <div className=" ">
                    <div className="flex items-center gap-3">
                      <h3 className='py-1.5 px-5 bg-white border border-[#699405] rounded-full text-[12px] text-[#699405] font-nunito font-normal duration-300 ease-in-out hover:bg-[#699405] hover:text-white'>Breads</h3>
                      <h3 className='py-1.5 px-5 bg-white border border-[#699405] rounded-full text-[12px] text-[#699405] font-nunito font-normal duration-300 ease-in-out hover:bg-[#699405] hover:text-white'>healthy</h3>
                      <h3 className='py-1.5 px-5 bg-white border border-[#699405] rounded-full text-[12px] text-[#699405] font-nunito font-normal duration-300 ease-in-out hover:bg-[#699405] hover:text-white'>organic</h3>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <h3 className='py-1.5 px-5 bg-white border border-[#699405] rounded-full text-[12px] text-[#699405] font-nunito font-normal duration-300 ease-in-out hover:bg-[#699405] hover:text-white'>tomato</h3>
                      <h3 className='py-1.5 px-5 bg-white border border-[#699405] rounded-full text-[12px] text-[#699405] font-nunito font-normal duration-300 ease-in-out hover:bg-[#699405] hover:text-white'>juices</h3>
                      <h3 className='py-1.5 px-5 bg-white border border-[#699405] rounded-full text-[12px] text-[#699405] font-nunito font-normal duration-300 ease-in-out hover:bg-[#699405] hover:text-white'>natural</h3>
                    </div>

                  </div>



                </div>
              </div>
            </div>
            <div className="lg:w-[70%] w-full">
             
                {
                  activeCategory ? filterProduct.map((item)=>(
                     <Link href="/Single_Shop">
                <div className="">
                  <div className="flex items-center gap-8 bg-white shadow-xl p-3.5 border border-white duration-300 ease-in-out hover:border hover:border-[#699405] cursor-pointer">
                    <div className="">
                      <Image className='' width={200} height={200}  src={item.thumbnail} alt="pro" />

                    </div>
                    <div className="">
                      <h2 className=' text-[22px] text-primary font-bold font-inter leading-[100%]'>{item.title}</h2>
                      <div className=" flex items-center gap-2 mt-3.5">
                        <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-[#699405]'>${item.price.toFixed(2)} 
                          {/* <span className='text-[14px] text-[#FE1717] line-through ml-2.5 '>$58.00</span> */}
                          </h4>
                        <div className="flex gap-1 items-center ">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <h4>({item.minimumOrderQuantity})</h4>
                        </div>
                      </div>
                      <p className='text-[16px] text-[#666E77] font-normal font-nunito mt-3'>{item.description}</p>
                      <div className="flex items-center gap-5 mt-3.5">
                        <div className="p-2.5 bg-[#699405] text-white border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]">
                          <FaRegHeart />
                        </div>
                        <div className="p-2.5 bg-[#699405] text-white border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]">
                          <PiShoppingCart />
                        </div>
                        <div className="p-2.5 bg-[#699405] text-white border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]">
                          <IoMdSearch />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </Link>
                  )): allProducts.map((item) => (
                      <Link href="/Single_Shop">
                <div className="">
                  <div className="flex items-center gap-8 bg-white shadow-xl p-3.5 border border-white duration-300 ease-in-out hover:border hover:border-[#699405] cursor-pointer">
                    <div className="">
                      <Image className='' width={200} height={200}  src={item.thumbnail} alt="pro" />

                    </div>
                    <div className="">
                      <h2 className=' text-[22px] text-primary font-bold font-inter leading-[100%]'>{item.title}</h2>
                      <div className=" flex items-center gap-2 mt-3.5">
                        <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-[#699405]'>${item.price.toFixed(2)}
                          {/* <span className='text-[14px] text-[#FE1717] line-through ml-2.5 '>$58.00</span> */}
                           </h4>
                        <div className="flex gap-1 items-center ">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <h4>({item.minimumOrderQuantity})</h4>
                        </div>
                      </div>
                      <p className='text-[16px] text-[#666E77] font-normal font-nunito mt-3'>{item.description}</p>
                      <div className="flex items-center gap-5 mt-3.5">
                        <div className="p-2.5 bg-[#699405] text-white border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]">
                          <FaRegHeart />
                        </div>
                        <div className="p-2.5 bg-[#699405] text-white border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]">
                          <PiShoppingCart />
                        </div>
                        <div className="p-2.5 bg-[#699405] text-white border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]">
                          <IoMdSearch />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </Link>
                  ))

                }
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Product_Catagoris

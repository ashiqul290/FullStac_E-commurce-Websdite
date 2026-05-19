import React from "react";
import Image from "next/image";
import img from "../../../public/images/img.png";
import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";

const Drinks = ({ item }) => {
  return (
    <>
      <div className="">
        <div className=" grid grid-cols-4 justify-between gap-7.5 mt-12.5">
          {item.map((product) => (
            <div className="bg-white pb-5 shadow-xl relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-white after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer">
              <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                <h3 className=" absolute text-[14px] text-white font-normal font-nunito top-2 right-2 py-1 px-2.5 bg-[#699405] rounded-br-xl rounded-tl-xl ">
                  {product.discountPercentage}%
                </h3>
                <div className="flex items-center gap-5">
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
              <Image className=" " width={300} height={300} src={product.thumbnail} alt="right" />
              <div className="  ">
                <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                  <FaStar className=" text-amber-400"/>
                  <FaStar className=" text-amber-400"/>
                  <FaStar className=" text-amber-400"/>
                  <FaStar className=" text-amber-400"/>
                  <FaStar className=" text-gray-600"/>
                  <h4>({product.rating.count})</h4>
                </div>
                <h3 className=" overflow-hidden h-13 text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3">
                  {product.title}
                </h3>
                <h4 className="text-[14px] text-[#223645] font-normal font-nunito text-center ">
                  ${product.price.toFixed(2)}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Drinks;

"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Container from "@/components/common/Container";
import axios from "axios";
import Link from "next/link";
 
const Catagories =  () => {

//  let data = await fetch('https://dummyjson.com/products')
//  let products = await data.json()
const [categories, setCategories] = useState([]);

useEffect(() => {
  axios.get('https://dummyjson.com/products?limit=160')
    .then(res => {

      const products = res.data.products;

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


// console.log(categories)
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="pt-[106px] bg-tertiary pb-73.5">
        <div className={` text-center `}>
          <h2 className={`text-[48px] font-bold font-inter text-white `}>
            Top Catagories
          </h2>
          <p
            className={`text-[16px] font-nunito font-medium text-white mt-4.75 `}
          >
            A highly efficient slip-ring scanner for today's diagnostic
            requirements.
          </p>
        </div>
      </div>

      <Container>
        <div className="relative mt-[-220px] h-[432px] bg-white shadow-[0_0_10px] shadow-gray-900/35 rounded-[10px] flex items-end px-[120px]">
          <div className=" w-full h-[313px] flex justify-between">
            <div className="slider-container w-full">
              <Slider ref={sliderRef} {...settings}>
              {
                categories.map((item) => (
                  <Link key={item.category} href={`/filter_product?category=${item.category}`}>  <div className=" text-center group  w-[147px]  cursor-pointer pb-30 hover:border-b-4 border-[#699405]">
                  <div className=" w-[100px] h-[100px] bg-[#A8B324]/15  rounded-full flex items-center justify-center mx-auto">
                    <Image src={item.image} width={100} height={100} alt="img" />
                  </div>
                  <h4 className="text-[18px] font-bold font-inter text-primary mt-5 mb-4 group-hover:text-[#699405] duration-500">
                   {item.category}
                  </h4>
                  <p className="text-[15px] font-medium font-nunito text-[#1A2167]">
                    ({item.totalProduct} item)
                  </p>
                </div>
                 
                  </Link>
           
                ))
              }
              
              </Slider>
            </div>
          </div>
          <div className=" absolute top-50 -right-15">
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-12 h-12 bg-white border rounded-full text-[#699405] hover:bg-[#699405] hover:text-white flex justify-center items-center text-2xl"
            >
              <IoIosArrowForward />
            </button>
          </div>
          <div className=" absolute top-50 -left-15">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-12 h-12 bg-white border rounded-full text-[#699405] hover:bg-[#699405] hover:text-white flex justify-center items-center text-2xl"
            >
              <IoIosArrowBack />
            </button>
          </div>
        </div>
        {/* */}
      </Container>
    </>
  );
};

export default Catagories;

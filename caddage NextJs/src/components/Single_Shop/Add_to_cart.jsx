"use client"

import React, { useState } from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import add from '../../../public/images/add.png';
import { FaStar } from "react-icons/fa";
import { FaFacebookF, FaBehance, FaPinterestP, FaTwitter } from "react-icons/fa";
import Link from 'next/link';



const Add_to_cart = () => {
 // Store which image is currently selected
  const [mainImage, setMainImage] = useState(
    "https://readymadeui.com/images/fashion-img-1.webp",
  );

  // Array of small product images
  const productImages = [
    "https://readymadeui.com/images/fashion-img-1.webp",
    "https://readymadeui.com/images/fashion-img-2.webp",
    "https://readymadeui.com/images/fashion-img-3.webp",
    "https://readymadeui.com/images/fashion-img-4.webp",
  ];

    return (
        <>
            <section className='py-30 bg-white'>
                <Container>
                    <div className=" lg:flex justify-between items-center gap-12 ">
                        <div className="lg:w-1/2 w-full">
                            <div className="w-full lg:sticky top-0">
              <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-2 w-16 max-sm:w-14 shrink-0">
                  {productImages.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      width={64}
                      height={85}
                      alt={`Product ${index + 1}`}
                      className={`aspect-[64/85] object-cover object-top w-full cursor-pointer border-b-2 ${
                        mainImage === img
                          ? "border-black"
                          : "border-transparent"
                      }`}
                      onMouseEnter={() => setMainImage(img)} // Change main image on hover
                    />
                  ))}
                </div>

                {/* Main flex-1 image */}
                <div className="flex-1">
                  <Image
                    src={mainImage}
                    alt="Product"
                    width={548}
                    height={570}
                    className="w-full aspect-[548/712] object-cover"
                  />
                </div>
              </div>
            </div>

                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="flex justify-between items-center">
                                <h3 className='text-[36px] text-primary font-bold font-inter leading-[100%]'>Black River Fruits</h3>
                                <h3 className='text-[36px] text-[#699405] font-bold font-inter leading-[100%]'>$32.00</h3>
                            </div>
                            <div className="flex gap-1 items-center mt-4 ">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <h4>(24)</h4>
                            </div>
                            <p className='text-[16px] text-[#666E77] font-normal font-nunito mt-7.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo</p>
                            <div className="flex gap-2 mt-4 items-center">
                                <h4 className='text-[15px] text-primary font-bold font-inter leading-[100%]'>Color:</h4>
                                <div className=" flex gap-1">
                                    <div className="w-2.5 h-2.5 bg-[#F99A29] rounded-full"></div>
                                    <div className="w-2.5 h-2.5 bg-[#05DEE6] rounded-full"></div>
                                    <div className="w-2.5 h-2.5 bg-[#C437FF] rounded-full"></div>
                                    <div className="w-2.5 h-2.5 bg-[#699405] rounded-full"></div>
                                    
                                </div>
                            </div>
                            <div className=" p-1 border border-[#699405] w-[20%] flex justify-between mt-6">
                                <button className='py-1 px-2.5 bg-[#699405] cursor-pointer '>-</button>
                                <button>01</button>
                                <button className='py-1 px-2 bg-[#699405] cursor-pointer '>+</button>
                            </div>
                            <h3 className='text-[15px] text-[#666E77] font-bold font-inter leading-[100%] mt-6'><span className='text-primary'>Categories:</span>All, Featured, Organic, Vegetable</h3>
                            <h3 className='text-[15px] text-[#666E77] font-bold font-inter leading-[100%] mt-6'> <span className='text-primary'>Tags:</span> Black, Brown, Red, Shoes, £0.00 - £150.00</h3>
                            <div className="flex gap-2 items-center mt-6">
                                <h4 className='text-[15px] text-primary font-bold font-inter leading-[100%]'>Share:</h4>
                                <div className="flex gap-3">
                                    <FaFacebookF/>
                                    <FaTwitter/>
                                    <FaBehance/>
                                </div>
                            </div>
                             <Link href="/addToCart" >
                            <button className=' w-full bg-[#699405] border border-[#699405] text-white font-nunito font-bold text-[14px] px-7.5 py-4 text-center uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405] mt-8.5'>
                                Add to Cart

                            </button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Add_to_cart

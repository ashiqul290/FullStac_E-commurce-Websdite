import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import img from '../../../public/images/img.png';
import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";

const Single_Trending_Products = () => {
    return (
        <>
            <section className='py-25 bg-white'>
                <Container>
                    <div className="">
                        <h2 className='text-[48px] text-primary font-bold font-inter text-center leading-[100%]'>Trending Products</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-5 text-center'>
                            A highly efficient slip-ring scanner for today's diagnostic requirements.
                        </p>
                    </div>
                    <div className="">
                        <div className=" flex justify-between gap-7.5 mt-12.5">
                                  <div className="p-2  border border-[#699405] bg-white shadow-xl">
                                    <div className="bg-white pb-5  relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-white after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer">
                                    <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                     
                                        <h3 className=' absolute text-[14px] text-white font-normal font-nunito top-2 right-2 py-1 px-2.5 bg-[#699405] rounded-br-xl rounded-tl-xl '>-29%</h3>
                                      
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
                                    <Image className=' ' src={img} alt="right" />
                                    <div className="  ">
                                      <h4 className='text-[11px] text-tertiary font-normal font-inter mt-4 ml-2'>Health & protins</h4>
                                      <h3 className='text-[16px] text-primary font-normal font-inter  mt-2 ml-2 '>Orange & Tomato</h3>
                                      
                                      <div className="flex gap-2 items-center ml-2 mt-2 ">

                                        <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
                                        <div className="flex gap-1 items-center  ">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                       
                                      </div>
                                      </div>
                                      
                                    </div>
                                  </div>
                                  </div>
                                  <div className="p-2  border border-[#699405] bg-white shadow-xl">
                                    <div className="bg-white pb-5  relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-white after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer">
                                    <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                     
                                        <h3 className=' absolute text-[14px] text-white font-normal font-nunito top-2 right-2 py-1 px-2.5 bg-[#699405] rounded-br-xl rounded-tl-xl '>-29%</h3>
                                      
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
                                    <Image className=' ' src={img} alt="right" />
                                    <div className="  ">
                                      <h4 className='text-[11px] text-tertiary font-normal font-inter mt-4 ml-2'>Health & protins</h4>
                                      <h3 className='text-[16px] text-primary font-normal font-inter  mt-2 ml-2 '>Orange & Tomato</h3>
                                      
                                      <div className="flex gap-2 items-center ml-2 mt-2 ">

                                        <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
                                        <div className="flex gap-1 items-center  ">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                       
                                      </div>
                                      </div>
                                      
                                    </div>
                                  </div>
                                  </div>
                                  <div className="p-2  border border-[#699405] bg-white shadow-xl">
                                    <div className="bg-white pb-5  relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-white after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer">
                                    <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                     
                                        <h3 className=' absolute text-[14px] text-white font-normal font-nunito top-2 right-2 py-1 px-2.5 bg-[#699405] rounded-br-xl rounded-tl-xl '>-29%</h3>
                                      
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
                                    <Image className=' ' src={img} alt="right" />
                                    <div className="  ">
                                      <h4 className='text-[11px] text-tertiary font-normal font-inter mt-4 ml-2'>Health & protins</h4>
                                      <h3 className='text-[16px] text-primary font-normal font-inter  mt-2 ml-2 '>Orange & Tomato</h3>
                                      
                                      <div className="flex gap-2 items-center ml-2 mt-2 ">

                                        <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
                                        <div className="flex gap-1 items-center  ">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                       
                                      </div>
                                      </div>
                                      
                                    </div>
                                  </div>
                                  </div>
                                  <div className="p-2  border border-[#699405] bg-white shadow-xl">
                                    <div className="bg-white pb-5  relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-white after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer">
                                    <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
                                     
                                        <h3 className=' absolute text-[14px] text-white font-normal font-nunito top-2 right-2 py-1 px-2.5 bg-[#699405] rounded-br-xl rounded-tl-xl '>-29%</h3>
                                      
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
                                    <Image className=' ' src={img} alt="right" />
                                    <div className="  ">
                                      <h4 className='text-[11px] text-tertiary font-normal font-inter mt-4 ml-2'>Health & protins</h4>
                                      <h3 className='text-[16px] text-primary font-normal font-inter  mt-2 ml-2 '>Orange & Tomato</h3>
                                      
                                      <div className="flex gap-2 items-center ml-2 mt-2 ">

                                        <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
                                        <div className="flex gap-1 items-center  ">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                       
                                      </div>
                                      </div>
                                      
                                    </div>
                                  </div>
                                  </div>
                                
                                 
                        
                                </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Single_Trending_Products

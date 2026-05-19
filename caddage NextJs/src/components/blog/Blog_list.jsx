import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import blog00 from '../../../public/images/blog00.png';
import blog11 from '../../../public/images/blog11.png';
import blog22 from '../../../public/images/blog22.png';
import { FaRegEye } from "react-icons/fa";
import { TbMessageDots } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaFacebookF, FaBehance, FaPinterestP, FaTwitter } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';



const Blog_list = () => {
    return (
        <>
            <section className='py-30 bg-white'>
                <Container>
                    <div className="flex items-start gap-10">
                        <div className="w-[65%]">
                            <div className="relative">
                                <Image className='w-full ' src={blog00} alt="blog00" />

                                <div className="py-8.5 pl-8.5 pr-41.25 bg-white shadow-2xl w-[90%] absolute -bottom-30 left-[50%] translate-x-[-50%] group">
                                    <div className="flex gap-4 items-center">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-[#699405]' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <div className=" flex gap-1 items-center border-l-2 border-[#699405] pl-4">
                                            <TbMessageDots className='text-[#699405]' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>1 Comments</p>
                                        </div>

                                    </div>
                                    <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%] mt-3.25 duration-300 ease-in-out  group-hover:text-[#699405] '>Lorem Ipsum has been the industry's standard dummy text ever since</h3>
                                    <p className='text-[14px] text-[#647589] font-normal font-nunito mt-5 duration-300 ease-in-out group-hover:text-[#699405]  '>It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that </p>

                                   <Link href="/blog_details">
                                    <div className="flex items-center gap-2 mt-6 duration-300 ease-in-out hover:text-[#699405]">
                                        <h2 className='text-[16px] text-primary font-inter font-bold leading-[100%]  duration-300 ease-in-out group-hover:text-[#699405]'>Read More</h2>
                                        <IoIosArrowDroprightCircle />
                                    </div>
                                   </Link>
                                </div>

                            </div>
                            <div className="relative mt-47.5">
                                <Image className='w-full ' src={blog00} alt="blog00" />

                                <div className="py-8.5 pl-8.5 pr-41.25 bg-white shadow-2xl w-[90%] absolute -bottom-30 left-[50%] translate-x-[-50%] group">
                                    <div className="flex gap-4 items-center">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-[#699405]' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <div className=" flex gap-1 items-center border-l-2 border-[#699405] pl-4">
                                            <TbMessageDots className='text-[#699405]' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>1 Comments</p>
                                        </div>

                                    </div>
                                    <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%] mt-3.25 underline duration-300 ease-in-out  group-hover:text-[#699405] '>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing</h3>
                                    <p className='text-[14px] text-[#647589] font-normal font-nunito mt-5 duration-300 ease-in-out group-hover:text-[#699405]  '>It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that </p>

                                   <Link href="/blog_details">
                                    <div className="flex items-center gap-2 mt-6 duration-300 ease-in-out hover:text-[#699405]">
                                        <h2 className='text-[16px] text-primary font-inter font-bold leading-[100%]  duration-300 ease-in-out group-hover:text-[#699405]'>Read More</h2>
                                        <IoIosArrowDroprightCircle />
                                    </div>
                                   </Link>
                                </div>

                            </div>
                            <div className="relative mt-47.5">
                                <Image className='w-full ' src={blog00} alt="blog00" />

                                <div className="py-8.5 pl-8.5 pr-41.25 bg-white shadow-2xl w-[90%] absolute -bottom-30 left-[50%] translate-x-[-50%] group">
                                    <div className="flex gap-4 items-center">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-[#699405]' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <div className=" flex gap-1 items-center border-l-2 border-[#699405] pl-4">
                                            <TbMessageDots className='text-[#699405]' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>1 Comments</p>
                                        </div>

                                    </div>
                                    <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%] mt-3.25  duration-300 ease-in-out  group-hover:text-[#699405] '>Generate Lorem Ipsum placeholder text for use in your graphic</h3>
                                    <p className='text-[14px] text-[#647589] font-normal font-nunito mt-5 duration-300 ease-in-out group-hover:text-[#699405]  '>It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that </p>

                                    <Link href="/blog_details">
                                    <div className="flex items-center gap-2 mt-6 duration-300 ease-in-out hover:text-[#699405]">
                                        <h2 className='text-[16px] text-primary font-inter font-bold leading-[100%]  duration-300 ease-in-out group-hover:text-[#699405]'>Read More</h2>
                                        <IoIosArrowDroprightCircle />
                                    </div>
                                   </Link>
                                </div>

                            </div>
                            <div className="relative mt-47.5">
                                <Image className='w-full ' src={blog00} alt="blog00" />

                                <div className="py-8.5 pl-8.5 pr-30  bg-white shadow-2xl w-[90%] absolute -bottom-30 left-[50%] translate-x-[-50%] group">
                                    <div className="flex gap-4 items-center">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-[#699405]' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <div className=" flex gap-1 items-center border-l-2 border-[#699405] pl-4">
                                            <TbMessageDots className='text-[#699405]' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>1 Comments</p>
                                        </div>

                                    </div>
                                    <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%] mt-3.25  duration-300 ease-in-out  group-hover:text-[#699405] '>Simply popular belief tradition Reference about Lorem Ipsum, giving informat</h3>
                                    <p className='text-[14px] text-[#647589] font-normal font-nunito mt-5 duration-300 ease-in-out group-hover:text-[#699405]  '>It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that </p>

                                   <Link href="/blog_details">
                                    <div className="flex items-center gap-2 mt-6 duration-300 ease-in-out hover:text-[#699405]">
                                        <h2 className='text-[16px] text-primary font-inter font-bold leading-[100%]  duration-300 ease-in-out group-hover:text-[#699405]'>Read More</h2>
                                        <IoIosArrowDroprightCircle />
                                    </div>
                                   </Link>
                                </div>

                            </div>

                            <div className="mt-50">
                                <div className="flex justify-center items-center gap-5 ">


                                    <div className="p-2.5 bg-white text-[#699405] shadow-xl border border-[#699405] cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                        <FaArrowLeft />
                                    </div>
                                    <div className="p-2.5 bg-[#699405] text-white shadow-xl border border-[#699405] cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]">
                                        <h2>01</h2>
                                    </div>
                                    <div className="p-2.5 bg-[#699405] text-white shadow-xl border border-[#699405] cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]">
                                        <h2>02</h2>
                                    </div>
                                    <div className="p-2.5 bg-[#699405] text-white shadow-xl border border-[#699405] cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]">
                                        <h2>03</h2>
                                    </div>
                                    <div className="p-2.5 bg-[#699405] text-white shadow-xl border border-[#699405] cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]">
                                        <h2>04</h2>
                                    </div>
                                    <div className="p-2.5 bg-[#699405] text-white shadow-xl border border-[#699405] cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]">
                                        <h2>05</h2>
                                    </div>
                                    <div className="p-2.5 bg-white text-[#699405] shadow-xl border border-[#699405] cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                        <FaArrowRight />
                                    </div>





                                </div>
                            </div>

                        </div>
                        <div className="w-[35%]">
                            <div className="pt-7 px-13.5 pb-10 bg-white shadow-2xl">
                                <div className=" flex justify-center">
                                    <Image className=' ' src={blog11} alt="blog11" />
                                </div>
                                <h2 className='text-[20px] text-primary font-bold font-inter mt-5 text-center'>Jehnny Rose</h2>
                                <h3 className='text-[14px] text-[#699405] font-normal font-nunito text-center'>Traveller/Photographer</h3>
                                <div className="flex justify-center gap-1 items-center mx-auto mt-4 ml-[50%] translate-x-[-50%]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />

                                </div>
                                <p className='text-[14px] text-tertiary font-normal font-inter text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                <div className="flex justify-center items-center gap-5 mt-7.5">
                                    <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                        <FaFacebookF />
                                    </div>
                                    <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                        <FaTwitter />
                                    </div>
                                    <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                        <FaBehance />
                                    </div>
                                    <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                        <FaPinterestP />
                                    </div>
                                </div>

                            </div>

                            <div className=" py-10 px-5  bg-white shadow-2xl mt-7.5">
                                <h2 className='text-[20px] text-primary font-bold font-inter mb-6 border-b border-[#699405] pb-2 '>Search</h2>

                                <label className='flex items-center ' htmlFor="">
                                    < input type="Search" className=' w-full p-2 border border-[#699405] outline-none  mt-2' placeholder=' Search For Posts' />
                                    <button className='bg-[#699405] border border-[#699405] text-white font-normal font-nunito py-3 px-6  mt-2 cursor-pointer leading-[150%] duration-300 ease-in-out hover:bg-white hover:text-[#699405] '><IoSearch /></button>
                                </label>
                            </div>
                            <div className=" py-10 px-5  bg-white shadow-2xl mt-7.5">
                                <h2 className='text-[20px] text-primary font-bold font-inter mb-6 border-b border-[#699405] pb-2 '>Catagories</h2>
                                <div className="space-y-4.5">
                                    <h4 className='py-2.5 pl-5 bg-[#e9ebe4] rounded-xs text-[14px] text-[#699405] font-normal font-nunito duration-300 ease-in-out hover:text-white hover:bg-[#699405] cursor-pointer'>Vegetables items (14)</h4>
                                    <h4 className='py-2.5 pl-5 bg-[#e9ebe4] rounded-xs text-[14px] text-[#699405] font-normal font-nunito duration-300 ease-in-out hover:text-white hover:bg-[#699405] cursor-pointer'>Herbel Medicine (21)</h4>
                                    <h4 className='py-2.5 pl-5 bg-[#e9ebe4] rounded-xs text-[14px] text-[#699405] font-normal font-nunito duration-300 ease-in-out hover:text-white hover:bg-[#699405] cursor-pointer'>Olive Oil massage (17)</h4>
                                    <h4 className='py-2.5 pl-5 bg-[#e9ebe4] rounded-xs text-[14px] text-[#699405] font-normal font-nunito duration-300 ease-in-out hover:text-white hover:bg-[#699405] cursor-pointer'>Organic Foods (09)</h4>
                                    <h4 className='py-2.5 pl-5 bg-[#e9ebe4] rounded-xs text-[14px] text-[#699405] font-normal font-nunito duration-300 ease-in-out hover:text-white hover:bg-[#699405] cursor-pointer'>Fishes & meats (265)</h4>
                                </div>


                            </div>

                            <div className=" py-12 px-6  bg-white shadow-2xl mt-7.5">
                                <h2 className='text-[20px] text-primary font-bold font-inter mb-6 border-b border-[#699405] pb-2 '>Leatest Blogs</h2>

                                <div className="flex items-center gap-3">
                                    <Image className=' ' src={blog22} alt="blog22" />
                                    <div className="">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-[#699405] text-[10px]' />
                                            <p className='text-[9px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <h3 className='text-[14px] text-primary font-bold font-inter leading-[120%] mt-1.5'>It is a long established Cont popular traditional </h3>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 ">
                                    <Image className=' ' src={blog22} alt="blog22" />
                                    <div className="">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-[#699405] text-[10px]' />
                                            <p className='text-[9px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <h3 className='text-[14px] text-primary font-bold font-inter leading-[120%] mt-1.5'>Contrary to popular tradi lorem ipsum is not simply  </h3>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 ">
                                    <Image className=' ' src={blog22} alt="blog22" />
                                    <div className="">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-[#699405] text-[10px]' />
                                            <p className='text-[9px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <h3 className='text-[14px] text-primary font-bold font-inter leading-[120%] mt-1.5'>Lorem Ipsum has been the industry's standard dummy </h3>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 ">
                                    <Image className=' ' src={blog22} alt="blog22" />
                                    <div className="">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-[#699405] text-[10px]' />
                                            <p className='text-[9px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <h3 className='text-[14px] text-primary font-bold font-inter leading-[120%] mt-1.5'>It is a long established Cont popular traditional  </h3>
                                    </div>
                                </div>

                            </div>

                             <div className=" py-10 px-5  bg-white shadow-2xl mt-7.5">
                                <h2 className='text-[20px] text-primary font-bold font-inter mb-6 border-b border-[#699405] pb-2 '>Follow Us</h2>

                               <div className="flex  items-center gap-5 mt-7.5">
                                    <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                        <FaFacebookF />
                                    </div>
                                    <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                        <FaTwitter />
                                    </div>
                                    <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                        <FaBehance />
                                    </div>
                                    <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                        <FaPinterestP />
                                    </div>
                                </div>
                            </div>









                            <div className="py-10 px-5  bg-white shadow-2xl mt-7.5">
                                <h2 className='text-[20px] text-primary font-bold font-inter mb-5  '>Releated Tags</h2>
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
                </Container>
            </section>
        </>
    )
}

export default Blog_list
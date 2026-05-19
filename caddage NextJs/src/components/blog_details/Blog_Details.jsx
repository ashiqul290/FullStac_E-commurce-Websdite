import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import blog00 from '../../../public/images/blog00.png';
import blog11 from '../../../public/images/blog11.png';
import blog111 from '../../../public/images/blog111.png';
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
                    <div className="lg:flex items-start gap-10">
                        <div className="lg:w-[65%] w-full">
                            <div className="">
                                <Image className='w-full ' src={blog00} alt="blog00" />

                                <div className="py-8.5 px-8.5 bg-white shadow-2xl  ">
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
                                    <div className="">
                                        <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%] mt-3.25 pr-25  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                                        <p className='text-[14px] text-[#647589] font-normal font-nunito mt-9 pr-20   '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less letters, as opposed to using ‘Content here, content here’, making it look like readable English. </p>

                                        <p className='text-[14px] text-[#647589] font-normal font-nunito mt-10 pr-20   '>It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as </p>
                                    </div>

                                    <div className="mt-12">
                                        <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%]    '>A cleansing hot shower or bath</h3>
                                        <p className='text-[14px] text-[#647589] font-normal font-nunito mt-9  pr-20  '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less letters, as opposed to using ‘Content here, content here’, making it look like readable English. </p>


                                    </div>

                                    <div className="pt-7 pb-7.5 pl-5 pr-23.5 bg-[#f6faed] mt-15 border-l-6 border-[#699405] ">
                                        <p className='text-[17px] text-[#647589] font-normal font-nunito  '>Integer is metus site turpis facilisis customers. elementum an mauris in venenatis consectetur Praesent condimentum bibendum Morbi sit amet commodo pellentes at fringilla tincidunt risus." </p>
                                    </div>

                                    <div className="mt-12">
                                        <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%]    '>A cleansing hot shower or bath</h3>
                                        <ul className='text-[15px] text-[#647589] font-normal font-nunito  list-disc ml-9.5 space-y-3 mt-9'>
                                            <li>Check Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                            <li>Check Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                            <li>Check Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                            <li>Check Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                            <li>Check Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</li>
                                        </ul>

                                        <p className='text-[14px] text-[#647589] font-normal font-nunito mt-9  pr-20 leading-[150%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor
                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                                            sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>


                                    </div>

                                    <div className="mt-16.25 flex justify-between gap-11">
                                        <div className="w-1/2">

                                            <Image className=' ' src={blog111} alt="blog111" />
                                        </div>
                                        <div className="w-1/2">

                                            <Image className=' ' src={blog111} alt="blog111" />
                                        </div>
                                    </div>

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

                                    <div className=" mt-15.5">
                                        <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%] border-l-4 border-[#699405] pl-3   '>Reviews</h3>

                                        <div className=" flex items-start gap-4 mt-8.5 border-b border-[#699405] pb-12">
                                            <Image className=' ' src={blog11} alt="blog11" />
                                            <div className="">
                                                <div className="flex items-center gap-5.5">
                                                    <h2 className='text-[20px] text-primary font-bold font-inter '>Jehnny Rose</h2>
                                                    <div className="flex justify-center gap-1 items-center ">
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />

                                                    </div>

                                                </div>
                                                <h4 className='text-[14px] text-tertiary font-normal font-nunito mt-2'>June 26, 2020</h4>
                                                <p className='text-[14px] text-tertiary font-normal font-nunito mt-3.5' >The second bedroom is a corner room with double windows. The kitchen has fabulous space new appliances, and a laundry area. Other features include rich herringbone floors</p>
                                            </div>
                                        </div>
                                        <div className=" flex items-start gap-4 mt-8.5 ">
                                            <Image className=' ' src={blog11} alt="blog11" />
                                            <div className="">
                                                <div className="flex items-center gap-5.5">
                                                    <h2 className='text-[20px] text-primary font-bold font-inter '>Jehnny Rose</h2>
                                                    <div className="flex justify-center gap-1 items-center ">
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />

                                                    </div>

                                                </div>
                                                <h4 className='text-[14px] text-tertiary font-normal font-nunito mt-2'>June 26, 2020</h4>
                                                <p className='text-[14px] text-tertiary font-normal font-nunito mt-3.5' >The second bedroom is a corner room with double windows. The kitchen has fabulous space new appliances, and a laundry area. Other features include rich herringbone floors</p>
                                            </div>
                                        </div>


                                    </div>


                                    <div className="pt-11.5 px-8 pb-21 bg-[#F4F4FC] mt-17.5">

                                        <div className=" ">
                                            <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%] border-l-4 border-[#699405] pl-3   '>Write A Review</h3>
                                            <div className="flex gap-7.5 mt-10 ">
                                                <input
                                                    className="w-1/2 outline-none border-b border-[#5C727D] pb-2  focus:border-[#699405] transition-all duration-300"
                                                    type="text"
                                                    placeholder="Your name"
                                                />
                                                <input
                                                    className="w-1/2 outline-none border-b border-[#5C727D] pb-2  focus:border-[#699405] transition-all duration-300"
                                                    type="text"
                                                    placeholder=" Your Email"
                                                />
                                            </div>

                                            <div className="mt-10">
                                                <textarea
                                                    className="w-full py-3.5  outline-none  border-b border-[#5C727D] pb-2  focus:border-[#699405] transition-all duration-300 resize-none"
                                                    rows="5"
                                                    placeholder="Write Comment..."
                                                ></textarea>
                                            </div>





                                        </div>
                                        <div className="flex gap-2 items-center mt-8">
                                            <input className='' type="checkbox" />
                                            <p className='text-[14px] text-tertiary font-nunito font-normal'>Save my name, email, and website in this browser for the next time I comment.</p>
                                        </div>

                                        <button className=" bg-[#699405] border border-[#699405] text-[14px] text-white font-normal font-nunito py-2.5 px-6.25 rounded-xs mt-12 cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405] ">Post Comment</button>

                                    </div>



                                </div>

                            </div>




                        </div>
                        <div className="lg:w-[35%] w-full">
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
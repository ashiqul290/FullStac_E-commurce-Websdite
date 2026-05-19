"use client"
import React from 'react'
import Container from '../common/Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { FaStar } from 'react-icons/fa';



const Cart_Details = ({ item }) => {

    return (
        <>
            <section className='py-25 bg-[#F9F8FE]'>
                <Container>
                    <div className="">
                        <Tabs>
                            <TabList className=" flex  items-center gap-21.5">


                                <Tab
                                    selectedClassName=" text-[#699405] border-b-2 border-[#699405]"
                                    className="  text-[24px] text-primary font-bold font-inter  cursor-pointer outline-none ">
                                    Description
                                </Tab>
                                <Tab
                                    selectedClassName=" text-[#699405] border-b-2 border-[#699405]"
                                    className="  text-[24px] text-primary font-bold font-inter  cursor-pointer outline-none ">
                                    Additional Info
                                </Tab>
                                <Tab
                                    selectedClassName=" text-[#699405] border-b-2 border-[#699405]"
                                    className="  text-[24px] text-primary font-bold font-inter  cursor-pointer outline-none ">
                                    Reviews
                                </Tab>
                                <Tab
                                    selectedClassName=" text-[#699405] border-b-2 border-[#699405]"
                                    className="  text-[24px] text-primary font-bold font-inter  cursor-pointer outline-none ">
                                    Video
                                </Tab>



                            </TabList>

                            <div className="py-15 pl-15 pr-25 bg-white mt-10">
                                <TabPanel className="">
                                    <div className="">
                                        <h3 className='text-[24px] text-primary font-bold font-inter leading-[100%]'>{item.brand}</h3>
                                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-5.5'>{item.description}</p>

                                        <h4 className='text-[24px] text-primary font-bold font-inter leading-[100%] mt-8'>More Details</h4>
                                        <div className=" space-y-5.5 mt-5.5">
                                            <div className="flex gap-2 items-center">
                                                <HiMiniArrowLongRight className='text-tertiary' />
                                                <p className='text-[16px] text-tertiary font-normal font-nunito leading-[100%]'>{item.shippingInformation}</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <HiMiniArrowLongRight className='text-tertiary' />
                                                <p className='text-[16px] text-tertiary font-normal font-nunito leading-[100%]'>{item.returnPolicy}</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <HiMiniArrowLongRight className='text-tertiary' />
                                                <p className='text-[16px] text-tertiary font-normal font-nunito leading-[100%]'>{item.warrantyInformation}</p>
                                            </div>
                                            {/* <div className="flex gap-2 items-center">
                                                <HiMiniArrowLongRight className='text-tertiary' />
                                                <p className='text-[16px] text-tertiary font-normal font-nunito leading-[100%]'>has been the industry’s standard dummy text ever since. Lorem Ips</p>
                                            </div> */}

                                        </div>

                                    </div>
                                </TabPanel>
                                <TabPanel className="">
                                    <div>
                                        <h3 className='text-[24px] text-primary font-bold font-inter leading-[100%]'>
                                            Product Additional Information
                                        </h3>

                                        <div className="mt-8 space-y-6">
                                            <div className="flex justify-between border-b pb-4">
                                                <span className="text-[16px] font-semibold text-primary">Weight</span>
                                                <span className="text-[16px] text-tertiary">{item.dimensions.width} kg</span>
                                            </div>

                                            <div className="flex justify-between border-b pb-4">
                                                <span className="text-[16px] font-semibold text-primary">Dimensions</span>
                                                <span className="text-[16px] text-tertiary">25 × 15 × 10 cm</span>
                                            </div>

                                            <div className="flex justify-between border-b pb-4">
                                                <span className="text-[16px] font-semibold text-primary">Material</span>
                                                <span className="text-[16px] text-tertiary">Premium Cotton</span>
                                            </div>

                                            <div className="flex justify-between">
                                                <span className="text-[16px] font-semibold text-primary">Color</span>
                                                <span className="text-[16px] text-tertiary">Black, Blue</span>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className="">
                                    <div>
                                        <h3 className='text-[24px] text-primary font-bold font-inter'>
                                            Customer Reviews
                                        </h3>

                                        <div className="mt-8 space-y-8">

                                            {/* Review  */}
                                            {
                                                item.reviews.map((review, index) => (

                                                    <div className="border-b pb-6">
                                                        <div className="flex justify-between items-center">
                                                            <h4 className="text-[18px] font-semibold text-primary">{review.reviewerName}</h4>

                                                            <div className=" flex gap-1 items-center">
                                                                <FaStar className='text-amber-600' />
                                                                <FaStar className='text-amber-600' />
                                                                <FaStar className='text-amber-600' />
                                                                <FaStar className='text-amber-600' />
                                                                <FaStar className='text-gray-600' />
                                                            </div>
                                                        </div>
                                                        <h4 className="text-[16px] font-semibold text-primary/70 mt-2">{review.reviewerEmail}</h4>

                                                        <p className="text-[16px] text-tertiary mt-6">
                                                            {review.comment}
                                                        </p>
                                                    </div>
                                                ))
                                            }



                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className="">
                                    <div>
                                        <h3 className='text-[24px] text-primary font-bold font-inter'>
                                            Product Video
                                        </h3>

                                        <div className="mt-8">
                                            <div className="w-full h-100  overflow-hidden">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/1BaOvLw4pEM?si=zuBjp8l6Hk6dcq8N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                            </div>


                        </Tabs>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Cart_Details

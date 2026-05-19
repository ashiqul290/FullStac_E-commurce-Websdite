"use client"
import React from 'react'
import Container from '../common/Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { HiMiniArrowLongRight } from "react-icons/hi2";



const Cart_Details = () => {
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
                                        <h3 className='text-[24px] text-primary font-bold font-inter leading-[100%]'>Viverra a consectetur</h3>
                                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-5.5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over Vivamus ibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contrary to popular belief, Lorem Ipsum is not simply lassical Latin literature from 45 BC, making it</p>

                                        <h4 className='text-[24px] text-primary font-bold font-inter leading-[100%] mt-8'>More Details</h4>
                                        <div className=" space-y-5.5 mt-5.5">
                                            <div className="flex gap-2 items-center">
                                                <HiMiniArrowLongRight className='text-tertiary' />
                                                <p className='text-[16px] text-tertiary font-normal font-nunito leading-[100%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <HiMiniArrowLongRight className='text-tertiary' />
                                                <p className='text-[16px] text-tertiary font-normal font-nunito leading-[100%]'>Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy text.</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <HiMiniArrowLongRight className='text-tertiary' />
                                                <p className='text-[16px] text-tertiary font-normal font-nunito leading-[100%]'>type here your detail one by one li more add</p>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <HiMiniArrowLongRight className='text-tertiary' />
                                                <p className='text-[16px] text-tertiary font-normal font-nunito leading-[100%]'>has been the industry’s standard dummy text ever since. Lorem Ips</p>
                                            </div>

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
                                                <span className="text-[16px] text-tertiary">1.2 kg</span>
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

                                            {/* Review 1 */}
                                            <div className="border-b pb-6">
                                                <div className="flex justify-between items-center">
                                                    <h4 className="text-[18px] font-semibold text-primary">John Doe</h4>
                                                    <span className="text-yellow-500">★★★★★</span>
                                                </div>
                                                <p className="text-[16px] text-tertiary mt-3">
                                                    Amazing quality product! Totally worth the price. I highly recommend this.
                                                </p>
                                            </div>

                                            {/* Review 2 */}
                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <h4 className="text-[18px] font-semibold text-primary">Sarah Khan</h4>
                                                    <span className="text-yellow-500">★★★★☆</span>
                                                </div>
                                                <p className="text-[16px] text-tertiary mt-3">
                                                    Good product but delivery was slightly delayed. Overall satisfied.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className="">
                                    <div>
                                        <h3 className='text-[24px] text-primary font-bold font-inter'>
                                            Product Video
                                        </h3>

                                        <div className="mt-8">
                                            <div className="w-full h-100 rounded-lg overflow-hidden">
                                                <iframe
                                                    className="w-full h-full"
                                                    src="https://www.youtube.com/embed/7fD6_1xv-a4?si=91MkCuWVY-8k2nMb"
                                                    title="Product Video"
                                                    frameBorder="0"
                                                    allowFullScreen
                                                ></iframe>
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

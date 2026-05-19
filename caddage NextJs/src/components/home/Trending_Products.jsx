import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import tren from '../../../public/images/tren.png';

const Trending_Products = () => {
    return (
        <>
            <section className='py-27 pb-29.5 bg-[#ECECEC]'>
                <Container>
                    <div className="">
                        <h2 className='text-[48px] text-primary font-bold font-inter text-center leading-[100%]'>Trending Products</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-5 text-center'>
                            A highly efficient slip-ring scanner for today's diagnostic requirements.
                        </p>
                    </div>
                    <div className="mt-15">
                        <div className="lg:flex justify-between items-center gap-7.5 ">
                            <div className="lg:w-1/3 w-full">
                                <div className=" group py-4.75 px-3.25 bg-white flex items-center gap-5 cursor-pointer duration-300 ease-in-out border-b-4 border-white hover:border-b-4 hover:border-[#699405]">
                                    <div className="">
                                        <Image className=' ' src={tren} alt="tren" />
                                    </div>
                                    <div className="">
                                        <h3 className=' text-[18px] text-primary font-bold font-inter leading-[100%] duration-300 ease-in-out group-hover:text-[#699405]'>Naturel Olive Sliced</h3>
                                        <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-[#699405]'>$25.00 <span className='text-[14px] text-[#699405] line-through ml-2.5 '>$34.00</span></h4>
                                        <a className=' text-[14px] text-primary font-normal font-nunito underline duration-300 ease-in-out group-hover:text-[#699405]' href="">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <div className=" group py-4.75 px-3.25 bg-white flex items-center gap-5 cursor-pointer duration-300 ease-in-out border-b-4 border-white hover:border-b-4 hover:border-[#699405]">
                                    <div className="">
                                        <Image className=' ' src={tren} alt="tren" />
                                    </div>
                                    <div className="">
                                        <h3 className=' text-[18px] text-primary font-bold font-inter leading-[100%] duration-300 ease-in-out group-hover:text-[#699405]'>Fresh Orange Sliced</h3>
                                        <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-[#699405]'>$25.00 <span className='text-[14px] text-[#699405] line-through ml-2.5 '>$34.00</span></h4>
                                        <a className=' text-[14px] text-primary font-normal font-nunito underline duration-300 ease-in-out group-hover:text-[#699405]' href="">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <div className=" group py-4.75 px-3.25 bg-white flex items-center gap-5 cursor-pointer duration-300 ease-in-out border-b-4 border-white hover:border-b-4 hover:border-[#699405]">
                                    <div className="">
                                        <Image className=' ' src={tren} alt="tren" />
                                    </div>
                                    <div className="">
                                        <h3 className=' text-[18px] text-primary font-bold font-inter leading-[100%] duration-300 ease-in-out group-hover:text-[#699405]'>Pure Beef Meats</h3>
                                        <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-[#699405]'>$25.00 <span className='text-[14px] text-[#699405] line-through ml-2.5 '>$34.00</span></h4>
                                        <a className=' text-[14px] text-primary font-normal font-nunito underline duration-300 ease-in-out group-hover:text-[#699405]' href="">Add To Cart</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="lg:flex justify-between items-center gap-7.5 mt-7.5 ">
                            <div className="lg:w-1/3 w-full">
                                <div className=" group py-4.75 px-3.25 bg-white flex items-center gap-5 cursor-pointer duration-300 ease-in-out border-b-4 border-white hover:border-b-4 hover:border-[#699405]">
                                    <div className="">
                                        <Image className=' ' src={tren} alt="tren" />
                                    </div>
                                    <div className="">
                                        <h3 className=' text-[18px] text-primary font-bold font-inter leading-[100%] duration-300 ease-in-out group-hover:text-[#699405]'>Naturel Pop Corns</h3>
                                        <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-[#699405]'>$25.00 <span className='text-[14px] text-[#699405] line-through ml-2.5 '>$34.00</span></h4>
                                        <a className=' text-[14px] text-primary font-normal font-nunito underline duration-300 ease-in-out group-hover:text-[#699405]' href="">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <div className=" group py-4.75 px-3.25 bg-white flex items-center gap-5 cursor-pointer duration-300 ease-in-out border-b-4 border-white hover:border-b-4 hover:border-[#699405]">
                                    <div className="">
                                        <Image className=' ' src={tren} alt="tren" />
                                    </div>
                                    <div className="">
                                        <h3 className=' text-[18px] text-primary font-bold font-inter leading-[100%] duration-300 ease-in-out group-hover:text-[#699405]'>Oily Dry Beans</h3>
                                        <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-[#699405]'>$25.00 <span className='text-[14px] text-[#699405] line-through ml-2.5 '>$34.00</span></h4>
                                        <a className=' text-[14px] text-primary font-normal font-nunito underline duration-300 ease-in-out group-hover:text-[#699405]' href="">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <div className=" group py-4.75 px-3.25 bg-white flex items-center gap-5 cursor-pointer duration-300 ease-in-out border-b-4 border-white hover:border-b-4 hover:border-[#699405]">
                                    <div className="">
                                        <Image className=' ' src={tren} alt="tren" />
                                    </div>
                                    <div className="">
                                        <h3 className=' text-[18px] text-primary font-bold font-inter leading-[100%] duration-300 ease-in-out group-hover:text-[#699405]'>Red Toamto slice</h3>
                                        <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-[#699405]'>$25.00 <span className='text-[14px] text-[#699405] line-through ml-2.5 '>$34.00</span></h4>
                                        <a className=' text-[14px] text-primary font-normal font-nunito underline duration-300 ease-in-out group-hover:text-[#699405]' href="">Add To Cart</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className=" flex justify-between items-center gap-7.5 mt-7.5 ">
                            <div className="w-1/3">
                                <div className=" group py-4.75 px-3.25 bg-white flex items-center gap-5 cursor-pointer duration-300 ease-in-out border-b-4 border-white hover:border-b-4 hover:border-[#699405]">
                                    <div className="">
                                        <Image className=' ' src={tren} alt="tren" />
                                    </div>
                                    <div className="">
                                        <h3 className=' text-[18px] text-primary font-bold font-inter leading-[100%] duration-300 ease-in-out group-hover:text-[#699405]'>Naturel Olive Sliced</h3>
                                        <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-[#699405]'>$25.00 <span className='text-[14px] text-[#699405] line-through ml-2.5 '>$34.00</span></h4>
                                        <a className=' text-[14px] text-primary font-normal font-nunito underline duration-300 ease-in-out group-hover:text-[#699405]' href="">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className=" group py-4.75 px-3.25 bg-white flex items-center gap-5 cursor-pointer duration-300 ease-in-out border-b-4 border-white hover:border-b-4 hover:border-[#699405]">
                                    <div className="">
                                        <Image className=' ' src={tren} alt="tren" />
                                    </div>
                                    <div className="">
                                        <h3 className=' text-[18px] text-primary font-bold font-inter leading-[100%] duration-300 ease-in-out group-hover:text-[#699405]'>Biona Fatty Acides</h3>
                                        <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-[#699405]'>$25.00 <span className='text-[14px] text-[#699405] line-through ml-2.5 '>$34.00</span></h4>
                                        <a className=' text-[14px] text-primary font-normal font-nunito underline duration-300 ease-in-out group-hover:text-[#699405]' href="">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className=" group py-4.75 px-3.25 bg-white flex items-center gap-5 cursor-pointer duration-300 ease-in-out border-b-4 border-white hover:border-b-4 hover:border-[#699405]">
                                    <div className="">
                                        <Image className=' ' src={tren} alt="tren" />
                                    </div>
                                    <div className="">
                                        <h3 className=' text-[18px] text-primary font-bold font-inter leading-[100%] duration-300 ease-in-out group-hover:text-[#699405]'>Creamy Biscuites</h3>
                                        <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-[#699405]'>$25.00 <span className='text-[14px] text-[#699405] line-through ml-2.5 '>$34.00</span></h4>
                                        <a className=' text-[14px] text-primary font-normal font-nunito underline duration-300 ease-in-out group-hover:text-[#699405]' href="">Add To Cart</a>
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

export default Trending_Products

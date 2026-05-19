import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import price from '../../../public/images/price.png';

const Cheakout_List = () => {
    return (
        <>
            <section className='py-28.75 bg-white'>
                <Container>
                    <div className="">
                        <h2 className='text-[22px] text-primary font-bold font-inter leading-[100%]'>Xprako Demo</h2>
                        <p className='text-[12px] text-tertiary font-normal font-nunito mt-4'>Cart/ Information/ Shipping/ Payment</p>
                    </div>
                    <div className="lg:flex justify-between items-start gap-6.5 mt-6.5">
                        <div className="lg:w-[70%] w-full ">
                            <div className="pt-11.5 px-8 pb-21 bg-[#F4F4FC]">
                                <div className=" flex justify-between items-center">
                                    <h2 className='text-[20px] text-primary font-bold font-inter leading-[100%]'>Contact Information</h2>
                                    <p className='text-[14px] text-tertiary font-normal font-nunito'>Already have an account? Log in</p>
                                </div>
                                <input
                                    className="w-full outline-none border-b border-[#5C727D] pb-2 mt-10 focus:border-[#699405] transition-all duration-300"
                                    type="text"
                                    placeholder="Email or mobile phone number"
                                />
                                <div className="flex gap-2 items-center mt-8">
                                    <input className='' type="checkbox" />
                                    <p className='text-[10px] text-tertiary font-nunito font-normal'>Keep me up to date on news and exclusive offers</p>
                                </div>
                                <div className=" mt-25">
                                    <h2 className='text-[20px] text-primary font-bold font-inter leading-[100%]'>Shipping address</h2>
                                    <div className="flex gap-7.5 mt-10 ">
                                        <input
                                            className="w-1/2 outline-none border-b border-[#5C727D] pb-2  focus:border-[#699405] transition-all duration-300"
                                            type="text"
                                            placeholder="First name(optional)"
                                        />
                                        <input
                                            className="w-1/2 outline-none border-b border-[#5C727D] pb-2  focus:border-[#699405] transition-all duration-300"
                                            type="text"
                                            placeholder="Last name"
                                        />
                                    </div>

                                    <input
                                        className="w-full outline-none border-b border-[#5C727D] pb-2 mt-10 focus:border-[#699405] transition-all duration-300"
                                        type="text"
                                        placeholder="Address"
                                    />
                                    <input
                                        className="w-full outline-none border-b border-[#5C727D] pb-2 mt-10 focus:border-[#699405] transition-all duration-300"
                                        type="text"
                                        placeholder="Appartmentment,suit,e.t.c (optinal)"
                                    />
                                    <input
                                        className="w-full outline-none border-b border-[#5C727D] pb-2 mt-10 focus:border-[#699405] transition-all duration-300"
                                        type="text"
                                        placeholder="City"
                                    />

                                    <div className="flex gap-7.5 mt-10 ">
                                        <input
                                            className="w-1/2 outline-none border-b border-[#5C727D] pb-2  focus:border-[#699405] transition-all duration-300"
                                            type="text"
                                            placeholder="Bangladesh"
                                        />
                                        <input
                                            className="w-1/2 outline-none border-b border-[#5C727D] pb-2  focus:border-[#699405] transition-all duration-300"
                                            type="text"
                                            placeholder="Postal Code"
                                        />
                                    </div>



                                </div>

                                <button className=" bg-[#699405] border border-[#699405] text-[14px] text-white font-normal font-nunito py-2.5 px-6.25 rounded-xs mt-29 cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405] ">Calculate Shiping</button>

                            </div>
                        </div>
                        <div className="lg:w-[30%] w-full">
                            <div className="flex justify-between items-center border-b border-tertiary pb-4">
                                <div className=" flex gap-4 items-center">
                                    <Image src={price} alt="price" />
                                    <div className="">
                                        <h4 className='text-[14px] text-primary font-normal font-inter'>Potato Cheaps Brown</h4>
                                        <h5 className='text-[12px] text-tertiary font-normal font-nunito'>Color:Brown</h5>
                                        <h6 className='text-[12px] text-tertiary font-normal font-nunito'>Quantity: (2kg)</h6>
                                    </div>
                                </div>
                                <div className="">

                                    <h3 className='text-[14px] text-primary font-normal font-inter'>$32.00</h3>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b border-tertiary pb-4 mt-3.5">
                                <div className=" flex gap-4 items-center">
                                    <Image src={price} alt="price" />
                                    <div className="">
                                        <h4 className='text-[14px] text-primary font-normal font-inter'>Potato Cheaps Brown</h4>
                                        <h5 className='text-[12px] text-tertiary font-normal font-nunito'>Color:Brown</h5>
                                        <h6 className='text-[12px] text-tertiary font-normal font-nunito'>Quantity: (2kg)</h6>
                                    </div>
                                </div>
                                <div className="">

                                    <h3 className='text-[14px] text-primary font-normal font-inter'>$32.00</h3>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b border-tertiary pb-4 mt-3.5">
                                <div className=" flex gap-4 items-center">
                                    <Image src={price} alt="price" />
                                    <div className="">
                                        <h4 className='text-[14px] text-primary font-normal font-inter'>Potato Cheaps Brown</h4>
                                        <h5 className='text-[12px] text-tertiary font-normal font-nunito'>Color:Brown</h5>
                                        <h6 className='text-[12px] text-tertiary font-normal font-nunito'>Quantity: (2kg)</h6>
                                    </div>
                                </div>
                                <div className="">

                                    <h3 className='text-[14px] text-primary font-normal font-inter'>$32.00</h3>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b border-tertiary pb-4 mt-3.5">
                                <div className=" flex gap-4 items-center">
                                    <Image src={price} alt="price" />
                                    <div className="">
                                        <h4 className='text-[14px] text-primary font-normal font-inter'>Potato Cheaps Brown</h4>
                                        <h5 className='text-[12px] text-tertiary font-normal font-nunito'>Color:Brown</h5>
                                        <h6 className='text-[12px] text-tertiary font-normal font-nunito'>Quantity: (2kg)</h6>
                                    </div>
                                </div>
                                <div className="">

                                    <h3 className='text-[14px] text-primary font-normal font-inter'>$32.00</h3>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b border-tertiary pb-4 mt-3.5">
                                <div className=" flex gap-4 items-center">
                                    <Image src={price} alt="price" />
                                    <div className="">
                                        <h4 className='text-[14px] text-primary font-normal font-inter'>Potato Cheaps Brown</h4>
                                        <h5 className='text-[12px] text-tertiary font-normal font-nunito'>Color:Brown</h5>
                                        <h6 className='text-[12px] text-tertiary font-normal font-nunito'>Quantity: (2kg)</h6>
                                    </div>
                                </div>
                                <div className="">

                                    <h3 className='text-[14px] text-primary font-normal font-inter'>$32.00</h3>
                                </div>
                            </div>

                            <div className="py-8.5 px-7.5 bg-[#F4F4FC] rounded-lg mt-11">
                                <h3 className='text-[18px] text-tertiary font-normal font-nunito border-b border-tertiary pb-2.5'>Subtotals: <span>£381.00</span></h3>
                                <h3 className='text-[18px] text-tertiary font-normal font-nunito border-b border-tertiary pb-2.5 mt-8'>Totals: <span>£381.00</span></h3>
                                <div className="flex gap-2 items-center mt-8">
                                    <input type="checkbox" />
                                    <p className='text-[10px] text-tertiary font-nunito font-normal'>Shipping & taxes calculated at checkout</p>
                                </div>
                                <button className="w-full bg-[#699405] border border-[#699405] text-[14px] text-white font-normal font-nunito py-2.5 px-4 rounded-xs mt-8 cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405] ">Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Cheakout_List
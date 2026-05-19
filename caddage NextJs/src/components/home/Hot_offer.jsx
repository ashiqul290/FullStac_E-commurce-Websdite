import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import offer from '../../../public/images/offer.png';

const Hot_offer = () => {
    return (
        <>
            <section className='pt-15 pb-9 bg-[#F7F5EB]'>
                <Container>
                    <div className="flex justify-between items-center gap-26.25">
                        <div className="w-1/2">
                            <Image className=' w-full' src={offer} alt="offer" />

                        </div>
                        <div className=" lg:w-1/2 w-full ">
                           <div className="py-30">
                             <h4 className='text-[18px] text-[#699405] font-bold font-nunito'>Todays Hot Deals</h4>
                            <h2 className='text-[50px] text-primary font-bold font-inter leading-[120%]'>Original Stock Honey Combo Package</h2>
                            <p className='text-[18px] text-tertiary font-normal font-nunito w-[90%] mt-5'>Cur tantas regiones barbarorum obiit, tot maria transmist summo bono fruitur id est voluptate barbarorum  </p>
                            <div className="flex items-center gap-5 mt-6">
                                <div className="">
                                    <h4 className='w-14.25 h-14.25 py-3.5 text-center bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white'>02</h4>
                                    <h2 className='text-[15px] text-tertiary font-normal font-inter'>days</h2>
                                </div>
                                <div className="">
                                    <h4 className='w-14.25 h-14.25 py-3.5 text-center bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white'>05</h4>
                                    <h2 className='text-[15px] text-tertiary font-normal font-inter'>Houres</h2>
                                </div>
                                <div className="">
                                    <h4 className='w-14.25 h-14.25 py-3.5 text-center bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white'>30</h4>
                                        <h2 className='text-[15px] text-tertiary font-normal font-inter'>Minutes</h2>
                                </div>
                                <div className="">
                                    <h4 className='w-14.25 h-14.25 py-3.5 text-center bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white'>59</h4>
                                    <h2 className='text-[15px] text-tertiary font-normal font-inter'>Seconds</h2>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center mt-7.5">
                                 <button className='bg-[#699405] border border-[#699405] text-white font-nunito font-bold text-[14px] px-7 py-3  cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]'>Shop Now</button>
                                 <button className='bg-[#699405] border border-[#699405] text-white font-nunito font-bold text-[14px] px-7 py-3  cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]'>Deal of The Day</button>
                            </div>
                            
                           </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Hot_offer

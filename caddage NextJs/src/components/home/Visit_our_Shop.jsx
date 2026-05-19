import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import need from '../../../public/images/need.png';
import needleft from '../../../public/images/needleft.png';
import Link from 'next/link';

const Visit_our_Shop = () => {
    return (
        <>
            <section className=' py-17.5 bg-[#525355] relative'>
                <Image className=' absolute top-47.5 left-0 ' src={needleft} alt="needleft"  /> 
                <Container>
                    <div className=" flex justify-between items-center">
                        <div className=" w-1/2 ">
                            <div className="py-30">
                                <h4 className='text-[18px] text-[#699405] font-bold font-nunito'>VISIT OUR SHOP</h4>
                                <h2 className='text-[50px] text-white font-bold font-inter leading-[120%]'>Need Any Organic Fresh Food ?</h2>
                                <p className='text-[18px] text-white font-normal font-nunito w-[90%] mt-5'>Cur tantas regiones barbarorum obiit, tot maria transmist summo bono fruitur id est voluptate barbarorum   </p>

                                <div className="flex gap-5 items-center mt-7.5">
                                    <Link href="/contact">
                                    
                                    <button className='bg-[#699405] border border-[#699405] text-white font-nunito font-bold text-[14px] px-11.5 py-4  cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]'>Contact Us</button>
                                    </Link>

                                </div>

                            </div>
                        </div>
                        <div className="w-1/3">
                            <Image className=' w-full' src={need} alt="need" />

                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Visit_our_Shop

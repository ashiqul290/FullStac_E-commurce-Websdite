import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import box from '../../../public/images/box.png';

const Trusted = () => {
  return (
   <>
   <section className='pt-54 pb-40 bg-white'>
    <Container>
        <div className=" lg:flex justify-between items-center gap-13.75">
        <div className="lg:w-1/2 w-full">
             <div className=" flex gap-11.25">
             <Image className='mb-10' src={box} alt="herb"  />   
             <Image className='mt-10' src={box} alt="herb"  />   
         </div>
        </div>
         <div className="lg:w-1/2 w-full">
            <h5 className='text-[18px] text-[#699405] font-bold font-nunito'>Know More About Shop</h5>
            <h2 className='text-[50px] text-primary font-bold font-inter leading-[120%]'>Trusted Organic Food Store For People</h2>

            <p className='text-[18px] text-tertiary font-normal font-nunito mt-8.75'>Buy natural, sustainable and chemicalfree products from local the country. We are a strong community of 100,000+</p>
            <p className='text-[18px] text-tertiary font-normal font-nunito mt-5.5'>sellers who aspire to be good, do good, and spread goodness. We democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.</p>

            <h3 className='text-[16px] text-tertiary font-bold font-nunito mt-7.5'>Jerry Henson</h3>
            <h5 className='text-[12px] text-tertiary font-normal font-nunito'> Shop Director</h5>
         </div>
        </div>
    </Container>
   </section>
   </>
  )
}

export default Trusted

import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import coun1 from '../../../public/images/coun1.png';
import coun2 from '../../../public/images/coun2.png';
import coun3 from '../../../public/images/coun3.png';
import coun4 from '../../../public/images/coun4.png';
import countop from '../../../public/images/countop.png';
import counleft from '../../../public/images/counleft.png';
import counright from '../../../public/images/counright.png';

const Counter_part = () => {
  return (
   <>
   <section className='py-18 bg-[#F5F5F5] relative'>
           <Image className=' absolute top-0 left-0 ' src={countop} alt="countop"  /> 
           <Image className=' absolute bottom-0 left-0 ' src={counleft} alt="counleft"  /> 
           <Image className=' absolute top-0 right-0 ' src={counright} alt="counright"  /> 

    <Container>
        <div className=" flex justify-between items-center">
            <div className="flex items-center gap-5 relative pr-10 after:absolute after:content-[''] after:w-1 after:h-full after:bg-[#699405] after:bottom-0 after:right-0 after:duration-300 after:ease-in-out ">
                <div className="">
                    <Image className=' ' src={coun1} alt="coun1" />

                </div>
                <div className="">
                    <h2 className='text-[42px] text-primary font-bold font-inter leading-[100%]'>560</h2>
                    <p className='text-[19px] text-primary font-normal font-nunito'>Good Reviews</p>
                </div>
            </div>
            <div className="flex items-center gap-5 relative pr-10 after:absolute after:content-[''] after:w-1 after:h-full after:bg-[#699405] after:bottom-0 after:right-0 after:duration-300 after:ease-in-out ">
                <div className="">
                    <Image className=' ' src={coun2} alt="coun2" />

                </div>
                <div className="">
                    <h2 className='text-[42px] text-primary font-bold font-inter leading-[100%]'>197</h2>
                    <p className='text-[19px] text-primary font-normal font-nunito'>Organic Branch</p>
                </div>
            </div>
            <div className="flex items-center gap-5 relative pr-10 after:absolute after:content-[''] after:w-1 after:h-full after:bg-[#699405] after:bottom-0 after:right-0 after:duration-300 after:ease-in-out ">
                <div className="">
                    <Image className=' ' src={coun3} alt="coun3" />

                </div>
                <div className="">
                    <h2 className='text-[42px] text-primary font-bold font-inter leading-[100%]'>268</h2>
                    <p className='text-[19px] text-primary font-normal font-nunito'>Cultivator Land</p>
                </div>
            </div>
            <div className="flex items-center gap-5  ">
                <div className="">
                    <Image className=' ' src={coun4} alt="coun4" />

                </div>
                <div className="">
                    <h2 className='text-[42px] text-primary font-bold font-inter leading-[100%]'>340</h2>
                    <p className='text-[19px] text-primary font-normal font-nunito'>Total Consumer</p>
                </div>
            </div>
           
           
            
        </div>
    </Container>
   </section>
   </>
  )
}

export default Counter_part

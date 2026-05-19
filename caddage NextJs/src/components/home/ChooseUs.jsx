import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import us01 from '../../../public/images/us01.png';
import us02 from '../../../public/images/us02.png';
import us03 from '../../../public/images/us03.png';
import us04 from '../../../public/images/us04.png';
import left from '../../../public/images/left.png';
import right from '../../../public/images/right.png';

const ChooseUs = () => {
  return (
    <>
    <section className='pt-26.75 pb-40 bg-[#F7F5EB] relative'>
         <Image className=' absolute -top-35 left-0 ' src={left} alt="left"  /> 
               <Image className=' absolute  right-0 top-0 ' src={right} alt="right"  />   
        <Container>
            <div className="">
                <h2 className='text-[48px] text-primary font-bold font-inter text-center'>Why Choose us</h2>
                <p className='text-[16px] text-tertiary font-normal font-nunito mt-5 text-center'>A highly efficient slip-ring scanner for today's diagnostic requirements.</p>
            </div>
            <div className=" lg:flex justify-between gap-7.5 mt-14">
                <div className="lg:w-1/2 w-full">
                <div className="group ">
                    <div className="duration-300 ease-in-out  group-hover:bg-[#699405] py-13.5 px-16 bg-white flex items-center gap-6 shadow-xl">
                    <div className="duration-300 ease-in-out p-6 bg-[#699405] group-hover:bg-tertiary">
                         <Image className='' src={us01} alt="us01"  />  
                    </div>
                    <div className="">
                        <h3 className='duration-300 ease-in-out text-[22px] text-primary font-bold font-inter group-hover:text-white'>Eat More Healthfully</h3>
                        <p className='duration-300 ease-in-out text-[16px] text-tertiary font-normal font-nunito mt-4.5 group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </div>
                </div>
                </div>
                <div className="lg:w-1/2 w-full">
                 <div className="group ">
                    <div className="duration-300 ease-in-out  group-hover:bg-[#699405] py-13.5 px-16 bg-white flex items-center gap-6 shadow-xl">
                    <div className="duration-300 ease-in-out p-6 bg-[#699405] group-hover:bg-tertiary">
                         <Image className='' src={us02} alt="us01"  />  
                    </div>
                    <div className="">
                        <h3 className='duration-300 ease-in-out text-[22px] text-primary font-bold font-inter group-hover:text-white'>Curated Products</h3>
                        <p className='duration-300 ease-in-out text-[16px] text-tertiary font-normal font-nunito mt-4.5 group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </div>
                </div></div>
            </div>
            <div className=" lg:flex justify-between gap-7.5 mt-7.5">
                <div className="lg:w-1/2 w-full">
                <div className="group ">
                    <div className="duration-300 ease-in-out  group-hover:bg-[#699405] py-13.5 px-16 bg-white flex items-center gap-6 shadow-xl">
                    <div className="duration-300 ease-in-out p-6 bg-[#699405] group-hover:bg-tertiary">
                         <Image className='' src={us03} alt="us01"  />  
                    </div>
                    <div className="">
                        <h3 className='duration-300 ease-in-out text-[22px] text-primary font-bold font-inter group-hover:text-white'>Pesticide Free Goods</h3>
                        <p className='duration-300 ease-in-out text-[16px] text-tertiary font-normal font-nunito mt-4.5 group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </div>
                </div>
                </div>
                <div className="lg:w-1/2 w-full">
                 <div className="group ">
                    <div className="duration-300 ease-in-out  group-hover:bg-[#699405] py-13.5 px-16 bg-white flex items-center gap-6 shadow-xl">
                    <div className="duration-300 ease-in-out p-6 bg-[#699405] group-hover:bg-tertiary">
                         <Image className='' src={us04} alt="us01"  />  
                    </div>
                    <div className="">
                        <h3 className='duration-300 ease-in-out text-[22px] text-primary font-bold font-inter group-hover:text-white'>Flexibility Returns</h3>
                        <p className='duration-300 ease-in-out text-[16px] text-tertiary font-normal font-nunito mt-4.5 group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </div>
                </div></div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default ChooseUs

import React from 'react'
import Container from '../common/Container'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image'
import about from '../../../public/images/about.png';


const About = () => {
  return (
    <>
    <section className='py-37 bg-[#F7F5EB] relative'>
       <Image className=' absolute bottom-0 left-6 ' src={about} alt="about"  /> 
      <Container>
        <div className="">
          <h2 className='text-[55px] text-primary font-bold font-inter leading-[120%]'>About</h2>
          <div className="flex items-center gap-2 text-[18px] text-[#133344] font-normal font-nunito">
            <h3>Home</h3>
            <MdOutlineKeyboardArrowRight/>
            <h3>About Us</h3>
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default About

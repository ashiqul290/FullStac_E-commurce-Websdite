import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo1 from '../../../public/images/logo1.png';
import logo2 from '../../../public/images/logo2.png';
import logo3 from '../../../public/images/logo3.png';
import logo4 from '../../../public/images/logo4.png';
import logo5 from '../../../public/images/logo5.png';

const Icon_part = () => {
  return (
    <>
    <section className='py-8 bg-[#F0F2F5]'>
        <Container>
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 items-center ">
       <Image className=' ' src={logo1} alt="logo1"  /> 

       <Image className=' ' src={logo2} alt="logo2"  /> 

       <Image className=' ' src={logo3} alt="logo3"  /> 

       <Image className=' ' src={logo4} alt="logo4"  /> 

       <Image className=' ' src={logo5} alt="logo5"  /> 

            </div>
        </Container>
    </section>
    </>
  )
}

export default Icon_part

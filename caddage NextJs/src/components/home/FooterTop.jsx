import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import FooterTop1 from '../../assets/FooterTopimg/vegetable.png'
import FooterTop2 from '../../assets/FooterTopimg/vegetablse.jpg'
import FooterTop3 from '../../assets/FooterTopimg/branch.png'
import FooterTop4 from '../../assets/FooterTopimg/truck.png'
export const FooterTop = () => {
  return (
    <>
    
    <div className="">
      <Container>
        <div className="bg-white  py-12.5 shadow-[0_0_25px] shadow-black/25 relative -bottom-16 z-10 rounded-sm flex justify-around ">
          <div className="flex items-center gap-4.5">
            <Image src={FooterTop1} width={50} height={50} alt="Footer Logo" />
            <div className="">
              <h2 className=' font-bold text-[18px] font-inter text-[#223645]'>Curated Products</h2>
              <p className=' font-normal text-[12px] font-nunito text-[#666E77]'>From handpicked sellers</p>
            </div>
          </div>
          <div className="flex items-center gap-4.5">
            <Image src={FooterTop1} width={50} height={50} alt="Footer Logo" />
            <div className="">
              <h2 className=' font-bold text-[18px] font-inter text-[#223645]'>Handmade</h2>
              <p className=' font-normal text-[12px] font-nunito text-[#666E77]'>From handpicked sellers</p>
            </div>
          </div>
          <div className="flex items-center gap-4.5">
            <Image src={FooterTop4} width={50} height={50} alt="Footer Logo" />
            <div className="">
              <h2 className=' font-bold text-[18px] font-inter text-[#223645]'>100% Natural</h2>
              <p className=' font-normal text-[12px] font-nunito text-[#666E77]'>From handpicked sellers</p>
            </div>
          </div>
          <div className="flex items-center gap-4.5">
            <Image src={FooterTop4} width={50} height={50} alt="Footer Logo" />
            <div className="">
              <h2 className=' font-bold text-[18px] font-inter text-[#223645]'>Shipping</h2>
              <p className=' font-normal text-[12px] font-nunito text-[#666E77]'>From handpicked sellers</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
    
    </>
  )
}

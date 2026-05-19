import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import jhu from '../../../public/images/jhu.png';   
import icon01 from '../../../public/images/icon01.png';   
import icon02 from '../../../public/images/icon02.png';   
import icon03 from '../../../public/images/icon03.png';   
import icon04 from '../../../public/images/icon04.png';   
import icon05 from '../../../public/images/icon05.png';   
import icon06 from '../../../public/images/icon06.png';   

const Product_Facilities = () => {
  return (
 <>
 <section className='pt-26.75 pb-28.5 bg-white'>
    <Container>
        <div className="">
             <h2 className='text-[48px] text-primary font-bold font-inter text-center leading-[100%]'>Product Facilities</h2>
                <p className='text-[16px] text-tertiary font-normal font-nunito mt-5 text-center'>
                    A highly efficient slip-ring scanner for today's diagnostic requirements.
                </p>
        </div>
        <div className="lg:flex justify-between items-center">
            <div className="lg:w-[30%] w-full">
                <div className="">
                <div className="flex items-center ">
                    <div className="">
                        <Image className=' ' src={icon01} alt="icon01" />
                    </div>
                    <div className=""> 
                        <h2 className='text-[22px] text-primary font-bold font-inter leading-[100%]'>Eat Healthy Food</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-3.25'>Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex items-center mt-12.5">
                    <div className="">
                        <Image className=' ' src={icon02} alt="icon02" />
                    </div>
                    <div className=""> 
                        <h2 className='text-[22px] text-primary font-bold font-inter leading-[100%]'>Pesticide Free</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-3.25'>Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex items-center mt-12.5">
                    <div className="">
                        <Image className=' ' src={icon03} alt="icon03" />
                    </div>
                    <div className=""> 
                        <h2 className='text-[22px] text-primary font-bold font-inter leading-[100%]'>ESweet Exotic Food</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-3.25'>Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="lg:w-[40%] w-full">
                <Image className=' w-full' src={jhu} alt="jhu" />

            </div>
           <div className="lg:w-[30%] w-full">
                <div className="">
                <div className="flex items-center ">
                    <div className="">
                        <Image className=' ' src={icon04} alt="icon04" />
                    </div>
                    <div className=""> 
                        <h2 className='text-[22px] text-primary font-bold font-inter leading-[100%]'>Order Flexibility</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-3.25'>Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex items-center mt-12.5">
                    <div className="">
                        <Image className=' ' src={icon05} alt="icon05" />
                    </div>
                    <div className=""> 
                        <h2 className='text-[22px] text-primary font-bold font-inter leading-[100%]'>Variety & Selection</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-3.25'>Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex items-center mt-12.5">
                    <div className="">
                        <Image className=' ' src={icon06} alt="icon06" />
                    </div>
                    <div className=""> 
                        <h2 className='text-[22px] text-primary font-bold font-inter leading-[100%]'>Livestock Product</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-3.25'>Est ante in nibh mauris. Ullamcor morbi tincidunt ornare massa</p>
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

export default Product_Facilities

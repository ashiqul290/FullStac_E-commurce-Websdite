import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import price from '../../../public/images/price.png';
import Link from 'next/link';

const Add_to_Cart = () => {
  return (
    <>
      <section className='py-28.75 bg-white'>
        <Container>
          <div className=" flex justify-between items-start gap-20">
            <div className="w-[70%]">
              <div className="flex justify-between items-center">
              
                <div className="w-[40%]">
                  <h2 className='  text-[22px] text-primary font-bold font-inter leading-[100%]'>Product</h2>
                </div>
                <div className="w-[20%]">

                <h2 className='  text-[22px] text-primary font-bold font-inter leading-[100%]'>Price</h2>
                </div>
                <div className="w-[20%]">

                <h2 className='  text-[22px] text-primary font-bold font-inter leading-[100%]'>Quantity</h2>
                </div>
                <div className="w-[20%]">

                <h2 className='  text-[22px] text-primary font-bold font-inter leading-[100%] text-end mr-5'>Total</h2>
                </div>
              </div>
              <div className="flex justify-between items-center mt-10 border-b border-tertiary pb-4">
                <div className="w-[40%]">
                  <div className=" flex gap-4 items-center">
                    <Image src={price} alt="price" />
                    <div className="">
                      <h4 className='text-[14px] text-primary font-normal font-inter'>Potato Cheaps Brown</h4>
                      <h5 className='text-[12px] text-tertiary font-normal font-nunito'>Color:Brown</h5>
                      <h6 className='text-[12px] text-tertiary font-normal font-nunito'>Quantity: (2kg)</h6>
                    </div>
                  </div>

                </div>
                <div className="w-[20%]">
                  <h3 className='text-[14px] text-primary font-normal font-inter'>$32.00</h3>
                </div>
                <div className="w-[20%]">
                  <div className=" w-[50%] p-1  flex justify-between">
                  <button className='py-0.5 px-2 cursor-pointer font-bold text-xl '>-</button>
                  <button>01</button>
                  <button className='py-0.5 px-1.5 cursor-pointer font-bold text-xl '>+</button>
                </div>
                </div>
                <div className="w-[20%]">
                  <h3 className='text-[14px] text-primary font-bold font-inter text-end mr-5'>$32.00</h3>
                </div>
              </div>
              <div className="flex justify-between items-center mt-10 border-b border-tertiary pb-4">
                <div className="w-[40%]">
                  <div className=" flex gap-4 items-center">
                    <Image src={price} alt="price" />
                    <div className="">
                      <h4 className='text-[14px] text-primary font-normal font-inter'>Potato Cheaps Brown</h4>
                      <h5 className='text-[12px] text-tertiary font-normal font-nunito'>Color:Brown</h5>
                      <h6 className='text-[12px] text-tertiary font-normal font-nunito'>Quantity: (2kg)</h6>
                    </div>
                  </div>

                </div>
                <div className="w-[20%]">
                  <h3 className='text-[14px] text-primary font-normal font-inter'>$32.00</h3>
                </div>
                <div className="w-[20%]">
                  <div className=" w-[50%] p-1  flex justify-between">
                  <button className='py-0.5 px-2 cursor-pointer font-bold text-xl '>-</button>
                  <button>01</button>
                  <button className='py-0.5 px-1.5 cursor-pointer font-bold text-xl '>+</button>
                </div>
                </div>
                <div className="w-[20%]">
                  <h3 className='text-[14px] text-primary font-bold font-inter text-end mr-5'>$32.00</h3>
                </div>
              </div>
              <div className="flex justify-between items-center mt-10 border-b border-tertiary pb-4">
                <div className="w-[40%]">
                  <div className=" flex gap-4 items-center">
                    <Image src={price} alt="price" />
                    <div className="">
                      <h4 className='text-[14px] text-primary font-normal font-inter'>Potato Cheaps Brown</h4>
                      <h5 className='text-[12px] text-tertiary font-normal font-nunito'>Color:Brown</h5>
                      <h6 className='text-[12px] text-tertiary font-normal font-nunito'>Quantity: (2kg)</h6>
                    </div>
                  </div>

                </div>
                <div className="w-[20%]">
                  <h3 className='text-[14px] text-primary font-normal font-inter'>$32.00</h3>
                </div>
                <div className="w-[20%]">
                  <div className=" w-[50%] p-1  flex justify-between">
                  <button className='py-0.5 px-2 cursor-pointer font-bold text-xl '>-</button>
                  <button>01</button>
                  <button className='py-0.5 px-1.5 cursor-pointer font-bold text-xl '>+</button>
                </div>
                </div>
                <div className="w-[20%]">
                  <h3 className='text-[14px] text-primary font-bold font-inter text-end mr-5'>$32.00</h3>
                </div>
              </div>
              <div className="flex justify-between items-center mt-10 border-b border-tertiary pb-4">
                <div className="w-[40%]">
                  <div className=" flex gap-4 items-center">
                    <Image src={price} alt="price" />
                    <div className="">
                      <h4 className='text-[14px] text-primary font-normal font-inter'>Potato Cheaps Brown</h4>
                      <h5 className='text-[12px] text-tertiary font-normal font-nunito'>Color:Brown</h5>
                      <h6 className='text-[12px] text-tertiary font-normal font-nunito'>Quantity: (2kg)</h6>
                    </div>
                  </div>

                </div>
                <div className="w-[20%]">
                  <h3 className='text-[14px] text-primary font-normal font-inter'>$32.00</h3>
                </div>
                <div className="w-[20%]">
                  <div className=" w-[50%] p-1  flex justify-between">
                  <button className='py-0.5 px-2 cursor-pointer font-bold text-xl '>-</button>
                  <button>01</button>
                  <button className='py-0.5 px-1.5 cursor-pointer font-bold text-xl '>+</button>
                </div>
                </div>
                <div className="w-[20%]">
                  <h3 className='text-[14px] text-primary font-bold font-inter text-end mr-5'>$32.00</h3>
                </div>
              </div>

              <div className="mt-4.5 flex justify-between items-end">
                <div className="">
                  <h4>Add promo Code</h4>
                 <label className='flex items-center' htmlFor="">
                  < input type="text" className=' p-2 border border-[#699405] outline-none  mt-2'  />
                 <button className='bg-[#699405] border border-[#699405] text-white font-normal font-nunito py-2 px-4  mt-2 cursor-pointer leading-[150%] duration-300 ease-in-out hover:bg-white hover:text-[#699405] '>Apply Code</button>
                 </label>
                </div>
                <button className='bg-white border border-[#699405] text-[#699405] font-normal font-nunito py-2.5 px-7.5  mt-8 cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white '>Clear Cart</button>
              </div>



            </div>
            <div className="w-[30%]">
              <div className="">
                <h3 className='text-[22px] text-primary font-bold font-inter leading-[100%] text-center'>Cart Totals</h3>
                <div className="py-8.5 px-7.5 bg-[#F4F4FC] rounded-lg mt-11">
                  <h3 className='text-[18px] text-tertiary font-normal font-nunito border-b border-tertiary pb-2.5'>Subtotals: <span>£381.00</span></h3>
                  <h3 className='text-[18px] text-tertiary font-normal font-nunito border-b border-tertiary pb-2.5 mt-8'>Totals: <span>£381.00</span></h3>
                  <div className="flex gap-2 items-center mt-8">
                    <input type="checkbox" />
                    <p className='text-[10px] text-tertiary font-nunito font-normal'>Shipping & taxes calculated at checkout</p>
                  </div>
                  <Link href="/cheakout">
                  <button className="w-full bg-[#699405] border border-[#699405] text-[14px] text-white font-normal font-nunito py-2.5 px-4 rounded-[2px] mt-8 cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405] ">Proceed to Checkout</button>
                  </Link>
                </div>
              </div>
              <div className="mt-7.5">
                <h3 className='text-[22px] text-primary font-bold font-inter leading-[100%] text-center'>Calculate Shipping</h3>
                <div className="py-8.5 px-7.5 bg-[#F4F4FC] rounded-lg mt-6.5">
                  <h3 className='text-[18px] text-tertiary font-normal font-nunito border-b border-tertiary pb-2.5'>Bangladesh</h3>
                  <h3 className='text-[18px] text-tertiary font-normal font-nunito border-b border-tertiary pb-2.5 mt-8'>Mirpur Dohs Dhaka-1200</h3>
                  <h3 className='text-[18px] text-tertiary font-normal font-nunito border-b border-tertiary pb-2.5 mt-8'>Postal Code</h3>
                  
                  <button className="w-full bg-[#699405] border border-[#699405] text-[14px] text-white font-normal font-nunito py-2.5 px-4 rounded-xs mt-8 cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405] ">Calculate Shiping</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Add_to_Cart
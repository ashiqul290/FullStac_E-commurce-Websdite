"use client"
import React, { useState } from 'react'
import { IoGridSharp, IoSearch } from 'react-icons/io5'
import { MdFormatListNumbered } from 'react-icons/md'
import Container from '../common/Container'
import Shop_list from './Shop_list'
import Product_Catagoris from '../pages/Product_Catagori'

const RootShop = () => {
  let [showBoxProduct, setShowBoxProduct] = useState(false)

  let handleboxProduct = () => {
    setShowBoxProduct(false)
  }
   let handlesideProduct = () => {
    setShowBoxProduct(true)
  }
  return (
    <>
    <main className="pt-28.25">
    <Container>

         <div className="flex justify-between items-center ">
            <div className="">
   
              <h2 className='text-[25px] text-primary font-bold font-inter leading-[100%]'>Organic Fresh Food Fresh Juices</h2>
              <p className='text-[15px] text-[#666E77] font-normal font-nunito mt-4'>About 9,620 results (0.62 seconds) </p>
            </div>
            <div className=" flex justify-end gap-6.5 items-center">
              {/* <div className="flex items-center gap-2">
                <h3>Per Page:</h3>
                <select className='py-1 px-2 border outline-none' name="" id="">
                  <option value="06">08</option>
                  <option value="12">12</option>
                  <option value="20">20</option>
                </select>
              </div> */}
              <div className="flex items-center gap-2">
                <h3>Sort By:</h3>
                <select className='py-1 px-2 border outline-none' name="" id="">
                  <option value="Best Match">Best Match</option>
                  <option value="Good Match">Good Match</option>
                  <option value="Match">Match</option>
                </select>
              </div>

              <div className=" flex gap-2">

                <button onClick={handleboxProduct} className="p-2.5 bg-white cursor-pointer shadow-xl duration-300 ease-in-out hover:text-[#699405]">
                  <IoGridSharp />
                </button>
                <button onClick={handlesideProduct} className="p-2.5 bg-white cursor-pointer shadow-xl duration-300 ease-in-out hover:text-[#699405]">
                  <MdFormatListNumbered />
                </button>


              </div>
              <div className="">
              
                 <label className='flex items-center' htmlFor="">
                  < input type="Search" className=' w-49 p-2 border border-[#699405] outline-none  mt-2'placeholder=' Search'  />
                 <button className='bg-[#699405] border border-[#699405] text-white font-normal font-nunito py-3 px-4  mt-2 cursor-pointer leading-[150%] duration-300 ease-in-out hover:bg-white hover:text-[#699405] '><IoSearch /></button>
                 </label>
              </div>

            </div>
          </div>
       </Container>


    {
      showBoxProduct ?  <Product_Catagoris /> : <Shop_list/>
    }
            


       </main>
    </>
  )
}

export default RootShop

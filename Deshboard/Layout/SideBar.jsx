import React, { useState } from 'react'
import { CiGrid41 } from 'react-icons/ci'
import { FaBabyCarriage, FaUsers } from 'react-icons/fa'
import { FaBuildingUser } from 'react-icons/fa6'
import { TbCategoryPlus } from 'react-icons/tb'
import { Link } from 'react-router'
import allcategoryicon from '../public/menu.png'
import { IoIosArrowDown } from 'react-icons/io'
import imglogo from "../src/assets/Group 15654.png"
const SideBar = () => {
  let [showProduct, setshowProdut] = useState(false)
  let [showCategory, setshowCategory] = useState(false)
  let [showBanner, setshowBanner] = useState(false)
  let [showMerchant, setshowMerchant] = useState(false)
  let [showOrder, setshowOrder] = useState(false)
  return (
    <>
        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
      <div
        id="sidebar-collapse-menu"
        className="bg-white example shadow-lg h-screen fixed top-0 left-0 overflow-auto z-[99] lg:min-w-[250px] lg:w-max max-lg:w-0 max-lg:invisible transition-all duration-500"
      >
        <div className="flex items-center gap-2 pt-6 pb-2 px-4 sticky top-0 bg-white min-h-16 z-100">
       <img src={imglogo} alt="Logo" className=' text-2xl font-bold text-green-700' />
       <h2 className=' text-2xl font-bold text-green-700'>Caddage</h2>
         
        </div>
        <div className="py-4 px-4">
            
          <ul className="space-y-2">
            <li>
              <Link
                to={'/'}
                className="text-slate-800 text-[15px] font-medium flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
              >
               <CiGrid41  className=' text-2xl'/>
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                  Dashboard
                </span>
              
              </Link>
            </li>
          
          </ul>
          <div>
             <div onClick={()=>setshowProdut(!showProduct)} className="flex items-center rounded-[10px] duration-500 justify-between hover:bg-gray-200">
               <h6 className="text-black  py-2  text-[20px] font-bold px-3">
                  Products List 
            </h6>
            <IoIosArrowDown className=' text-2xl' />
            </div>
                {
                  showProduct && (
            <ul className="space-y-2">
           
            <li>
              <Link
                to={'/add-product'}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[18px] h-[18px] mr-3"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0-2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6z"
                    data-original="#000000"
                  />
                  <path
                    d="M12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z"
                    data-original="#000000"
                  />
                  <path
                    d="M6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z"
                    data-original="#000000"
                  />
                </svg>
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                  Add Product
                </span>
                
              </Link>
           
            </li>
            <li>
              <Link
               to={'/all-product'}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 gap-2 rounded-md px-3 py-2.5 transition-all duration-300"
              >
              <FaBabyCarriage className=' text-xl' />
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                 All Product
                </span>
              
              </Link>
            </li>
          </ul> )  
                }
          </div>
          <div className="">
              <div onClick={()=>setshowCategory(!showCategory)} className="flex items-center rounded-[10px] duration-500 justify-between hover:bg-gray-200">
               <h6 className="text-black  py-2  text-[20px] font-bold px-3">
              Category List 
            </h6>
            <IoIosArrowDown className=' text-2xl' />
            </div>
                {
                  showCategory && 
            <ul className="space-y-2">
           
            <li>
              <Link
                to={'/add-category'}
                className="text-slate-800 text-[15px] font-medium flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
              >
               <TbCategoryPlus className=' text-xl'  />
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                  Add Category
                </span>
                
              </Link>
           
            </li>
            <li>
              <Link
               to={'/all-category'}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 gap-2 rounded-md px-3 py-2.5 transition-all duration-300"
              >
             <img src={allcategoryicon} className='w-6' alt="" />
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                 All Category
                </span>
              
              </Link>
            </li>
          </ul>
                }
          </div>
          <div className="">
            <div onClick={()=>setshowBanner(!showBanner)} className="flex items-center rounded-[10px] duration-500 justify-between hover:bg-gray-200">
               <h6 className="text-black  py-2  text-[20px] font-bold px-3">
              Banner
            </h6>
            <IoIosArrowDown className=' text-2xl' />
            </div>
               {
                  showBanner &&
            <ul className="space-y-2">
           
            <li>
              <Link
                to={'/add-banner'}
                className="text-slate-800 text-[15px] font-medium flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
              >
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[18px] h-[18px] "
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0-2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6z"
                    data-original="#000000"
                  />
                  <path
                    d="M12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z"
                    data-original="#000000"
                  />
                  <path
                    d="M6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z"
                    data-original="#000000"
                  />
                </svg>
              
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                  Add Banner
                </span>
                
              </Link>
           
            </li>
            <li>
              <Link
                to={'/all-banners'}
                className="text-slate-800 text-[15px] font-medium flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
              >
               
              
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                  All Banner
                </span>
                
              </Link>
           
            </li>
           
          </ul>
               } 
          </div>
          <div className="">
             <div onClick={()=>setshowMerchant(!showMerchant)} className="flex items-center rounded-[10px] duration-500 justify-between hover:bg-gray-200">
               <h6 className="text-black  py-2  text-[20px] font-bold px-3">
              Users 
            </h6>
            <IoIosArrowDown className=' text-2xl' />
            </div>
                {
                  showMerchant &&
            <ul className="space-y-2">
           
            <li>
              <Link
                to={'/all-users'}
                className="text-slate-800 text-[15px] font-medium flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2.5 transition-all duration-300"
              >
               <FaUsers className=' text-xl'  />
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                  All User
                </span>
                
              </Link>
           
            </li>
            <li>
              <Link
               to={'/all-marchent'}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 gap-2 rounded-md px-3 py-2.5 transition-all duration-300"
              >
              <FaBuildingUser className=' text-xl' />
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                 All Marchent
                </span>
              
              </Link>
            </li>
          </ul>
                }
          </div>
          <div className="">
            <div onClick={()=>setshowOrder(!showOrder)} className="flex items-center rounded-[10px] duration-500 justify-between hover:bg-gray-200">
               <h6 className="text-black  py-2  text-[20px] font-bold px-3">
              Order List 
            </h6>
            <IoIosArrowDown className=' text-2xl' />
            </div>
               {
                  showOrder &&
            <ul className="space-y-0">
           
            <li>
              <Link
                to={'/all-orders'}
                className="text-slate-800 text-[15px] font-medium flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 transition-all duration-300"
              >
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                  All orders
                </span>
                
              </Link>
           
            </li>
            <li>
              <Link
               to={'/new-orders'}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 gap-2 rounded-md px-3 py-2 transition-all duration-300"
              >
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                New orders
                </span>
              
              </Link>
            </li>
            <li>
              <Link
               to={'/panding-orders'}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 gap-2 rounded-md px-3 py-2 transition-all duration-300"
              >
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                Pending orders
                </span>
              
              </Link>
            </li>
            <li>
              <Link
               to={'/all-marchent'}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 gap-2 rounded-md px-3 py-2 transition-all duration-300"
              >
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                Cencel orders
                </span>
              
              </Link>
            </li>
            <li>
              <Link
               to={'/all-marchent'}
                className="text-slate-800 text-[15px] font-medium flex items-center cursor-pointer hover:bg-gray-100 gap-2 rounded-md px-3 py-2 transition-all duration-300"
              >
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                Aprov orders
                </span>
              
              </Link>
            </li>
          </ul>
               } 
          </div>
         
        </div>
      </div>
    </nav> 

    </>
  )
}

export default SideBar
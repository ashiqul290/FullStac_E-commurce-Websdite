import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import img from "../src/assets/WhatsApp_Image_2026-03-15_at_1.10.11_AM-removebg-preview.png";
import useLoginInfo from "../ZustandStore/store";
import { useNavigate } from "react-router";
import axios from "axios";
export const Header = () => {
  const navigate = useNavigate();
  let [showNot , setShowNot] = useState(false)
  let [showPro , setShowPro] = useState(false)
  let [showProfile , setShowProfile] = useState(false)
  const {user} = useLoginInfo()
const { removeUserInfo } = useLoginInfo();

let handleLogout = async () => {
  try {
    await axios.post(
      "http://localhost:5100/api/v1/api/auth/logout",
      {},
      { withCredentials: true }
    );

    removeUserInfo(); // 👈 Zustand clear
    navigate("/login"); // 👈 redirect
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <header className="z-50  bg-white sticky top-0 pt-4">
        <div className="flex flex-wrap items-center px-10 py-2 bg-white min-h-14 rounded-md w-full relative tracking-wide">
          <div className="flex items-center flex-wrap gap-x-8 gap-y-4 z-50 w-full">
        
            <div className="flex items-center gap-8 ml-auto">
              <div className="dropdown-menu relative flex shrink-0 group">
                <div onClick={()=>setShowNot(!showNot)} className=" border-2 border-gray-300 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer">

               <IoMdNotificationsOutline className=" text-2xl text-gray-700" />
               <div className="">
                <span className=" absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">5</span>
               </div>
                </div>
              {
                showNot?   <div className="  shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-90">
                  <div className="w-full">
                   <div className="">
                    <h2 className=" text-xl font-bold py-3">Notification</h2>
                    <button onClick={()=>setShowNot(false)} className=" absolute corp top-3 right-3 text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out">

                    <IoClose className=" text-4xl" />
                    </button>
                   </div>
                    <hr className="my-2 -mx-2 border-gray-200" />
                    <div className=" flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out border-b border-gray-200">
                      <img src="https://readymadeui.com/team-1.webp" className="w-10 rounded-full" alt="" />
                      <div className="">
                        <h3 className=" text-md font-medium text-gray-800">John Doe</h3>
                        <p className=" text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.</p>
                        <div className=" flex items-center gap-8 text-xs text-gray-400">
                          <h3>Product</h3>
                          <ul>
                            <li className=" list-disc">5 min ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-2 flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out border-b border-gray-200">
                      <img src="https://readymadeui.com/team-1.webp" className="w-10 rounded-full" alt="" />
                      <div className="">
                        <h3 className=" text-md font-medium text-gray-800">John Doe</h3>
                        <p className=" text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.</p>
                        <div className=" flex items-center gap-8 text-xs text-gray-400">
                          <h3>Product</h3>
                          <ul>
                            <li className=" list-disc">5 min ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-2 flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out border-b border-gray-200">
                      <img src="https://readymadeui.com/team-1.webp" className="w-10 rounded-full" alt="" />
                      <div className="">
                        <h3 className=" text-md font-medium text-gray-800">John Doe</h3>
                        <p className=" text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.</p>
                        <div className=" flex items-center gap-8 text-xs text-gray-400">
                          <h3>Product</h3>
                          <ul>
                            <li className=" list-disc">5 min ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-2 flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out border-b border-gray-200">
                      <img src="https://readymadeui.com/team-1.webp" className="w-10 rounded-full" alt="" />
                      <div className="">
                        <h3 className=" text-md font-medium text-gray-800">John Doe</h3>
                        <p className=" text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.</p>
                        <div className=" flex items-center gap-8 text-xs text-gray-400">
                          <h3>Product</h3>
                          <ul>
                            <li className=" list-disc">5 min ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-2 flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out border-b border-gray-200">
                      <img src="https://readymadeui.com/team-1.webp" className="w-10 rounded-full" alt="" />
                      <div className="">
                        <h3 className=" text-md font-medium text-gray-800">John Doe</h3>
                        <p className=" text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.</p>
                        <div className=" flex items-center gap-8 text-xs text-gray-400">
                          <h3>Product</h3>
                          <ul>
                            <li className=" list-disc">5 min ago</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> : ""
              }
              </div>
              <div className=" relative flex  shrink-0 group">
               <button onClick={()=>setShowPro(!showPro)}>
                 <div className="w-9 h-9 overflow-hidden  rounded-full">
                  <img
                  src={img}
                  alt="profile-pic"
                  className=" rounded-full border-2 border-gray-300 cursor-pointer"
                />
                 </div>
               </button>
                {
                  showPro? <div className=" shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-56">
                  <div className="w-full">
                     <div className="">
                    <h2 className=" text-xl font-bold py-3">Profile</h2>
                    <button onClick={()=>setShowPro(false)} className=" absolute corp top-3 right-3 text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out">

                    <IoClose className=" text-4xl" />
                    </button>
                   </div>
                   <div className=" bg-white border-gray-200">
                         <div className="w-15 mt-5 mx-auto h-15 overflow-hidden  rounded-full">
                  <img
                  src={img}
                  alt="profile-pic"
                  className=" rounded-full border-2 border-gray-300 cursor-pointer"
                />
                 </div>

                 <h2 className=" font-bold text-3xl text-center capitalize my-2">{user?.data?.name}</h2>
                 <div className=" text-center">
                  <h3 className=" bg-blue-200  inline-block px-2 py-1 rounded-md font-bold my-2">{user?.data?.role}</h3>
                 </div>
                 <h3 className=" text-sm text-center font-semibold">{user?.data?.email}</h3>
                      </div>
                      <hr className="my-5 -mx-2 border-gray-200" />
                    
                    <button onClick={handleLogout}
                      className="text-[15px] w-full text-slate-800 font-medium cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[18px] h-[18px] mr-3 fill-current"
                        viewBox="0 0 6 6"
                      >
                        <path
                          d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                          data-original="#000000"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div> : ""
                }
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

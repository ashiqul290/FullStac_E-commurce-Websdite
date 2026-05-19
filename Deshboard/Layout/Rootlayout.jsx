import React, { useState } from "react";
import { Outlet } from "react-router";
import SideBar from "./SideBar";
import { Header } from "./Header";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import PrivateRoute from "../private/PrivateRoute";

const Rootlayout = () => {
  let [show , setShow] = useState(true)
  return (
    <PrivateRoute>
      <div className="relative bg-[#f7f6f9] h-full min-h-screen">
        <div className="flex items-start">
          {
           show?  <SideBar /> : ""
          }

          <section className="main-content w-full">
       <div className=" bg-white flex items-center px-2">
        <button onClick={()=>setShow(!show)} className=" cursor-pointer">
          <HiMiniBars3CenterLeft className=" text-4xl" />
        </button>
         <div className="w-full ">
            <Header />
         </div>
       </div>
            <div className="my-6 px-2">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Rootlayout;

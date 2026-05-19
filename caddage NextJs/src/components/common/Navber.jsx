"use client";

import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import Navberdata from "@/data/navber";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navber = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="py-3 sticky top-0 z-99 bg-white shadow-sm">
        <Container>
          <div className="flex justify-between items-center">
            <div className="">
              <Link href={"/"}>
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <div className=" flex items-center gap-8">
              <div className="">
                <ul className="flex items-center gap-10">
                  {Navberdata?.navlist?.map((item, index) => {
                    const isActive = pathname === item.url;

                    return (
                      <li
                        key={index}
                        className="text-[17px] font-nunito font-bold relative group"
                      >
                        <Link
                          href={item?.url}
                          className={`duration-300 ease-in-out outline-none ${
                            isActive
                              ? "text-[#699405]"
                              : "text-primary hover:text-[#699405]"
                          }`}
                        >
                          {item?.title}
                        </Link>

                        <span
                          className={`absolute left-0 bottom-0 h-0.5 bg-[#699405] transition-all duration-300
        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                        ></span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex border border-gray-300 rounded-full items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className=" focus:outline-none px-2 py-3"
                />
                <button className="bg-[#699405] px-5 py-2 rounded-full">
                  <IoMdSearch className=" text-2xl text-white" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navber;

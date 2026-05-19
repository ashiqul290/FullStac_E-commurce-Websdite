import React from "react";
import Container from "./Container";
import { GrLocation } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import {
  FaFacebookF,
  FaBehance,
  FaPinterestP,
  FaRegUser,
} from "react-icons/fa";
import Image from "next/image";
import hea from "../../../public/images/hea.png";
import ban from "../../../public/images/ban1.png";
import { PiShoppingCart } from "react-icons/pi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="py-3 bg-[#0A472E]">
        <Container>
          <div className="flex justify-between items-center text-white">
            <div className="flex gap-4 items-center">
              <div className=" flex gap-1 items-center">
                <p className="text-[15px] font-normal font-nunito">
                  Welcome to Xprako!{" "}
                </p>
              </div>
              <div className=" flex gap-1 items-center border-l-2 border-[#699405] pl-4">
                <p className="text-[15px] font-normal font-nunito">
                  Call :+880 161 853 2116
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex">
                <div className="p-2.5 relative text-white text-2xl rounded-full cursor-pointer duration-300 ease-in-out hover:text-sky-500">
                  <Sheet>
                    <SheetTrigger>
                      <FaRegUser />
                    </SheetTrigger>
                    <div>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Login</SheetTitle>
                          <SheetDescription>
                            Enter your email and password to access your
                            account.
                          </SheetDescription>
                        </SheetHeader>
                        {/* Login form goes here */}
                        <div className="px-5">
                          <div className="relative mb-3 border border-gray-300 rounded-md w-full ">
                            <input
                              type="email"
                              placeholder=""
                              className="peer w-full px-3 py-3 text-[16px] focus:outline-none"
                            />
                            <label
                              className="
                    pointer-events-none
                    absolute left-3 
                     top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                            >
                              Email Address *
                            </label>
                          </div>
                          <div className="relative mb-3 border border-gray-300 rounded-md w-full mt-5">
                            <input
                              type="password"
                              placeholder=" "
                              className="peer w-full px-3 py-3 text-[16px] focus:outline-none"
                            />

                            <label
                              className="
                    pointer-events-none
                    absolute left-3 
                     top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                            >
                              Password *
                            </label>
                          </div>
                          <div className=" flex items-center justify-between my-5">
                            <div className="flex items-center gap-2 mt-4">
                              <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                              />
                              <label
                                htmlFor="remember"
                                className="text-sm text-gray-600"
                              >
                                Remember me
                              </label>
                            </div>
                            <button className="underline font-medium font-inter text-black cursor-pointer">
                              Lost Password?
                            </button>
                          </div>
                          <button className="w-full bg-primary text-white py-3 text-xl rounded cursor-pointer">
                            Login
                          </button>
                          <div>
                            <h3 className=" text-gray-600 text-center mt-5">
                              No account yet?{" "}
                              <button className=" underline font-medium font-inter text-black cursor-pointer">
                                Create Account
                              </button>
                            </h3>
                          </div>
                        </div>
                      </SheetContent>
                    </div>
                    {/* <div>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Login</SheetTitle>
                          <SheetDescription>
                            Enter your email and password to access your
                            account.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="px-5">
                          <div className="relative mb-3 border border-gray-300 rounded-md w-full ">
                            <input
                              type="email"
                              placeholder=""
                              className="peer w-full px-3 py-3 text-[16px] focus:outline-none"
                            />
                            <label
                              className="
                    pointer-events-none
                    absolute left-3 
                     top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                            >
                              Email Address *
                            </label>
                          </div>
                          <div className="relative mb-3 border border-gray-300 rounded-md w-full mt-5">
                            <input
                              type="password"
                              placeholder=" "
                              className="peer w-full px-3 py-3 text-[16px] focus:outline-none"
                            />

                            <label
                              className="
                    pointer-events-none
                    absolute left-3 
                     top-4 text-gray-500 
      transition-all duration-200 
      peer-focus:-top-2 
      peer-focus:text-sm 
      peer-focus:bg-white 
      peer-focus:px-1
      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-sm
      peer-not-placeholder-shown:bg-white
      peer-not-placeholder-shown:px-1
    "
                            >
                              Password *
                            </label>
                          </div>
                          <div className=" flex items-center justify-between my-5">
                            <div className="flex items-center gap-2 mt-4">
                              <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                              />
                              <label
                                htmlFor="remember"
                                className="text-sm text-gray-600"
                              >
                                Remember me
                              </label>
                            </div>
                            <button className="underline font-medium font-inter text-black cursor-pointer">
                              Lost Password?
                            </button>
                          </div>
                          <button className="w-full bg-primary text-white py-3 text-xl rounded cursor-pointer">
                            Login
                          </button>
                          <div>
                            <h3 className=" text-gray-600 text-center mt-5">
                              No account yet?{" "}
                              <button className=" underline font-medium font-inter text-black cursor-pointer">
                                Create Account
                              </button>
                            </h3>
                          </div>
                        </div>
                      </SheetContent>
                    </div> */}
                  </Sheet>
                </div>
                <Link href="/addToCart">
                <div className="p-2.5 relative text-white text-3xl rounded-full cursor-pointer duration-300 ease-in-out hover:text-sky-500">
                  <PiShoppingCart />
                  <span className="absolute top-0 right-0 text-xs bg-[#699405] text-white rounded-full px-1">
                    2
                  </span>
                </div>
                </Link>
              </div>
              <div className="flex gap-1 items-center border-l-2 border-[#6acc19] pl-4">
                <div className="flex items-center gap-1 px-1 = rounded opacity-90 transition-all bg-[#0A472E] cursor-pointer">
                  <Image src={hea} alt="header img" width={18} height={18} />
                  <h2 className="text-[12px] font-normal font-nunito">EN</h2>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;

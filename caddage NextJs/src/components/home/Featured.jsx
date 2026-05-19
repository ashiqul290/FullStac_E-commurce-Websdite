import React from "react";
import { FaSearchPlus, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Container from "../common/Container";

const Featured = () => {
  return (
    <>
    <div className={` text-center `}>
          <h2 className={`text-[48px] font-bold font-inter text-primary `}>
            Featured Products
          </h2>
          <p className={`text-[16px] font-nunito font-medium text-tertiary mt-4.75`}>
           A highly efficient slip-ring scanner for todays diagnostic requirements.
          </p>
        </div>
      <Container>
        <div className="grid grid-cols-4 gap-5 justify-between my-9">
          <div className="w-67.5 h-92.5 group-hover: group  duration-500 p-2 shadow-[0_0_5px] shadow-gray-950/15 rounded-[10px] ">
            <div className=" relative w-full h-57.5 bg-tertiary rounded-[10px]">
              <div className=" group-hover:flex duration-500 ease-in-out hidden gap-1  rounded-[10px] justify-center items-center w-full h-full group-hover:bg-tertiary/40">
                <div className=" cursor-pointer bg-white  w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500 ">

                <IoCartOutline className=""/>
                </div>
                <div className=" cursor-pointer bg-white w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <CiHeart className=""/>
                </div>
                <div className=" cursor-pointer bg-white p-2 w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <FaSearchPlus className=""/>
                </div>
              </div>
            </div>

            <div className="px-4.25 flex justify-between items-start mt-6.25">
              <div className="">
                <div className="flex gap-1 items-center">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <span className=" ml-2 bg-[#699405]/15 px-1 text-[#699405]">
                    (24)
                  </span>
                </div>
                <h3 className="text-[16px] font-bold font-inter text-primary mt-2 mb-3">
                  Carrots Group Scal
                </h3>
                <h4 className="font-bold font-nunito text-[15px] text-tertiary ">
                  $32.00{" "}
                  <del className="text-[12px] text-[#699405] font-bold">
                    $45.00
                  </del>
                </h4>
              </div>
              <div className="w-[50px]  bg-[#699405] rounded-br-[15px] rounded-tl-[15px] text-white flex justify-center">
                <h4>-20%</h4>
              </div>
            </div>
          </div>
          <div className="w-67.5 h-92.5 group-hover: group  duration-500 p-2 shadow-[0_0_5px] shadow-gray-950/15 rounded-[10px] ">
            <div className=" relative w-full h-57.5 bg-tertiary rounded-[10px]">
              <div className=" group-hover:flex duration-500 ease-in-out hidden gap-1  rounded-[10px] justify-center items-center w-full h-full group-hover:bg-tertiary/40">
                <div className=" cursor-pointer bg-white  w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500 ">

                <IoCartOutline className=""/>
                </div>
                <div className=" cursor-pointer bg-white w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <CiHeart className=""/>
                </div>
                <div className=" cursor-pointer bg-white p-2 w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <FaSearchPlus className=""/>
                </div>
              </div>
            </div>

            <div className="px-4.25 flex justify-between items-start mt-6.25">
              <div className="">
                <div className="flex gap-1 items-center">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <span className=" ml-2 bg-[#699405]/15 px-1 text-[#699405]">
                    (24)
                  </span>
                </div>
                <h3 className="text-[16px] font-bold font-inter text-primary mt-2 mb-3">
                  Carrots Group Scal
                </h3>
                <h4 className="font-bold font-nunito text-[15px] text-tertiary ">
                  $32.00{" "}
                  <del className="text-[12px] text-[#699405] font-bold">
                    $45.00
                  </del>
                </h4>
              </div>
              <div className="w-[50px]  bg-[#699405] rounded-br-[15px] rounded-tl-[15px] text-white flex justify-center">
                <h4>-20%</h4>
              </div>
            </div>
          </div>
          <div className="w-67.5 h-92.5 group-hover: group  duration-500 p-2 shadow-[0_0_5px] shadow-gray-950/15 rounded-[10px] ">
            <div className=" relative w-full h-57.5 bg-tertiary rounded-[10px]">
              <div className=" group-hover:flex duration-500 ease-in-out hidden gap-1  rounded-[10px] justify-center items-center w-full h-full group-hover:bg-tertiary/40">
                <div className=" cursor-pointer bg-white  w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500 ">

                <IoCartOutline className=""/>
                </div>
                <div className=" cursor-pointer bg-white w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <CiHeart className=""/>
                </div>
                <div className=" cursor-pointer bg-white p-2 w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <FaSearchPlus className=""/>
                </div>
              </div>
            </div>

            <div className="px-4.25 flex justify-between items-start mt-6.25">
              <div className="">
                <div className="flex gap-1 items-center">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <span className=" ml-2 bg-[#699405]/15 px-1 text-[#699405]">
                    (24)
                  </span>
                </div>
                <h3 className="text-[16px] font-bold font-inter text-primary mt-2 mb-3">
                  Carrots Group Scal
                </h3>
                <h4 className="font-bold font-nunito text-[15px] text-tertiary ">
                  $32.00{" "}
                  <del className="text-[12px] text-[#699405] font-bold">
                    $45.00
                  </del>
                </h4>
              </div>
              <div className="w-[50px]  bg-[#699405] rounded-br-[15px] rounded-tl-[15px] text-white flex justify-center">
                <h4>-20%</h4>
              </div>
            </div>
          </div>
          <div className="w-67.5 h-92.5 group-hover: group  duration-500 p-2 shadow-[0_0_5px] shadow-gray-950/15 rounded-[10px] ">
            <div className=" relative w-full h-57.5 bg-tertiary rounded-[10px]">
              <div className=" group-hover:flex duration-500 ease-in-out hidden gap-1  rounded-[10px] justify-center items-center w-full h-full group-hover:bg-tertiary/40">
                <div className=" cursor-pointer bg-white  w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500 ">

                <IoCartOutline className=""/>
                </div>
                <div className=" cursor-pointer bg-white w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <CiHeart className=""/>
                </div>
                <div className=" cursor-pointer bg-white p-2 w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <FaSearchPlus className=""/>
                </div>
              </div>
            </div>

            <div className="px-4.25 flex justify-between items-start mt-6.25">
              <div className="">
                <div className="flex gap-1 items-center">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <span className=" ml-2 bg-[#699405]/15 px-1 text-[#699405]">
                    (24)
                  </span>
                </div>
                <h3 className="text-[16px] font-bold font-inter text-primary mt-2 mb-3">
                  Carrots Group Scal
                </h3>
                <h4 className="font-bold font-nunito text-[15px] text-tertiary ">
                  $32.00{" "}
                  <del className="text-[12px] text-[#699405] font-bold">
                    $45.00
                  </del>
                </h4>
              </div>
              <div className="w-[50px]  bg-[#699405] rounded-br-[15px] rounded-tl-[15px] text-white flex justify-center">
                <h4>-20%</h4>
              </div>
            </div>
          </div>
          <div className="w-67.5 h-92.5 group-hover: group  duration-500 p-2 shadow-[0_0_5px] shadow-gray-950/15 rounded-[10px] ">
            <div className=" relative w-full h-57.5 bg-tertiary rounded-[10px]">
              <div className=" group-hover:flex duration-500 ease-in-out hidden gap-1  rounded-[10px] justify-center items-center w-full h-full group-hover:bg-tertiary/40">
                <div className=" cursor-pointer bg-white  w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500 ">

                <IoCartOutline className=""/>
                </div>
                <div className=" cursor-pointer bg-white w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <CiHeart className=""/>
                </div>
                <div className=" cursor-pointer bg-white p-2 w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <FaSearchPlus className=""/>
                </div>
              </div>
            </div>

            <div className="px-4.25 flex justify-between items-start mt-6.25">
              <div className="">
                <div className="flex gap-1 items-center">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <span className=" ml-2 bg-[#699405]/15 px-1 text-[#699405]">
                    (24)
                  </span>
                </div>
                <h3 className="text-[16px] font-bold font-inter text-primary mt-2 mb-3">
                  Carrots Group Scal
                </h3>
                <h4 className="font-bold font-nunito text-[15px] text-tertiary ">
                  $32.00{" "}
                  <del className="text-[12px] text-[#699405] font-bold">
                    $45.00
                  </del>
                </h4>
              </div>
              <div className="w-[50px]  bg-[#699405] rounded-br-[15px] rounded-tl-[15px] text-white flex justify-center">
                <h4>-20%</h4>
              </div>
            </div>
          </div>
          <div className="w-67.5 h-92.5 group-hover: group  duration-500 p-2 shadow-[0_0_5px] shadow-gray-950/15 rounded-[10px] ">
            <div className=" relative w-full h-57.5 bg-tertiary rounded-[10px]">
              <div className=" group-hover:flex duration-500 ease-in-out hidden gap-1  rounded-[10px] justify-center items-center w-full h-full group-hover:bg-tertiary/40">
                <div className=" cursor-pointer bg-white  w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500 ">

                <IoCartOutline className=""/>
                </div>
                <div className=" cursor-pointer bg-white w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <CiHeart className=""/>
                </div>
                <div className=" cursor-pointer bg-white p-2 w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <FaSearchPlus className=""/>
                </div>
              </div>
            </div>

            <div className="px-4.25 flex justify-between items-start mt-6.25">
              <div className="">
                <div className="flex gap-1 items-center">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <span className=" ml-2 bg-[#699405]/15 px-1 text-[#699405]">
                    (24)
                  </span>
                </div>
                <h3 className="text-[16px] font-bold font-inter text-primary mt-2 mb-3">
                  Carrots Group Scal
                </h3>
                <h4 className="font-bold font-nunito text-[15px] text-tertiary ">
                  $32.00{" "}
                  <del className="text-[12px] text-[#699405] font-bold">
                    $45.00
                  </del>
                </h4>
              </div>
              <div className="w-[50px]  bg-[#699405] rounded-br-[15px] rounded-tl-[15px] text-white flex justify-center">
                <h4>-20%</h4>
              </div>
            </div>
          </div>
          <div className="w-67.5 h-92.5 group-hover: group  duration-500 p-2 shadow-[0_0_5px] shadow-gray-950/15 rounded-[10px] ">
            <div className=" relative w-full h-57.5 bg-tertiary rounded-[10px]">
              <div className=" group-hover:flex duration-500 ease-in-out hidden gap-1  rounded-[10px] justify-center items-center w-full h-full group-hover:bg-tertiary/40">
                <div className=" cursor-pointer bg-white  w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500 ">

                <IoCartOutline className=""/>
                </div>
                <div className=" cursor-pointer bg-white w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <CiHeart className=""/>
                </div>
                <div className=" cursor-pointer bg-white p-2 w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <FaSearchPlus className=""/>
                </div>
              </div>
            </div>

            <div className="px-4.25 flex justify-between items-start mt-6.25">
              <div className="">
                <div className="flex gap-1 items-center">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <span className=" ml-2 bg-[#699405]/15 px-1 text-[#699405]">
                    (24)
                  </span>
                </div>
                <h3 className="text-[16px] font-bold font-inter text-primary mt-2 mb-3">
                  Carrots Group Scal
                </h3>
                <h4 className="font-bold font-nunito text-[15px] text-tertiary ">
                  $32.00{" "}
                  <del className="text-[12px] text-[#699405] font-bold">
                    $45.00
                  </del>
                </h4>
              </div>
              <div className="w-[50px]  bg-[#699405] rounded-br-[15px] rounded-tl-[15px] text-white flex justify-center">
                <h4>-20%</h4>
              </div>
            </div>
          </div>
          <div className="w-67.5 h-92.5 group-hover: group  duration-500 p-2 shadow-[0_0_5px] shadow-gray-950/15 rounded-[10px] ">
            <div className=" relative w-full h-57.5 bg-tertiary rounded-[10px]">
              <div className=" group-hover:flex duration-500 ease-in-out hidden gap-1  rounded-[10px] justify-center items-center w-full h-full group-hover:bg-tertiary/40">
                <div className=" cursor-pointer bg-white  w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500 ">

                <IoCartOutline className=""/>
                </div>
                <div className=" cursor-pointer bg-white w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <CiHeart className=""/>
                </div>
                <div className=" cursor-pointer bg-white p-2 w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-[#699405] hover:bg-[#699405] hover:text-white duration-500">

                <FaSearchPlus className=""/>
                </div>
              </div>
            </div>

            <div className="px-4.25 flex justify-between items-start mt-6.25">
              <div className="">
                <div className="flex gap-1 items-center">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <span className=" ml-2 bg-[#699405]/15 px-1 text-[#699405]">
                    (24)
                  </span>
                </div>
                <h3 className="text-[16px] font-bold font-inter text-primary mt-2 mb-3">
                  Carrots Group Scal
                </h3>
                <h4 className="font-bold font-nunito text-[15px] text-tertiary ">
                  $32.00{" "}
                  <del className="text-[12px] text-[#699405] font-bold">
                    $45.00
                  </del>
                </h4>
              </div>
              <div className="w-[50px]  bg-[#699405] rounded-br-[15px] rounded-tl-[15px] text-white flex justify-center">
                <h4>-20%</h4>
              </div>
            </div>
          </div>
         
         
        </div>
      </Container>
    </>
  );
};

export default Featured;

import React from "react";
import Container from "../common/Container";
import { BiPhoneCall } from "react-icons/bi";
import { GrMailOption } from "react-icons/gr";
import { MdAddHomeWork } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const Contact_list = () => {
  return (
    <>
      <section className="py-30 bg-[#E2E2EB] ">
        <Container>
          <div className="lg:py-27.5 py-5 lg:px-17.5 px-2 bg-white shadow-2xl">
            <div className="lg:flex justify-between items-start gap-10">
              <div className="lg:w-[45%] w-full">
                <div className="">
                  <h3 className="text-[42px] text-primary font-bold font-inter leading-[120%] ">
                    Feel free to contact us for any query.
                  </h3>

                  <div className="flex items-center gap-4 mt-12.5 duration-300 hover:bg-[#eff890]/50 rounded-full">
                    <div className="bg-[#699405] p-5.75 rounded-full text-white text-[24px]">
                      <BiPhoneCall />
                    </div>
                    <div className="">
                      <h4 className="text-[15px] text-primary font-bold font-inter">
                        Phone Number:
                      </h4>
                      <p className="text-[16px] text-tertiary font-normal font-nunito">
                        Head office: (210) 123 451
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-9.25 duration-300 hover:bg-[#eff890]/50 rounded-full">
                    <div className="bg-[#699405] p-5.75 rounded-full text-white text-[24px]">
                      <GrMailOption />
                    </div>
                    <div className="">
                      <h4 className="text-[15px] text-primary font-bold font-inter">
                        Mail Address:
                      </h4>
                      <p className="text-[16px] text-tertiary font-normal font-nunito">
                        webecyenvato12@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-9.25 duration-300 hover:bg-[#eff890]/50 rounded-full">
                    <div className="bg-[#699405] p-5.75 rounded-full text-white text-[24px]">
                      <MdAddHomeWork />
                    </div>
                    <div className="">
                      <h4 className="text-[15px] text-primary font-bold font-inter">
                        Office Address:
                      </h4>
                      <p className="text-[16px] text-tertiary font-normal font-nunito">
                        254 Lillian Blvd, Holbrook
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[55%] w-full mt-5 lg:mt-0">
                <div className="flex gap-7.5  ">
                  <input
                    className="w-1/2 py-3.5 px-4 outline-none bg-[#F5F5F7] border border-[#F5F5F7]     focus:border-[#699405] transition-all duration-300"
                    type="text"
                    placeholder="First Name*"
                  />
                  <input
                    className="w-1/2 py-3.5 px-4 outline-none bg-[#F5F5F7]  border border-[#F5F5F7]     focus:border-[#699405] transition-all duration-300"
                    type="text"
                    placeholder="Last name*"
                  />
                </div>
                <div className="flex gap-7.5 mt-10 ">
                  <input
                    className="w-1/2 py-3.5 px-4 outline-none bg-[#F5F5F7] border border-[#F5F5F7]     focus:border-[#699405] transition-all duration-300"
                    type="email"
                    placeholder="Mail Address"
                  />
                  <input
                    className="w-1/2 py-3.5 px-4 outline-none bg-[#F5F5F7]  border border-[#F5F5F7]     focus:border-[#699405] transition-all duration-300"
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="mt-10">
                  <select
                    className="py-3.5 px-4 bg-[#F5F5F7] outline-none w-full"
                    name=""
                    id=""
                  >
                    <option value="Best Match">Choose Product</option>
                    <option value="Good Match">Good Match</option>
                    <option value="Match">Match</option>
                  </select>
                </div>
                <div className="mt-10">
                  <textarea
                    className="w-full py-3.5 px-4 outline-none bg-[#F5F5F7] border border-[#F5F5F7] focus:border-[#699405] transition-all duration-300 resize-none"
                    rows="5"
                    placeholder="Enter Messege..."
                  ></textarea>
                </div>
                <button className=" flex items-center gap-2 bg-[#699405] border border-[#699405] text-white font-nunito font-normal text-[18px] px-7.5 py-4  cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405] mt-8.5">
                  Submit Request <BsArrowRight />{" "}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact_list;

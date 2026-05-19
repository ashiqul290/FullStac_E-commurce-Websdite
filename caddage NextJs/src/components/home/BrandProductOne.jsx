import Image from "next/image";
import React from "react";
import logoIMg from '../../assets/brandProductOne/Group 15654.png'
import savonIMG from '../../assets/brandProductOne/botttles.png'
import Container from "../common/Container";
const BrandProductOne = () => {
  return (
    <>
      <div className="bg-[#F7F5EB] py-6">
        <Container>
          <div className=" flex gap-25 items-center  py-10">
            <div className="">
            <Image  src={savonIMG} width={633} height={561} alt="img"/>
            </div>
            <div className="">
                <h4 className="text-[16px] font-bold font-nunito text-[#699405]">Product Review</h4>
                <h2 className="text-[50px] font-bold font-inter text-primary mb-[16px]">Savon Herbal Oil</h2>
                <p className="text-[16px] font-bold font-nunito text-[#699405]">$30.00 - $40.00</p>
                <div className="flex items-center gap-1 my-3">
                    <h4 className="text-[15px] font-medium font-inter text-primary">BRAND:</h4>
                    <div className=" h-9.2 bg-white border py-2 px-4 border-gray-300"><Image src={logoIMg} alt="img"/></div>
                </div>
                <p className="text-[16px] font-medium font-nunito  text-tertiary w-127">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought</p>
                   <div className="flex items-center gap-1 mt-4">
                    <h4 className="text-[15px] font-medium font-inter text-primary">BRAND:</h4>
                    <div className=" h-9.2 bg-white border py-2 px-2 border-gray-300"><h5>1kg</h5></div>
                    <div className=" h-9.2 bg-white border py-2 px-2 border-gray-300"><h5>5kg</h5></div>
                    <div className="h-9.2 bg-white border py-2 px-2 border-gray-300"><h5>250g</h5></div>
                </div>

                <div className=" flex gap-2 items-center mt-5">
                     <button className="flex items-center gap-1 font-medium  font-nunito text-[14px]  border border-gray-300 py-3 px-4  bg-[#699405] text-white">
                   ADD TO CART
                  </button>
                   <div className=" flex gap-1 items-center">
                    <div className=" h-9.2 w-10 flex justify-center bg-white border py-2 px-2 border-gray-300"><h5>5</h5></div>
                   <div className=" grid items-center gap-1 grid-cols-2">
                    <button className="bg-gray-300 text-gray-700 py-1 px-2  text-2xl  border  block">+</button>
                    <button className="bg-gray-300 text-gray-700 py-1 px-2  text-2xl  border " >-</button>
                   </div>
                   </div>
                </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BrandProductOne;

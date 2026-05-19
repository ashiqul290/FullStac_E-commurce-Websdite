"use client";

import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import bnnerIMG from "@/assets/bannerIMG/slider.png";
import bnnerIMG1 from "@/assets/bannerIMG/orange.png";
import bnnerIMG2 from "@/assets/bannerIMG/mod.png";
import bnnerIMG3 from "@/assets/bannerIMG/ca.png";
import Container from "../common/Container";

const bannerCards = [
  {
    id: 1,
    subtitle: "HOT SALES",
    title1: "Big Sale",
    title2: "Mango & Juice",
    bg: "#FE9900",
    img: bnnerIMG1,
  },
  {
    id: 2,
    subtitle: "HOT SALES",
    title1: "Save 20%",
    title2: "Every Order",
    bg: "#113001",
    img: bnnerIMG2,
  },
  {
    id: 3,
    subtitle: "HERBAL POWDER",
    title1: "Up To 20%",
    title2: "Every Package",
    bg: "#80B500",
    img: bnnerIMG3,
  },
];

const Banner = () => {
  const [activeBanner, setActiveBanner] = useState({
    subtitle: "100% genuine Products",
    title1: "Tasty & Healthy",
    title2: "Organic Food",
    bg: "#F7F5EB"
  });

  return (
    <div className="relative">
      <div className=" bg-[#F7F5EB] py-29.75 transition-all duration-500 ease-in-out" style={{ backgroundColor: activeBanner.bg }}>
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <h4 style={{ color: activeBanner.text }} className="font-nunito text-[18px] text-[#232323] font-medium">
                {activeBanner.subtitle}
              </h4>

              <h1 style={{ color: activeBanner.text }} className="mt-2.25 leading-[120%] mb-8.75 font-bold font-inter text-[70px] text-[#232323]">
                {activeBanner.title1} <br />
                <span style={{ color: activeBanner.text }} className="font-medium font-inter text-[70px] text-[#232323]">
                  {activeBanner.title2}
                </span>
              </h1>

              <button className="flex items-center  gap-1 hover:bg-[#119405] font-medium font-nunito shadow-[0_0_5px_0_rgba(0,0,0,1)] rounded-[10px] text-[15px] text-white bg-[#699405] px-[30px] py-[17px]">
                Explore Products <FaLongArrowAltRight />
              </button>
            </div>

            <div className="max-w-[711px]">
              <Image src={bnnerIMG} width={550} height={413} alt="banner" />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex justify-between relative top-[-70px]">
          {bannerCards.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() =>
                setActiveBanner({
                  subtitle: item.subtitle,
                  title1: item.title1,
                  title2: item.title2,
                  bg: item.bg,
                  text: 'white',
                })
              }
              className="w-[370px] shadow-[0_0_5px] shadow-gray-700/80 rounded-[5px] py-[35px] pl-[30px] cursor-pointer transition-all duration-300"
              style={{ backgroundColor: item.bg }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-nunito text-[12px] text-white font-medium"  style={{ color: activeBanner.text }}>
                    {item.subtitle}
                  </h4>

                  <h1 className="mt-[9px] leading-[120%] mb-[10px] font-bold font-inter text-[26px] text-white"   style={{ color: activeBanner.text }}>
                    {item.title1} <br />
                    <span className="font-medium"  style={{ color: activeBanner.text }}>{item.title2}</span>
                  </h1>

                  <button className="flex items-center gap-1 font-medium font-nunito text-[14px] text-white">
                    Buy Now 
                  </button>
                </div>

                <Image src={bnnerIMG} width={150} height={213} alt="product" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Banner;

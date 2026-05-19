import Banner from "@/components/home/Banner";
import ChooseUs from "@/components/home/ChooseUs";
import Client_Testimonial from "@/components/home/Client_Testimonial";
import Counter_part from "@/components/home/Counter_part";
import Featured from "@/components/home/Featured";
import Hot_offer from "@/components/home/Hot_offer";
import Leatest_Blog from "@/components/home/Leatest_Blog";
import Product_Facilities from "@/components/home/Product_Facilities";
import Products from "@/components/home/Products";
import Team_Member from "@/components/home/Team_Member";
import Trending_Products from "@/components/home/Trending_Products";
import Trusted from "@/components/home/Trusted";
import Visit_our_Shop from "@/components/home/Visit_our_Shop";
import React from "react";
import BrandProductOne from "@/components/home/BrandProductOne";
import Catagories from "./Catagories";
import BannerSowper from "@/components/home/BannerSowper";

const page = () => {
  return (
    <>
      <Banner />
      {/* <BannerSowper /> */}
      <Featured />
      <Hot_offer />
      <Products />
      <Catagories />
      <Product_Facilities />
      <BrandProductOne />
      <Team_Member />
      <Visit_our_Shop />
      <Client_Testimonial />
      <Counter_part />
      <Leatest_Blog />
    </>
  );
};

export default page;

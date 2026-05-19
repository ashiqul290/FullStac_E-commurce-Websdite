"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Drinks from "../product_list/Drinks";
import axios from "axios";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const tabListRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setAllProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  // 👉 categories create
  const categories = ["All", ...new Set(allProducts.map(p => p.category))];

  const scrollLeft = () => {
  tabListRef.current.scrollBy({
    left: -150, // কতটুকু করে যাবে
    behavior: "smooth",
  });
};

const scrollRight = () => {
  tabListRef.current.scrollBy({
    left: 150,
    behavior: "smooth",
  });
};
  return (
    <section className="pt-26.25 pb-30 bg-white">
      <Container>
        <h2 className="text-[48px] text-center font-bold">
          Our Products
        </h2>

        {/* 👉 tab change হলে reset */}
        <Tabs  onSelect={() => setShowAll(false)}>
          
          {/* ✅ Tab List */}
          <TabList className="flex gap-3 justify-center mt-10 flex-wrap items-center" ref={tabListRef}>
            <button onClick={scrollLeft} className="bg-[#699405]/15 py-3 px-3 rounded-full cursor-pointer">
              <MdKeyboardDoubleArrowLeft className="text-3xl" />
            </button>

            {categories.map((cat, index) => (
              <Tab
                key={index}
                selectedClassName="bg-[#699405] text-white"
                className="py-3 px-6 lg:px-10 text-[18px] text-tertiary cursor-pointer rounded-full"
              >
                {cat}
              </Tab>
            ))}

            <button onClick={scrollRight}  className="bg-[#699405]/15 py-3 px-3 rounded-full cursor-pointer">
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </button>
          </TabList>

          {/* ✅ Tab Panels */}
          {categories.map((cat, index) => {
            const filtered =
              cat === "All"
                ? allProducts
                : allProducts.filter(p => p.category === cat);

            // 👉 8টা limit
            const visibleProducts = showAll
              ? filtered
              : filtered.slice(0, 8);

            return (
              <TabPanel key={index}>
                <Drinks item={visibleProducts} />

                {/* 👉 button */}
                {!showAll && filtered.length > 8 && (
                  <div className="text-center mt-10">
                    <button
                      onClick={() => setShowAll(true)}
                      className="hover:text-[#699405] duration-300 font-bold px-3 py-3 underline cursor-pointer"
                    >
                      See All Product
                    </button>
                  </div>
                )}
              </TabPanel>
            );
          })}
        </Tabs>
      </Container>
    </section>
  );
};

export default Products;
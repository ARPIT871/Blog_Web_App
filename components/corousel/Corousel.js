"use client";


import Image from "next/image";
import { useState, useRef } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// import  models  from "@/public/images";
import {

  model1,
  model2,
  model3,
  model4,
  model5,
} from "@/public/images";

const Corousel = () => {
    
  const [spacing, setSpacing] = useState(2);
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2; // Adjust as needed
      if (direction === "next") {
        scrollRef.current.scrollLeft = scrollLeft + scrollAmount;
      } else {
        scrollRef.current.scrollLeft = scrollLeft - scrollAmount;
      }
    }
  };
  return (
    <div className="flex items-center m-5 gap-5 ">
    <div
      className="cursor-pointer hover:bg-gray-200 h-[40px] w-[40px] flex items-center justify-center" // Apply hover background color directly
      onClick={() => handleScroll("prev")}
    >
      <ArrowBackIos />
    </div>
    <div
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
      ref={scrollRef}
    >
      {[model1, model4, model5, model2, model3, model5, model2, model3].map(
        (value) => (
          <div
            key={value}
            className="inline-block mr-1 w-[350px] min-w-[150px] h-[450px] relative group"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={value}
                alt="logo"
                className="max-w-[350px] max-h-[450px] h-auto absolute top-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 50px 15px rgba(0, 0, 0, 0.5)",
                }}
              ></div>
            </div>
            <div className="w-[85%] absolute bottom-0 m-5 p-4 flex flex-col">
              <h1 className="bg-black text-white w-[100px] text-center">
                Women
              </h1>
              <h1 className="text-black text-xl font-bold whitespace-normal break-words">
                Exploring Style And Comfort with Sherpa Jacket
              </h1>
            </div>
          </div>
        )
      )}
    </div>
    <div
      className="cursor-pointer hover:bg-gray-200 h-[40px] w-[40px] flex items-center justify-center"
      onClick={() => handleScroll("next")}
    >
      <ArrowForwardIos />
    </div>
  </div>
  )
}

export default Corousel
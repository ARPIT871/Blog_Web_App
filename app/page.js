'use client';


import { Grid, Paper, Button } from "@mui/material";
import Image from "next/image";
import { useState, useRef } from "react";
import fareimage from "../public/fareimage.jpg";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import RightBar from "@/components/Category/RightBar/RightBar";
import CategoryPage from "@/components/Category/CategoryPage";
import SmallBox from "@/components/Category/smallBox";
import AdvertisementBanner from "@/components/Category/RightBar/advertisementBanner";
import AdvertisementBar from "@/components/Category/RightBar/advertisement";

export default function Home() {
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
    <div>
    <div className="flex items-center m-5 gap-5">
      <div
        className="cursor-pointer hover:bg-gray-200 h-[40px] w-[40px] flex items-center justify-center" // Apply hover background color directly
        onClick={() => handleScroll("prev")}
      >
        <ArrowBackIos />
      </div>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap", overflowX: "hidden", scrollBehavior: "smooth" }} ref={scrollRef}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
          <div key={value} style={{ display: "inline-block", marginRight: "5px" }}>
            <Image src={fareimage} alt="logo" style={{ width: "350px", height: "500px" }} />
          </div>
        ))}
      </div>
      <div  className="cursor-pointer hover:bg-gray-200 h-[40px] w-[40px] flex items-center justify-center" onClick={() => handleScroll("next")}>
        <ArrowForwardIos />
      </div>
    </div>

    <div className="flex  m-5 gap-5 ">
       <div className="flex-1">
          <div className="flex items-center m-5 gap-5 bg-slate-100">
          <div className="w-[4px] h-10 bg-black"></div>
          <h1 className="text-2xl ">Fitness</h1>
          </div>
       </div>

       <div className="flex-1">
       <RightBar/>
       <AdvertisementBar/>
       </div>
    
    </div>

    </div>
  );
}
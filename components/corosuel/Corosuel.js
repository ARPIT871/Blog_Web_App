import React from 'react'
import { useState, useRef } from "react";

const Corosuel = () => {
    const [spacing, setSpacing] = useState(2);
    const mainContentRef = useRef(null);
    const rightBarRef = useRef(null);
  
    const handleScroll = (direction) => {
      if (mainContentRef.current) {
        const { scrollLeft, clientWidth } = mainContentRef.current;
        const scrollAmount = clientWidth / 2; // Adjust as needed
        if (direction === "next") {
          mainContentRef.current.scrollLeft = scrollLeft + scrollAmount;
        } else {
          mainContentRef.current.scrollLeft = scrollLeft - scrollAmount;
        }
      }
    };

  return (
    
<div className="flex items-center m-5 gap-5">
<div
  className="cursor-pointer hover:bg-gray-200 h-[40px] w-[40px] flex items-center justify-center"
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
  ref={mainContentRef}
>
  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
    <div
      key={value}
      style={{ display: "inline-block", marginRight: "5px" }}
    >
      <Image
        src={fareimage}
        alt="logo"
        style={{ width: "350px", height: "500px" }}
      />
    </div>
  ))}
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

export default Corosuel
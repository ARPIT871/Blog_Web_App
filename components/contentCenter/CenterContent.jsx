'use client';

import SmallBox from "@/components/Category/smallBox";
import { fitness1, fitness2 } from "@/public/images";
import {
  Add,
  ArrowBackIos,
  ArrowForwardIos,
  PlusOne,
  ThumbUpOffAlt,
  ThumbsUpDown,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
// import AdvertisementBar from './advertisement'

function CenterContent() {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300); // Check scroll after animation
    }
  };
  
  return (
    <Card
      sx={{
        maxWidth: "100%",
        boxShadow: "none",
        border: "none",
        height: "100%",
      }}
    >
      <CardContent sx={{ flex: "1 1 auto", p: 2 }}>
        <Box sx={{ display: "flex", mb: 1 }}>
          <Image
            src={fitness1}
            alt="category image"
            layout="responsive"
            width={250}
            height={170}
          />
        </Box>
        <Box sx={{ display: "flex" , alignItems:'center', mb: 1 , gap:1 }}>
            <Typography sx={{ fontSize: "12px" }}>
             Home 
            </Typography>
            <ArrowForwardIos sx={{ fontSize: "12px" }} />
            <Typography sx={{ fontSize: "12px" }}>
             Fitness
            </Typography>
            <ArrowForwardIos sx={{ fontSize: "12px" }} />
            <Typography sx={{ fontSize: "12px" }}>
              Boots
            </Typography>
        </Box>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Prioritise Comfort And Health With Shoes For Plantar Fasciitis
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Prioritise Comfort And Health With Shoes For Plantar Fasciitis.
          Prioritise Comfort And Health With Shoes For Plantar Masciitis.
          Prioritise Comfort And Health With Shoes For Plantar Masciitis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquam, deserunt
          asperiores, suscipit obcaecati earum harum, recusandae quaerat eum non
          mollitia culpa vitae quas officia reiciendis laboriosam voluptatem
          enim doloremque eligendi deleniti libero. Cum et molestiae eius
          temporibus harum similique quas non perferendis animi rerum eaque quia
          nemo, facere quae? Ipsum!
        </Typography>

        <div className=" h-50 flex items-center justify-center relative">
       {showLeftButton && (
         <button
           className="absolute left-2 z-10 bg-white rounded-full p-2 shadow-md"
           onClick={() => scroll(-200)}
         >
           <ArrowBackIos />
         </button>
       )}
        <div 
          ref={scrollContainerRef}
          className=" flex w-[800px] overflow-x-hidden scroll-smooth"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="w-[100px] h-[100px] m-5 flex-shrink-0 relative">
              <Image
                className="rounded-full object-cover border-4 border-black-500"
                src={fitness1}
                alt="category image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        {showRightButton && (
          <button
            className="absolute right-2 z-10 bg-white rounded-full p-2 shadow-md"
            onClick={() => scroll(200)}
          >
            <ArrowForwardIos />
          </button>
        )}
      </div>

      </CardContent>

      <CardContent sx={{ flex: "1 1 auto ", p: 2, m: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          FAQ's
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {[1, 2, 3, 4].map((item) => (
            <div className="flex items-center mt-4">
              <Add style={{ color: "black" }} />
              <h1 className="ml-2 text-bold">What is Lorem Ipsum?</h1>
            </div>
          ))}
        </Typography>

        <Box sx={{ display: "flex", mt: 4 }}>
          <div className="flex  w-full items-center gap-5 border-2">
            <div className=" m-1 flex justify-center items-center  gap-5">
              <div>
                <h1 className="text-2xl font-bold">Share</h1>
              </div>
              <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <div className="p-2 flex items-center justify-center gap-3  border-2 h-[35px]">
                  <ThumbUpOffAlt style={{ color: "black" }} />
                  <h1>0</h1>
                </div>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: "4px",
                    padding: "5px",
                    backgroundColor: "#3b5998", // Facebook blue
                    color: "white", // Icon color
                  }}
                >
                  <FacebookIcon />
                </Box>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: "4px",
                    padding: "5px",
                    backgroundColor: "#00acee", // Twitter blue
                    color: "white", // Icon color
                  }}
                >
                  <TwitterIcon />
                </Box>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: "4px",
                    padding: "5px",
                    backgroundColor: "#E1306C", // Instagram pink
                    color: "white", // Icon color
                  }}
                >
                  <InstagramIcon />
                </Box>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: "4px",
                    padding: "5px",
                    backgroundColor: "#E60023", // Pinterest red
                    color: "white", // Icon color
                  }}
                >
                  <PinterestIcon />
                </Box>
              </Box>
            </div>
          </div>
        </Box>
      </CardContent>

      <CardContent
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
          p: 2,
          m: 1,
        }}
      >
        <Box sx={{ gap: "10px", marginTop: "10px" }}>
          <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <ArrowBackIos />
            <h1 className="hover:text-blue-300 hover:text-bold">
              Previous Post
            </h1>
          </Box>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" , width:"100%"}}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            ipsam.
          </Typography>
        </Box>

        <Box sx={{ gap: "10px", marginTop: "10px" }}>
        <Box sx={{ display: "flex", justifyContent:'end', gap: "10px", marginTop: "10px" }}>
          <h1 className="hover:text-blue-300 hover:text-bold">
            Next Post
          </h1>
          <ArrowForwardIos/>
        </Box>
       
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold" , width:"100%", textAlign:"end"}}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          ipsam.
        </Typography>
      </Box>

        
      </CardContent>

      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        Related Articles
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          marginTop: "10px",
          fontSize: "20px",
        }}
      >
        <div className="flex-1 ">
          <Image
            className="flex-1"
            src={fitness2}
            alt="logo"
            width={"auto"}
            height={"auto"}
          />
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
            quod.
          </h1>
        </div>
        <div className="flex-1 ">
          <Image
            className="flex-1"
            src={fitness2}
            alt="logo"
            width={"auto"}
            height={"auto"}
          />
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
            quod.
          </h1>
        </div>
        <div className="flex-1 ">
          <Image
            className="flex-1"
            src={fitness2}
            alt="logo"
            width={"auto"}
            height={"auto"}
          />
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
            quod.
          </h1>
        </div>
      </Box>
    </Card>
  );
}

export default CenterContent;

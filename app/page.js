'use client'

import { Grid, Paper, Button, Box, styled, Card, CardActionArea, Typography, CardContent } from "@mui/material";
import Image from "next/image";
import { useState, useRef } from "react";
import fareimage from "../public/fareimage.jpg";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import RightBar from "@/components/Category/RightBar/RightBar";
import AdvertisementBanner from "@/components/Category/RightBar/advertisementBanner";
import CategoryCard from "@/components/Category/center/CategoryCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <div className="flex items-center m-5 gap-5">
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
       
      </Box>

      <Grid container spacing={2}  >
        <Grid item xs={12} sm={8} md={9}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Fitness
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Image src={fareimage} alt="logo" width={300} height={200} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Image src={fareimage} alt="logo" width={300} height={200} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Image src={fareimage} alt="logo" width={300} height={200} />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Entertainment
            </Typography>
            <Grid container spacing={2}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                <Grid item xs={12} key={value}>
                 <CategoryCard params={"dfgdfg"}/>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <RightBar />
          <AdvertisementBanner />
        </Grid>
      </Grid>
    </Box>
  );
}

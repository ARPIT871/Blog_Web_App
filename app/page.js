"use client";

import { Grid, Paper, Box, styled, Card, CardActionArea, Typography, CardContent } from "@mui/material";
import Image from "next/image";
import { useState, useRef } from "react";
import fareimage from "../public/fareimage.jpg";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import RightBar from "@/components/Category/RightBar/RightBar";
import AdvertisementBanner from "@/components/Category/RightBar/advertisementBanner";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
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
    <div className="relative min-h-screen">
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

      <div className="flex m-5 gap-5 relative">
        <div className="overflow-auto w-[70%] h-screen pr-5 sticky top-0">
          <div className="flex items-center m-5 gap-5 bg-slate-100">
            <div className="w-[4px] h-10 bg-black"></div>
            <h1 className="text-2xl">Fitness</h1>
          </div>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Image src={fareimage} alt="logo" />
              </Grid>

              <Grid item xs={6}>
                <Image src={fareimage} alt="logo" />
              </Grid>
              <Grid item xs={4}>
                <Image src={fareimage} alt="logo" />
              </Grid>
              <Grid item xs={4}>
                <Image src={fareimage} alt="logo" />
              </Grid>
              <Grid item xs={4}>
                <Image src={fareimage} alt="logo" />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <div className="flex items-center m-5 gap-5 bg-slate-100">
              <div className="w-[4px] h-10 bg-black"></div>
              <h1 className="text-2xl">Entertainment</h1>
            </div>
          
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
              <Card key={value} sx={{ maxWidth: '100%', boxShadow: 'none', border: 'none' }}>
                <CardActionArea sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, border: 'none', boxShadow: 'none' }}>
                  <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '250px' }, height: { xs: 'auto', md: '170px' } }}>
                    <Image src={fareimage} alt="category image" layout="responsive" width={250} height={170} />
                  </Box>
                  <CardContent sx={{ flex: '1 1 auto', p: 2 }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      Prioritise Comfort And Health With Shoes For Plantar Fasciitis
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Prioritise Comfort And Health With Shoes For Plantar Fasciitis. Prioritise Comfort And Health With Shoes For Plantar Fasciitis. Prioritise Comfort And Health With Shoes For Plantar Fasciitis.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
          
        </div>

        <div className="sticky top-0 right-0 h-screen overflow-y-auto w-[30%]" ref={rightBarRef}>
        <RightBar />
        <AdvertisementBanner />
      </div>
      </div>
    </div>
  );
}

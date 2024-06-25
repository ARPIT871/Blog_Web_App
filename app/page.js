"use client";

import {
  Grid,
  Paper,
  Button,
  Box,
  styled,
  Card,
  CardActionArea,
  Typography,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import { useState, useRef } from "react";
import fareimage from "../public/fareimage.jpg";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import RightBar from "@/components/Category/RightBar/RightBar";
import AdvertisementBanner from "@/components/Category/RightBar/advertisementBanner";
// import  models  from "@/public/images";
import {
  fitness1,
  fitness2,
  fitness3,
  fitness4,
  fitness5,
  logo1,
  logo2,
  logo3,
  logo4,
  model1,
  model2,
  model3,
  model4,
  model5,
} from "@/public/images";

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
          {[model1, model4, model5, model1, model4, model5, model2, model3].map(
            (value) => (
              <div
                key={value}
                style={{ display: "inline-block", marginRight: "5px" }}
              >
                <Image
                  src={value}
                  alt="logo"
                  style={{ width: "350px", height: "500px" }}
                />
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

      <div className="relative flex flex-col md:flex-row">
        <div className="sticky top-0  md:h-[800px] overflow-y-hidden   flex-1">
          <div className="flex items-center mb-5 gap-5 bg-[#1313132c]">
            <div className="w-[4px] h-10 bg-black"></div>
            <h1 className="text-2xl">Fitness</h1>
          </div>
          <Grid
            item
            xs={12}
            sm={8}
            md={9}
            style={{ height: "100%", overflowY: "auto" }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Image
                    src={fitness1}
                    alt="logo"
                    layout="responsive"
                    width={300}
                    height={200}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Image
                    src={fitness2}
                    alt="logo"
                    layout="responsive"
                    width={300}
                    height={200}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Image
                    src={fitness4}
                    alt="logo"
                    layout="responsive"
                    width={300}
                    height={200}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Image
                    src={fitness3}
                    alt="logo"
                    layout="responsive"
                    width={300}
                    height={200}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Image
                    src={fitness5}
                    alt="logo"
                    layout="responsive"
                    width={300}
                    height={200}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ mb: 3 }}>
              <div className="flex items-center mb-10 gap-5 bg-[#1313132c]">
                <div className="w-[4px] h-10 bg-black"></div>
                <h1 className="text-2xl">Entertainment</h1>
              </div>
              <Grid container spacing={2}>
                {[model1, fitness2, logo3, model4, logo1, logo2, logo3, logo4].map(
                  (value) => (
                    <Card
                      key={value}
                      sx={{
                        maxWidth: "100%",
                        boxShadow: "none",
                        border: "none",
                      }}
                    >
                      <CardActionArea
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", md: "row" },
                          border: "none",
                          boxShadow: "none",
                        }}
                      >
                        <Box
                          sx={{
                            flex: "0 0 auto",
                            width: { xs: "100%", md: "250px" },
                            height: { xs: "auto", md: "170px" },
                          }}
                        >
                          <Image
                            src={value}
                            alt="category image"
                            layout="responsive"
                            width={250}
                            height={170}
                          />
                        </Box>
                        <CardContent sx={{ flex: "1 1 auto", p: 2 }}>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: "bold" }}
                          >
                            Prioritise Comfort And Health With Shoes For Plantar
                            Fasciitis
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Prioritise Comfort And Health With Shoes For Plantar
                            Fasciitis. Prioritise Comfort And Health With Shoes
                            For Plantar Fasciitis. Prioritise Comfort And Health
                            With Shoes For Plantar Fasciitis.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  )
                )}
              </Grid>
            </Box>
          </Grid>
        </div>
        <div className="sticky top-0  h-auto md:h-[100%] w-full md:w-[30%]  overflow-hidden">
          <RightBar />
          <AdvertisementBanner />
        </div>
      </div>

      <div className="h-screen bg-blue-300"></div>
    </Box>
  );
}

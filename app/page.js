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

      <div className="relative flex flex-col lg:flex-row  ">
        <div className=" overflow-y-auto flex-1 order-1 lg:order-1 lg:sticky lg:top-0 lg:h-[100vh]">
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
                {[
                  model1,
                  fitness2,
                  logo3,
                  model4,
                  logo1,
                  logo2,
                  logo3,
                  logo4,
                ].map((value) => (
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
                          flex: { xs: "1 1 auto", md: "0 0 250px" },
                          position: "relative",
                          width: "100%",
                          paddingTop: { xs: "56.25%", md: "0" }, // 16:9 aspect ratio for xs, original height for md
                          height: { md: "170px" },
                        }}
                      >
                        <Image
                          src={value}
                          alt="category image"
                          layout="fill"
                          objectFit="fill"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
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
                ))}
              </Grid>
            </Box>
          </Grid>
        </div>
        <div className=" w-full lg:w-[30%] order-2 lg:order-2 lg:sticky lg:top-0">
          <RightBar />
          <AdvertisementBanner />
        </div>
      </div>

      <div className="h-screen bg-blue-300"></div>
    </Box>
  );
}

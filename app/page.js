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
import Corousel from "@/components/corousel/corousel";
import CategoryCard from "@/components/Category/center/CategoryCard";
import { recentPosts } from "@/utils/recentPosts";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const [spacing, setSpacing] = useState(2);

 

  return (
    <Box sx={{ p: 2 }}>
     
      <Corousel/>
      <div className="relative flex flex-col lg:flex-row  lg:ml-[60px] " style={{ scrollbarWidth: 'none' }}>
        <div className=" overflow-y-auto flex-1 order-1 lg:order-1 lg:sticky lg:top-0 lg:h-[100vh] " style={{ scrollbarWidth: 'none' }}>
          <div className="flex items-center mb-5 gap-5 bg-[#ececec] ">
            <div className="w-[4px] h-10 bg-black"></div>
            <h1 className="text-2xl">Fitness</h1>
          </div>
          <Grid
            item
            xs={12}
            sm={8}
            md={9}
            style={{ height: "100%", overflowY: "auto",scrollbarWidth: 'none' }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} >
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
              <div className="flex items-center mb-10 gap-5 bg-[#ececec] mt-7">
                <div className="w-[4px] h-10 bg-black"></div>
                <h1 className="text-2xl">Entertainment</h1>
              </div>
              <Grid container spacing={2}>
                {recentPosts.map((value) => (
                  <Box sx={{ mb: 3 }}>
                  <CategoryCard params={{slug:"entertainment"}} item={value} />
                  </Box>
                ))}
              </Grid>
            </Box>
          </Grid>
        </div>
        <div className=" w-full lg:w-[30%] order-2 lg:order-2 lg:sticky lg:top-0 ml-8">
          <RightBar />
          <AdvertisementBanner />
        </div>
      </div>

      <div className="h-screen bg-blue-300"></div>
    </Box>
  );
}

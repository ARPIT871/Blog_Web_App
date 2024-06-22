import React from "react";
import CategoryCard from "./CategoryCard.js";
import { Box, Typography } from "@mui/material";
import SmallBox from "../smallBox.js";

const CategoryCenter = ({ params }) => {
  console.log(params);
  return (
    <Box>
      <Box>
        <Box>
          <Box>
            <SmallBox value={params.slug}/>
            <SmallBox value={params.slug}/>

          </Box>
          <Typography>{params.slug}</Typography>
        </Box>
        <Typography>Category:{params.slug}</Typography>
      </Box>
      <CategoryCard />
    </Box>
  );
};

export default CategoryCenter;

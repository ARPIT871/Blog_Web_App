import React from "react";
import CategoryCard from "./CategoryCard";
import { Box, Typography } from "@mui/material";
import { categoryData } from "@/utils/categoryData";

const CategoryCenter = ({ params }) => {

  const categoryArray=categoryData[params.slug]
  console.log(categoryArray," categoryArray")
  console.log(params," params")
  return (
    <Box sx={{ p: 2, maxWidth: '1200px', mx: 'auto' }}>
      <Box sx={{ mb: 2 }}>
        <Typography 
          variant="body2" 
          color="textSecondary" 
          sx={{ mb: 1 }}
        >
          HOME &gt; {params.slug}
        </Typography>
        <Typography 
          variant="h4" 
          sx={{ fontSize: '30px', fontWeight:600, mb: 1 }}
        >
          Category: {params.slug}
        </Typography>
        <Typography  
          sx={{ fontSize: '14px', mb: 1 }}
        >
          somrthing about this category will come here i am just adding dummy data
        </Typography>
      </Box>

      {categoryArray.map((item)=>(
        <CategoryCard params={params} item={item} />
      ))}
    </Box>
  );
};

export default CategoryCenter;

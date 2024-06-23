import { Box, Typography } from '@mui/material';
import React from 'react';

const SmallBox = ({ value }) => {
  return (
    <Box 
      sx={{
        bgcolor: "black",
        px: 1.5,
        py: 0.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1, // optional: add rounded corners
        minWidth: "48px" // optional: ensure a minimum width
      }}
    >
      <Typography sx={{ color: "white", fontSize: "10px", whiteSpace: "nowrap" }}>
        {/* {value} */}
        zdfsdfsdfsdf
      </Typography>
    </Box>
  );
};

export default SmallBox;

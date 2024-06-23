import React from 'react';
import { Box, Typography } from '@mui/material';

const BarHeading = ({value}) => {
  return (
    <Box sx={{bgcolor:'#f5f5f5',width:'95%',height:'44px' ,display:'flex',alignItems:'center'}}>
        <Box sx={{ height:'100%',bgcolor:'black',width:'4px' }}> &nbsp;</Box>
      <Typography variant="h5" component="h3"  sx={{ display: 'inline-block',paddingLeft:'10px', fontSize: '18px',fontWeight:'500'  }}>
        {value}
      </Typography>
    </Box>
  );
};

export default BarHeading;

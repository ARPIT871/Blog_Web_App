import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CategoryCenter from './center/CategoryCenter';



export default function CategoryPage({params}) {
  return (
    
      <Grid  container sx={{height:"100%"}}>
        <Grid sx={{ border:"1px solid black",display:{md:"none",lg:"block"}}} item xs={6} md={3}>
            
        </Grid>
        <Grid sx={{ border:"1px solid black"}} item xs={6} md={12} lg={6}>
        <CategoryCenter params={params}/>
        </Grid>
        <Grid sx={{border:"1px solid black",display:{md:"none",lg:"block"}}} item xs={6} md={3}>
        <Box>iteam 1</Box>
        </Grid>
    
      </Grid>
  );
}
0
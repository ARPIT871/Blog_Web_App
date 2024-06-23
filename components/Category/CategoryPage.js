import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CategoryCenter from './center/CategoryCenter';
import LeftBar from './LeftBar/LeftBar';
import RightBar from './RightBar/RightBar';



export default function CategoryPage({params}) {
  return (
    
      <Grid  container sx={{height:"100%"}}>
        <Grid sx={{display:{md:"none",lg:"block"}}} item xs={6} md={3}>
            <LeftBar params={params}/>
        </Grid>
        <Grid item xs={6} md={12} lg={6}>
        <CategoryCenter params={params}/>
        </Grid>
        <Grid sx={{display:{md:"none",lg:"block"}}} item xs={6} md={3}>
        <RightBar params={params}/>
        </Grid>
    
      </Grid>
  );
}
0
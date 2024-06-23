import * as React from 'react';
import Grid from '@mui/material/Grid';
import CategoryCenter from './center/CategoryCenter';
import LeftBar from './LeftBar/LeftBar';
import RightBar from './RightBar/RightBar';

export default function CategoryPage({ params }) {
  return (
    <Grid container spacing={2} sx={{ height: '100%' }}>
      {/* Category Center (full width) */}
      <Grid item lg={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
        <LeftBar params={params} />
      </Grid>

      <Grid item xs={12} lg={6} sm={12}>
        <CategoryCenter params={params} />
      </Grid>

      {/* Left Sidebar (hidden on xs screens) */}
     <Grid item xs={12} sm={6} md={3} lg={3} sx={{ display: { lg: 'none', md: 'block' } }}>
        <LeftBar params={params} />
      </Grid>

      {/* Right Sidebar (hidden on xs screens) */}
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <RightBar params={params} />
      </Grid>
    </Grid>
  );
}

import LeftBar from '@/components/Category/LeftBar/LeftBar'
import RightBar from '@/components/Category/RightBar/RightBar'
import CenterContent from '@/components/contentCenter/CenterContent'
import { Grid } from '@mui/material'
import React from 'react'

function MiddleContent({ params }) {
  return (
    <Grid container spacing={2} sx={{ height: '100%' }}>
      {/* Category Center (full width) */}
      <Grid item lg={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
        <LeftBar params={params} />
      </Grid>

      <Grid item xs={12} lg={6} sm={12}>
        <CenterContent/>
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
  )
}

export default MiddleContent

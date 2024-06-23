import BarHeading from '@/components/BarHeading/BarHeading'
import { Box } from '@mui/material'
import React from 'react'
import AdvertisementBanner from './advertisementBanner'

const AdvertisementBar = () => {
  return (
    <Box sx={{width:"100%",height:"auto" }}>
        <BarHeading value={'Advertisement'}/>
        <AdvertisementBanner/>

    </Box>
  )
}

export default AdvertisementBar
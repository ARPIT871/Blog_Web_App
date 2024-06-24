import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import fareimage from '@/public/fareimage.jpg'

const AdvertisementBanner = () => {
  return (
    <Box sx={{width:"100%",height:"auto" ,paddingTop:"15px"}}>
    {[0, 1, 2,3,4,5].map((item, index) => ( // Only iterate over 3 elements
      <Box key={index} sx={{width:"100%",height:"auto" ,paddingTop:"15px"}}>
        <Image
          src={fareimage}
          alt="logo"
          style={{ width: "350px", height: "400px" }}
        />
      </Box>
    ))}
    </Box>
  )
}

export default AdvertisementBanner
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import fareimage from '@/public/fareimage.jpg'
import {logo1,logo2,logo3,logo4} from '../../../public/images.js'

const AdvertisementBanner = () => {
  return (
    <Box sx={{width:"100%",height:"auto" ,paddingTop:"15px"}}>
    {[logo1,logo2,logo3,logo4,logo1,logo2,logo3,logo4].map((value) => ( // Only iterate over 3 elements
      <Box sx={{width:"100%",height:"auto" ,paddingTop:"25px" , marginLeft:"10px"}}>
        <Image
          src={value}
          alt="logo"
          style={{ width: "350px", height: "400px" }}
        />
      </Box>
    ))}
    </Box>
  )
}

export default AdvertisementBanner
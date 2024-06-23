import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import fareimage from '@/public/fareimage.jpg'

const advertisementBanner = () => {
  return (
    <Box sx={{width:"100%",height:"auto" ,paddingTop:"15px"}}>
        <Image src={fareimage} alt="advertisement" width={300} height={300} />
    </Box>
  )
}

export default advertisementBanner
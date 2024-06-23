import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const AdvertisementBanner = () => {
  return (
    <Box>
        <Image src="/fareimage.jpg" alt="advertisement" width={300} height={300} />
    </Box>
  )
}

export default AdvertisementBanner
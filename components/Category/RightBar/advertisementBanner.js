import Image from 'next/image'
import React from 'react'

const advertisementBanner = () => {
  return (
    <Box>
        <Image src="/advertisement.jpg" alt="advertisement" width={300} height={300} />
    </Box>
  )
}

export default advertisementBanner
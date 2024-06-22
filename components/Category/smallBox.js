import { Box } from '@mui/material'
import React from 'react'

const SmallBox = ({value}) => {
  return (
    <Box sx={{bgcolor:"black", width:"10%"}} >
      {value}
    </Box>
  )
}

export default SmallBox
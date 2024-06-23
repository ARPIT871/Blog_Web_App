import BarHeading from '@/components/BarHeading/BarHeading'
import { Box } from '@mui/material'
import React from 'react'
import LeftBarCard from './LeftbarCard'
import { Arapey } from 'next/font/google'

const LeftBar = ({params}) => {
    const arr=[1,2,3,4,5,]
  return (
    <Box sx={{width:"100%",height:"auto",position:"sticky",top:"0" ,padding:"15px"}}>
       
        <Box sx={{marginBottom:"20px"}} >
        <BarHeading value={'Recent Posts'}/>

        </Box>
        {arr.map((item)=>(
        <LeftBarCard value={params}/>

        ))}
    </Box>
  )
}

export default LeftBar
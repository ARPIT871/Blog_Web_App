import BarHeading from '@/components/BarHeading/BarHeading'
import { Box } from '@mui/material'
import React from 'react'
import LeftBarCard from './LeftbarCard'
import { Arapey } from 'next/font/google'
import { recentPosts } from '@/utils/recentPosts'
import Link from 'next/link'

const LeftBar = ({params}) => {
  
  return (
    <Box sx={{width:"100%",height:"auto",position:"sticky",top:"0" ,padding:"15px"}}>
       
        <Box sx={{marginBottom:"20px"}} >
        <BarHeading value={'Recent Posts'}/>

        </Box>
        {recentPosts.map((item)=>(
        <Link key={item.id} href={'/content'}>
        <LeftBarCard value={params} items={item}/>
        </Link>

        ))}
    </Box>
  )
}

export default LeftBar
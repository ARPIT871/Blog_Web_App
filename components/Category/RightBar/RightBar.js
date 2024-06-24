import React from 'react'
import BarHeading from '@/components/BarHeading/BarHeading'
import { Box } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import AdvertisementBar from './advertisement'

const RightBar = ({params}) => {
    return (
        <Box sx={{width:"100%",height:"auto", padding:"15px"}}>
            <Box sx={{display:"flex", flexDirection:"column", marginBottom:"20px"}} >
                <BarHeading value={`Let's Get Socialize`}/>
                <Box sx={{display: 'flex', gap: '10px', marginTop:"10px"}}>
                    <Box sx={{
                        border: '1px solid', 
                        borderRadius: '4px', 
                        padding: '5px', 
                        backgroundColor: '#3b5998', // Facebook blue
                        color: 'white' // Icon color
                    }}>
                        <FacebookIcon />
                    </Box>
                    <Box sx={{
                        border: '1px solid', 
                        borderRadius: '4px', 
                        padding: '5px', 
                        backgroundColor: '#00acee', // Twitter blue
                        color: 'white' // Icon color
                    }}>
                        <TwitterIcon />
                    </Box>
                    <Box sx={{
                        border: '1px solid', 
                        borderRadius: '4px', 
                        padding: '5px', 
                        backgroundColor: '#E1306C', // Instagram pink
                        color: 'white' // Icon color
                    }}>
                        <InstagramIcon />
                    </Box>
                    <Box sx={{
                        border: '1px solid', 
                        borderRadius: '4px', 
                        padding: '5px', 
                        backgroundColor: '#E60023', // Pinterest red
                        color: 'white' // Icon color
                    }}>
                        <PinterestIcon />
                    </Box>
                </Box>
            </Box>
            <AdvertisementBar/>
        </Box>
    )
}

export default RightBar

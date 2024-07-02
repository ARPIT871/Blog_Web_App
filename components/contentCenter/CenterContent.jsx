import SmallBox from '@/components/Category/smallBox'
import { fitness1 } from '@/public/images'
import { Add, PlusOne } from '@mui/icons-material'
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function CenterContent() {
  return (
    <Card sx={{ maxWidth: '100%',boxShadow: 'none',border:'none' ,height:'100%'}}>
  
    <CardContent sx={{ flex: '1 1 auto', p: 2 }}>
    
      <Box sx={{ display: 'flex', mb: 1 }}>
       <Image src={fitness1} alt="category image" layout="responsive" width={250} height={170} />   
      </Box>
      <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Prioritise Comfort And Health With Shoes For Plantar Fasciitis
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Prioritise Comfort And Health With Shoes For Plantar Fasciitis. Prioritise Comfort And Health With Shoes For Plantar Masciitis. Prioritise Comfort And Health With Shoes For Plantar Masciitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, deserunt asperiores, suscipit obcaecati earum harum, recusandae quaerat eum non mollitia culpa vitae quas officia reiciendis laboriosam voluptatem enim doloremque eligendi deleniti libero. Cum et molestiae eius temporibus harum similique quas non perferendis animi rerum eaque quia nemo, facere quae? Ipsum!
      </Typography>

      <div className='flex  h-50 justify-center'>
      {[1, 2, 3, 4].map((item) => (
        <div className='w-[100px] h-[100px] m-5 relative'>
          <Image className='rounded-full object-cover border-4 border-black-500' src={fitness1} alt="category image" layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
    </CardContent>

    <CardContent sx={{ flex: '1 1 auto', p: 2 , m : 1}}>
      <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        FAQ's
      </Typography>
      <Typography variant="body2" color="text.secondary">
         {[1, 2, 3, 4].map((item) => (
            <div className='flex items-center mt-4'>
            <Add style={{color:'black'}}/>
            <h1 className='ml-2 text-bold'>What is Lorem Ipsum?</h1>
          </div>
         ))}
      </Typography>

      <Box sx={{ display: 'flex', mb: 1 }}>
         <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}> 
          Share
         </Typography>
      </Box>

    </CardContent>

  </Card>
  )
}

export default CenterContent

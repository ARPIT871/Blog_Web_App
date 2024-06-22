import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import fareImage from '@/public/fareImage.jpg'
import Image from 'next/image';

export default function CategoryCard() {
  return (
    <Card sx={{ maxWidth: '100%'  }}>
      <CardActionArea sx={{display:"flex", width:"100%"}}>
        {/* <CardMedia
          component="img"
          height="140"
          
          alt="green iguana"
        /> */}
        <Image src={fareImage} alt="green iguana" width={250} height={170}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Prioritise Comfort And Health With Shoes For Plantar Fasciitis
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Prioritise Comfort And Health With Shoes For Plantar Fasciitis
          Prioritise Comfort And Health With Shoes For Plantar Fasciitis
          Prioritise Comfort And Health With Shoes For Plantar Fasciitis

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
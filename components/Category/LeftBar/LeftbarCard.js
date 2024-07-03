import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import fareImage from '@/public/fareImage.jpg';
import Image from 'next/image';
import SmallBox from '../smallBox';

export default function LeftBarCard({ params,items }) {
  return (
    <Card sx={{ maxWidth: '100%',boxShadow: 'none',border:'none',height:'10%',display:'flex',alignItems:'center',justifyContent:'center' }}>
      <CardActionArea sx={{ display: 'flex',alignItems:'center',justifyContent:'center', flexDirection: { xs: 'column', md: 'row' },border:'none',boxShadow: 'none',height:'10%' }}>
        <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '95px' }, height: { xs: 'auto', md: '63px' } }}>
          <Image src={items.img} alt="category image" layout="responsive" width={95} height={63} />
        </Box>
        <CardContent sx={{ flex: '1 1 auto', p: 2 }}>
          <Typography variant="body2" color="black" sx={{ fontWeight: 'bold' }}>
{items.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

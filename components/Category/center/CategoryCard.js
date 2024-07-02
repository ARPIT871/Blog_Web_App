import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import fareImage from '@/public/fareImage.jpg';
import Image from 'next/image';
import SmallBox from '../smallBox';

export default function CategoryCard({ params,item }) {
  return (
    <Card sx={{ maxWidth: '100%',boxShadow: 'none',border:'none' }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' },border:'none',boxShadow: 'none' }}>
        <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '250px' }, height: { xs: 'auto', md: '170px' } }}>
          <Image src={item.img} alt="category image" layout="responsive" width={250} height={170} />
        </Box>
        <CardContent sx={{ flex: '1 1 auto', p: 2 }}>
          <Box sx={{ display: 'flex', mb: 1 }}>
            <SmallBox value={params.slug} />
          </Box>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
{item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
{item.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

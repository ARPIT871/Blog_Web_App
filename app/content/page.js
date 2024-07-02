import CenterContent from '@/components/contentCenter/centerContent'
import MiddleContent from '@/components/middle/middleContent/MiddleContent'
import { Container } from '@mui/material'
import React from 'react'

function page() {
  return (
   <Container maxWidth="xl" sx={{ height: "auto"}}>
    <MiddleContent/>
   </Container>
  )
}

export default page

import React from 'react'
import {Box,styled} from '@mui/material';
import Tech from '../components/images/Tech.png';


const Imgae =styled("img")({
 width:'100%',
 maxHeight:400
})
const Bannar = () => {
  return (
    <Box>
      <Imgae src={Tech} alt="banner" />
    </Box>
  )
}

export default Bannar;

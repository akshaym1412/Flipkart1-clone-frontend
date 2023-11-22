import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { sliderimages } from '../images/listimages';
import styled from '@emotion/styled';
const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 280,
  [theme.breakpoints.down('sm')]: {
      objectFit: 'cover',
      height: 180
  }
}));


export default function Banner() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} showDots={true} infinite={true}  swipeable={false} draggable={false}>
    {sliderimages.map((data,index)=>{
     return(
     <Image src={data.URL} alt="a" style={{marginTop:"12px"}} key={index}></Image>
     )
    }) 
    }
   </Carousel>
  )
}

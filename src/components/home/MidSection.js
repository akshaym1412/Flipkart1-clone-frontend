import React from 'react';
import { betweenimg } from '../images/listimages';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';

const Wrapper=styled(Grid)`
display:"flex";
justifyContent:"space-between";
`
export default function MidSection() {
  return (
    <>
    <Wrapper container>
    {
      betweenimg.map((data,index)=>{
        return (
        <Grid item lg={4} sm={12} md={4} xs={12} key={index} >
          <img src={data.URL} alt={index} style={{width:"98%",marginTop:"10px"} } ></img>
          </Grid>
        )
      })
    }
  </Wrapper>
  </>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import { useEffect} from "react";
import { productone } from '../Redux/Slice2';
import Header from '../header/Header';
import { Box } from '@mui/material';
import { ActionItem } from './ActionItem';
import styled from '@emotion/styled';
import ProductDetails from './ProductDetails';
import data from '../images/data';

const Container=styled(Box)(({theme})=>({
backgroundColor:"#FFFFFF",
margin:"65px 0 0 0",
padding:"20px 40px",
height:"100vh",
display:"flex",
[theme.breakpoints.down('sm')]:{
flexDirection:"column",
height:"100vh",
backgroundColor:"#FFFFFF"
},
[theme.breakpoints.down('md')]:{
  flexDirection:"column",
  height:"100vh",
  backgroundColor:"#FFFFFF",
  padding:"10px"
  }
}
))
const ImageDiv=styled(Box)(({theme})=>({
  [theme.breakpoints.down("md")]:{
    marginLeft:"100px"
  },
  [theme.breakpoints.down("sm")]:{
    marginLeft:0
   }
}))
const ContentDiv=styled(Box)(({theme})=>({
  [theme.breakpoints.down("lg")]:{
   width:"120%",
   paddingLeft:"100px"
  
  },
  [theme.breakpoints.down("md")]:{
    width:"100%",
    paddingLeft:"20px",
    backgroundColor:"#FFFFFF",
   },
   [theme.breakpoints.down("sm")]:{
    width:"100%",
    paddingLeft:"10px",
    backgroundColor:"#FFFFFF",
   }
}))

export default function Details() {
  const {id}=useParams();
  const dispatch=useDispatch();
  const {users}=useSelector(state=>state.singleproduct);
  useEffect(()=>{
   dispatch(productone(id));
},[dispatch,id]);
  return (
    <>
    <Header/>
    { users && Object.keys(users).length &&
    <Container >
    <ImageDiv sx={{width:"45%"}}>
      <ActionItem users={users}/>
    </ImageDiv>
    <ContentDiv sx={{width:"60%",padding:"20px 0 0 0"}}>
      <ProductDetails users={users}></ProductDetails>
    </ContentDiv>
    </Container>
    }
    </>
  )
}

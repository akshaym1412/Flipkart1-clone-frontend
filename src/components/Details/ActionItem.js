import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {add} from '../Redux/Slice3';
import { useNavigate } from 'react-router-dom';
import { checkoutHandler } from '../utils/Checkouthandler';
import { DataContext } from '../../App';
import { useContext } from 'react';

const LeftContainer=styled(Box)(({theme})=>({
display:"flex",
textAlign:"center",
flexDirection:"column",
[theme.breakpoints.down('lg')]:{
 width:"400px",
 marginLeft:"5px"
}
}))
const Imagediv=styled(Box)(({theme})=>({
  padding:0,
[theme.breakpoints.down('lg')]:{
  width:"100px"
}
}))
const Image=styled('img')(({theme})=>({
  marginLeft:"30px",
  height:"400px",
  width:"450px",
  objectFit:"contain",
  [theme.breakpoints.down('lg')]:{
    width:"400px",
    height:"400px",
    marginLeft:"60px",
   
  },
  [theme.breakpoints.down('sm')]:{
    marginLeft:"40px",
    width:"350px",
    height:"300px",
    objectFit:"contain"
  }
}))
const Addcart=styled(Box)(({theme})=>({
  display:"flex",
  margin:"10px 80px",
  [theme.breakpoints.down('lg')]:{
    margin:"10px 0"
  },
  [theme.breakpoints.down('md')]:{
    margin:"10px 0"
  },
  [theme.breakpoints.down('sm')]:{
    margin:"10px 0 0 30px",
    width:"50%"
  }

}))

export const ActionItem = ({users}) => {
  const {accounts}=useContext(DataContext)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleClick=(users)=>{
    dispatch(add(users));
    navigate("/Cartdetails");
  }
  const handlecart=(price)=>{
    if(accounts===""){
     alert("Please Login and continue")
    }
    else{
    checkoutHandler(price,accounts);
     
    }
   }
  return (
    <>
    { users && 
    <LeftContainer>
      <Imagediv>
        <Image src={users.img}></Image>
        </Imagediv>
        <Addcart>
        <Button variant='contained' sx={{width:"225px",minWidth:"160px",height:"50px",backgroundColor:"orange"}} onClick={()=>(handleClick(users))}><Cart/>Add to Cart</Button>
        <Button variant='contained' sx={{width:"225px",minWidth:"160px",marginLeft:"40px",backgroundColor:"red"}} onClick={()=>handlecart(users.newPrice)}><Flash style={{marginTop:"10px"} } />Buy Now</Button>
        </Addcart>
    </LeftContainer>
    }
    </>
  )
}

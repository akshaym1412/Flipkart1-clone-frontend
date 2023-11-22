import React from 'react'
import styled from "@emotion/styled";
import { Typography ,Box} from '@mui/material';
import { listimages } from '../images/listimages';
import { Link } from 'react-router-dom';

const Content=styled('div')(({theme})=>({
    marginTop:"65px",
    display:"flex",
    justifyContent:"space-evenly",
    backgroundColor:"white",
    paddingTop:"14px",
    borderRadius:"5px",
    textAlign:"center",
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
      margin: '65px 0 0 0',
      paddingLeft:"50px",
      width:"100%"
  },
  [theme.breakpoints.down('sm')]: {
    margin: '65px 0 0 0',
    paddingLeft:"150px",
    width:"100%"
}})
);
const ImageBox=styled(Box)(({theme})=>({
 
  [theme.breakpoints.down('lg')]: {
    paddingLeft:"20px",
    width:"100%"
}})
);
export default function Navbar() {
  return (
    <Content>
    {
       listimages.map((data,index)=>{
        return (
          <ImageBox key={index}>
               <Link to={`/${data.title.split(" ").at(0)}`}> <img src={data.URL} alt={index} style={{width:"58px"}}></img></Link>
                <Typography >{data.title}</Typography>
            </ImageBox>
            
        )
       })
       
    }
    </Content>
  )
}

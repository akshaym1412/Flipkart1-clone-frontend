import { Box, Typography } from "@mui/material"
import styled from "@emotion/styled"
import Header from "../header/Header"
import { Link } from "react-router-dom"

const Maindiv=styled(Box)`
width:80%;
margin:auto;
padding:20px;
height:300px;
background-color:white;
margin-bottom:3px;
display:flex;
overflow:hidden
`

const Imagediv=styled(Box)`
width:20%;
padding:15px 20px 0 40px;
`
const Detailsdiv=styled(Box)`
width:55%;
`
const Pricediv=styled(Box)`
width:25%;
`

const Card = ({product}) => {
    const img="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
  return (
    <>
    <Header/>
    <Box style={{marginTop:"70px"}}>
    {
product.map((data,index)=>{
            return(
            <Link to={`details/${data.id}`} style={{textDecoration:"none", color:"black"}}>
            <Maindiv key={index}>
            <Imagediv>
            <img src={data.img} alt={data.id} style={{height:"250px",width:"250px", objectFit:"contain"}} ></img>
            </Imagediv>
            <Detailsdiv>
                <h2>{data.title}</h2>
                <Typography variant="span" style={{backgroundColor:"#4DFF88"}}>4.6★</Typography>
                <Typography variant="span"> {data.reviews}</Typography>
                <ul>
                    <li>6 GB RAM | 128 GB ROM</li>
                    <li>16.94 cm (6.67 inch) Full HD+ AMOLED Display</li>
                    <li>50MP (OIS) + 8MP + 2MP | 16MP Front Camera</li>
                    <li>5000 mAh Lithium Polymer Battery</li>
                    <li>Mediatek Dimensity 1080 Processor</li>
                    <li>1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories</li>
                </ul>
            </Detailsdiv>
            <Pricediv>
               <Box> 
                <Typography variant="span" fontWeight={700} fontSize={"20px"}>₹{data.newPrice}</Typography>
               <img src={img} alt="flip"style={{width:"80px",marginLeft:"60px",marginTop:"20px"}}></img></Box>
               <Box fontWeight={300} margin={"2px 0 0 3px"}><strike>{data.prevPrice} </strike> &nbsp;&nbsp;&nbsp;15% off</Box>
               <Typography>Free delivery by Tomorrow</Typography>
               <Typography>Upto ₹1200 off on exchange</Typography>
               <Typography>No cost EMI from ₹3000</Typography>
            </Pricediv>
          </Maindiv>
          </Link>
           
            )
        })
    }
    </Box>
    </>
  )
}

export default Card
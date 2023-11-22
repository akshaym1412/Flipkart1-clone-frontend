import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header';
import { Card, Box, Typography, Button, styled } from '@mui/material';
import GroupButton from './GroupButton';
import { addEllipsis } from '../utils/util';
import Totalamt from './Totalamt';
import { remove } from '../Redux/Slice3';
import EmptyCart from './EmptyCart';
import { checkoutHandler } from '../utils/Checkouthandler';
import { DataContext } from '../../App';
import { useContext } from 'react';


const Main=styled(Box)(({theme})=>({
margin:"80px 50px 0 90px",
display:"flex",
position:"relative",
[theme.breakpoints.down("md")]:{
flexDirection:"column",
margin:"80px 50px 0 40px"
}
}))
const Side=styled(Box)(({theme})=>({
    width:"35%",
    height:"400px",
    backgroundColor:"#FFFFFF",
    position:"sticky",
    left:"1000px",
    [theme.breakpoints.down("md")]:{
     width:"105%",
     height:"300px"
    }
}))

const Top=styled(Box)(({theme})=>({
width:"95%",
height:"70px",
marginBottom:"10px",
backgroundColor:"#FFFFFF",
display:"flex",
justifyContent:"center",
alignItems:"center",
color:"blue",
[theme.breakpoints.down("md")]:{
width:"150%",
}
}))

const Middle=styled(Box)(({theme})=>({
width:"95%",
height:"70px",
marginBottom:"10px",
backgroundColor:"#FFFFFF",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
[theme.breakpoints.down("md")]:{
    width:"150%",
    }
}))

const Bottom=styled(Box)(({theme})=>({
width:"95%",
height:"70px",
backgroundColor:"#FFFFFF",
marginTop:"1px",
display:"flex",
justifyContent:"flex-end",
[theme.breakpoints.down("md")]:{
    width:"150%",
    marginBottom:"10px"
    }
}))
const Imagebox=styled(Box)`
width:95%;
background-color:#FFFFFF;
`

const Component = styled(Card)(({theme})=>({
    borderTop: "1px solid black",
    borderRadius: "0px",
    display: "flex",
    [theme.breakpoints.down("md")]:{
        width:"158%"
        }
    }))

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Box)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 14px;
`;
const StyledButton = styled(Button)(({theme})=>({
    background: "#fb641b",
    color: "#fff",
    margin:"auto 30px",
    borderRadius:"2px",
    width: "250px",
    height: "51px",
    [theme.breakpoints.down("md")]:{
        }
    }))
const Cartdetails = () => {
const {accounts}=useContext(DataContext)
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
const {cart,price,discount,totalquantity,totalprice}=useSelector(state=>state.carts);
const dispatch=useDispatch();
const date = new Date(new Date().getTime()+(5*24*60*60*1000));
const handleRemove=(id)=>{
  dispatch(remove(id));
}
const handleorder=(price)=>{
    if(accounts===""){
        alert("Please login or sigup to place oerder")
    }
    else{
        checkoutHandler(price,accounts)
    }
    
}

  return (
    <>
    <Header/>
       { cart.length!==0 && cart ? 
        <Main>
            <Box style={{width:"70%"}}>
            <Top>
            <Typography style={{fontSize:"20px"}}>Flipkart({totalquantity})</Typography>
            </Top>
            <Middle>
            <Typography style={{paddingLeft:"20px"}} >From Saved Address</Typography>
            <Button variant='outlined' style={{marginRight:"20px",textTransform:"none"}}>Enter Delivery Pincode</Button>
            </Middle>
            <Imagebox >
                {cart.map((data,index)=>{
                    return (
                        <Component key={index}>
                        <LeftComponent>
                            <img src={data.img} alt={index} style={{ height: 110, width: 110 ,objectFit:"contain"} } />
                            <GroupButton data={data} totalquantity={totalquantity} totalprice={totalprice}/>
                        </LeftComponent>
                        <Box style={{ margin:"20px 20px 20px 40px" ,width:600}}>
                            <Box style={{display:"flex",justifyContent:"space-between"}}>
                            <span style={{fontWeight:"600"}}>{addEllipsis(data.title)}</span>
                            <span style={{fontSize:"14px"}}>Delivery By {date.toDateString()}</span>
                            </Box>
                            <SmallText>Seller:RetailNet
                                <span><img src={fassured} alt="logo" style={{ width: 50, marginLeft: 10 }} /></span>
                            </SmallText>
                            <Box style={{margin: '20px 0'}}>
                                <Cost component="span">₹{data.newPrice}</Cost>&nbsp;&nbsp;&nbsp;
                                <MRP component="span"><strike>₹{data.prevPrice}</strike></MRP>&nbsp;&nbsp;&nbsp;
                                <Discount component="span">off</Discount>
                            </Box>
                            <Remove>Save for Later</Remove>
                            <Remove onClick={()=>handleRemove(data)}>Remove</Remove>
                            </Box>
                        
                    
                    </Component>
                    
                    )
                })
           }
             
            </Imagebox>
            <Bottom>
            <StyledButton variant="contained" onClick={()=>handleorder(totalprice)}>Place Order</StyledButton>
            </Bottom>
            </Box>
            <Side>
            <Totalamt cart={cart} totalquantity={totalquantity} totalprice={totalprice} price={price} discount={discount}></Totalamt>
            </Side>
        </Main>
          :
          <Box>
          <EmptyCart cart={cart} totalquantity={totalquantity} totalprice={totalprice} price={price} discount={discount}/>
          </Box>
        }
    </>
  )
}


export default Cartdetails;

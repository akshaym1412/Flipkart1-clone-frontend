import React, { useContext, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { DataContext } from '../../App';
import { authenticateLogin, authenticateSignup } from '../service/api';

const Component=styled(Box)`
width:100vh;
height:70vh;
display:flex
`
const Leftbar=styled(Box)`
width:40%;
height:100%;
background-color:#2874f0;
`
const Rightbar=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 60px 0 60px;
`
const Text=styled(TextField)`
margin-top:15px;
 width:300px;
 margin-bottom:10px
`
const Terms=styled(Typography)`
font-size:11px
`
const accountInitialvalues={
  Login:{
    view:"Login",
    heading:"Login",
    subheading:"Get access to your Orders, Wishlist and Recommendations"
  },
  Signup:{
    view:"Signup",
    heading:"Looks like you're new here!",
    subheading:"Sign up with your mobile number to get started"
  }
}
const user={
  Name:"",
  Mobile:"",
  Email:"",
  Password:""
}
export default function LoginDialog({open,setopen}) {
  const [account,setaccount]=useState(accountInitialvalues.Login);
  const [userdetails,setuserdetails]=useState(user);
  const [validuser,setvaliduser]=useState(true);
  const [validpassword,setvalidpassword]=useState(true);
  const {setaccounts}=useContext(DataContext) ;
  const [login,setlogin]=useState({
    Mobile :"",
    Password:""
  });
    const handelClose=()=>{
        setopen(false);
        setaccount(accountInitialvalues.Login);
    }
    const handleLogin=()=>{
      setvaliduser(true);
      setaccount(accountInitialvalues.Signup);
    }
    const handlesignup=()=>{
      setvaliduser(true);
      setaccount(accountInitialvalues.Login);
    }
    const handlechange=((e)=>{
      setuserdetails({
        ...userdetails,[e.target.name]:e.target.value})
    })

    const formsubmit=async()=>{
       let response=await authenticateSignup(userdetails);
       if(response.data==="User exist"){
        setvaliduser(false);
       }
       else{
       handelClose();
       setaccounts(userdetails.Name);}
      }
      const onvaluechange=(e)=>{
        setlogin({...login,[e.target.name]:e.target.value})
      }
      const Loginuser=async()=>{
        let response= await authenticateLogin(login);
        if(response.data==="User doesn't exit"){
          setvaliduser(false)
          setvalidpassword(true);
        }
        else if(response.data==="Wrong password"){
          setvaliduser(false)
          setvalidpassword(false);
        }
         else{
         setvaliduser(true)
         handelClose();
         setaccounts(response.data.Name);
      }}
        
    const image="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";
  return (
    <>
    <Dialog open={open} onClose={handelClose} PaperProps={{sx:{maxWidth:'unset'}}}>
    <Component>
       <Leftbar>
         <Typography variant='h5' style={{margin:"40px 10px 0 30px",color:"white"}}>{account.heading}</Typography>
         <Typography variant='h6' style={{margin:"10px 10px 0 30px",fontSize:"17px",color:"white"}}>{account.subheading}</Typography>
         <img src={image} alt='Login' style={{margin:"160px 10px 0 37px"}}></img>
        </Leftbar>
        { account.view === 'Login'?
        <Rightbar>
          { validuser ? 
          <>
        <Text variant='standard' label="Enter Mobile number" name="Mobile" onChange={onvaluechange}></Text>
        <Text variant='standard' label="Enter Password" name="Password" onChange={onvaluechange}></Text>
        </>
          : 
          <>
          {
            validpassword ? 
            <><Text variant='standard' label="Enter Mobile number" name="Mobile" onChange={onvaluechange}></Text>
            <Text variant='standard' label="Enter Password" name="Password" onChange={onvaluechange}></Text>
            <Terms>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Terms>
            <Typography style={{color:"red",fontSize:"15px",textAlign:"center"}}>User doesn't exit. Please create account</Typography></>
            :
          <>
          <Text variant='standard' label="Enter Mobile number" name="Mobile" onChange={onvaluechange}></Text>
          <Text variant='standard' label="Enter Password" name="Password" onChange={onvaluechange}></Text>
          <Terms>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Terms>
          <Typography style={{color:"red",fontSize:"15px",textAlign:"center"}}>wrong password , enter correct password and login</Typography>
          </>
        } 
          </>
        }
        <Button style={{textTransform:'capitalize',backgroundColor:"red",marginTop:"20px",color:'white'} } onClick={Loginuser}>LOGIN</Button>
        <Typography style={{margin:"20px 0 0 160px"}}>OR</Typography>
        <Button style={{textTransform:'capitalize',backgroundColor:"red",marginTop:"20px",color:'white'}}>Request OTP</Button>
        <Typography style={{color:"#2874f0",margin:"100px 0 0 70px",fontSize:"15px",cursor:"pointer"} } onClick={handleLogin}>New to Flipkart? Create an account</Typography>
        
        </Rightbar>
       
          
        :
        <Rightbar>
        <Text variant='standard' label="Enter Full Name" name='Name' onChange={handlechange} required></Text>
        <Text variant='standard' label="Enter Mobile number" name='Mobile'onChange={handlechange} required></Text>
        <Text variant='standard' label="Enter Email" name='Email' onChange={handlechange} required></Text>
        <Text variant='standard' label="Enter Password" name='Password' onChange={handlechange} required></Text>
        <Terms>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Terms>
        {validuser ? <></>: <Typography style={{color:"red",fontSize:"15px",textAlign:"center"}}>User exit. Please login to your account</Typography>}
        <Button style={{textTransform:'capitalize',backgroundColor:"red",marginTop:"20px",color:'white'} } onClick={formsubmit}>CONTINUE</Button>
        <Button style={{textTransform:'capitalize',color:"#2874f0",margin:"20px 0 0 0",fontSize:"15px",cursor:"pointer",boxShadow:"0.2px 0.2px 1px black"}} onClick={handlesignup}>Existing User? Log in</Button>
        </Rightbar>
   }
    </Component>
    </Dialog>
    </>
  )
}

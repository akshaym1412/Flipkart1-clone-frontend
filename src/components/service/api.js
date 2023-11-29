import Axios from 'axios';

export const authenticateSignup=async(details)=>{
 try{
    return await Axios.post("https://flipkart1-clone-backend1.vercel.app/api/signup",details)
}
catch(err){
  console.log("Error while calling signup api",err)
}}

export const authenticateLogin=async(details)=>{
    try{
       return await Axios.post("https://flipkart1-clone-backend1.vercel.app/api/login",details)
   }
   catch(err){
     console.log("Error while calling signup api",err)
   }}

export const products=async()=>{
 const response = await Axios.get("https://flipkart1-clone-backend1.vercel.app/api/products")
 return response.data;
}

export const addcart=async(data)=>{
  return await Axios.post("https://flipkart1-clone-backend1.vercel.app/api/cart",data);
}

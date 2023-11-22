import { useEffect} from "react";
import  {Box} from '@mui/system';
import { styled } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Products from '../products/Products';
import Navbar from './Navbar';
import Banner from './Banner';
import Products1 from "../products/Products1";
import {useDispatch,useSelector} from "react-redux"
import { fetchProduct } from '../Redux/slice';
import MidSection from "./MidSection";
import Header from "../header/Header";

const DiscountImage=styled(Box)`
margin-top:15px;
`
const Home=()=>{
  const {product}=useSelector(state=>state.product);
  const Mobiles=product.filter(item=>item.category==="Mobiles")
  const Electronics=product.filter(item=>item.category==="Electronics")
  const Tv=product.filter(item=>item.category==="Tv")
  const Fashion=product.filter(item=>item.category==="Fashion")
  const Beauty=product.filter(item=>item.category==="Beauty")
  const Homes=product.filter(item=>item.category==="Home")
  const Furniture=product.filter(item=>item.category==="Furniture")

  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(fetchProduct());
  },[dispatch]);
  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <DiscountImage>
      <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/140/image/9ee27aa0c23e89ac.jpg?q=20' alt="" style={{width:"100%"}}></img>
    </DiscountImage>
    <Products  product={Electronics} category="Electronics" title="Top Deals on electronics"/>
    <MidSection/>
    <Products1  product={Fashion} category="Fashion" title="Top Deals on fashion"/>
    <Products1  product={Mobiles}  category="Mobiles" title="Top Deals on Mobiles"/>
    <MidSection/>
    <Products1  product={Beauty} category="Beauty" title="Beauty Foods & More"/>
    <Products1 product={Homes} category="Homes" title="Home and Kitchen"/>  
    <Products1 product={Furniture} category="Furniture" title="Top Deals on furniture"/>  
    <Products1 product={Tv} category="Tv" title="Top Deals on Tv"/>  
    <MidSection/>
    </>
  )
}

export default Home;





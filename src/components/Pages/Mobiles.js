import Card from "../card/card";
import { useSelector } from "react-redux";


const Mobiles = () => {
const {product}=useSelector(state=>state.product);
const products=product.filter(prod=>prod.category==="Mobiles");
  return (
    <>
    <Card product={products}/>
    </>
  )
}

export default Mobiles
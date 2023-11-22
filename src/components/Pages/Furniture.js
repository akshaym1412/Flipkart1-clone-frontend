import Card from "../card/card";
import { useSelector } from "react-redux";


const Furniture = () => {
  const {product}=useSelector(state=>state.product);
const products=product.filter(prod=>prod.category==="Furniture");
  return (
    <>
    <Card product={products}/>
    </>
  )
}

export default Furniture
import Card from "../card/card";
import { useSelector } from "react-redux";


const Beauty = () => {
  const {product}=useSelector(state=>state.product);
const products=product.filter(prod=>prod.category==="Beauty");
  return (
    <>
    <Card product={products}/>
    </>
  )
}

export default Beauty
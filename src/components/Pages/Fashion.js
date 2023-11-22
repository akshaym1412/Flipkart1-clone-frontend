import Card from "../card/card";
import { useSelector } from "react-redux";


const Fashion = () => {
  const {product}=useSelector(state=>state.product);
const products=product.filter(prod=>prod.category==="Fashion");
  return (
    <>
    <Card product={products} />
    </>
  )
}

export default Fashion
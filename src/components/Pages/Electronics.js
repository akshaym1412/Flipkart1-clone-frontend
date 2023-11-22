import Card from "../card/card";
import { useSelector } from "react-redux";


const Electronics = () => {
  const {product}=useSelector(state=>state.product);
const products=product.filter(prod=>prod.category==="Electronics");
  return (
    <>
    <Card product={products} />
    </>
  )
}

export default Electronics
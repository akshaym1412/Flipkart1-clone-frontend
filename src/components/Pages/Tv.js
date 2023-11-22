import Card from "../card/card";
import { useSelector } from "react-redux";

const Tv = () => {
  const {product}=useSelector(state=>state.product);
const products=product.filter(prod=>prod.category==="Tv");
  return (
    <>
    <Card product={products} route="Tv"/>
    </>
  )
}

export default Tv
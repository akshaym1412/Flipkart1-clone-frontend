import Card from "../card/card";
import { useSelector } from "react-redux";


const Homes = () => {
  const {product}=useSelector(state=>state.product);
 const products=product.filter(prod=>prod.category==="Home");
  return (
    <>
    <Card product={products} />
    </>
  )
}

export default Homes
import "./card.css"
import Header from "../header/Header"
import { Link } from "react-router-dom"
import { addEllipsis } from "../utils/util"

const Card = ({product}) => {
    const img="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
  return (
    <>
    <Header/>
    <div style={{marginTop:"70px"}}>
    {
product.map((data,index)=>{
            return(
            
            <Link to={`details/${data.id}`} style={{textDecoration:"none", color:"black"}}>
            <div key={index} id="maindiv">
            <div id="imagediv" style={{objectFit:"contain"}}>
            <img src={data.img} alt={data.id} width="100%" ></img>
            </div>
            <div id="contentdiv">
              <div>
                <p>{addEllipsis(data.title)}</p>
                <span style={{backgroundColor:"#4DFF88"}}>4.6★</span>
                <span > {data.reviews}</span>
                <ul>
                    <li>6 GB RAM | 128 GB ROM</li>
                    <li>16.94 cm (6.67 inch) Full HD+ AMOLED Display</li>
                    <li>50MP (OIS) + 8MP + 2MP | 16MP Front Camera</li>
                    <li>5000 mAh Lithium Polymer Battery</li>
                    <li>Mediatek Dimensity 1080 Processor</li>
                    <li>1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories</li>
                </ul>
              </div>
            <div id="pricediv">
               <div style={{display:"flex",marginTop:"20px"}}> 
               <p style={{fontWeight:"700",fontSize:"20px"}}>₹{data.newPrice}</p>
               <img src={img} alt="flip"style={{width:"60px",height:"20px",margin:"3px 0 0 80px"}}></img></div>
               <strike>₹{data.prevPrice} </strike> &nbsp;&nbsp;&nbsp;<span style={{color:"green"}}>15% off</span>
               <div id="price">
               <p>* Free delivery by Tomorrow</p>
               <p>* Upto ₹1200 off on exchange</p>
               <p>* No cost EMI from ₹3000</p>
               </div>
            </div>
          </div>
          </div>
          </Link>
           )
        })
    }
    </div>
    </>
  )
}

export default Card

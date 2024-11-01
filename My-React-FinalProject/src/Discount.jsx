import { useState } from "react";

function Discount(){

    const originalPrice = 9999; 
    const [discountedPrice,setDiscountedPrice] = useState(0);
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);
    

    const applyDiscount = (discountValue) => {
        if(discountValue === 10){
            setDiscountedPrice(originalPrice*0.9);
            setDiscount(originalPrice * 0.1);
            setPrice(discountValue);
        } else if (discountValue ===20){
            setDiscountedPrice(originalPrice*0.8);
            setDiscount(originalPrice * 0.2);
            setPrice(discountValue);
        } else if (discountValue ===30) {
            setDiscountedPrice(originalPrice*0.7);
            setDiscount(originalPrice * 0.3);
            setPrice(discountValue);
        } else  {
            setDiscountedPrice(0);
            setDiscount(0);
            setPrice(0);
        }
      };
      return(
        <>
        <hr></hr>
        <hr></hr>
        
        <h1 style={{color:'red'}}> Original Price:${originalPrice}</h1>
        <h2> Discounted Price : ${discountedPrice.toFixed(2)}</h2>
        <h2> Discount Amount :{discount}</h2>
        <h2> Discount Applied :{price}%</h2>
    
       
       
       <p>Click a button apply a discount</p>
       <button style={{color:'green'}} onClick={()=> applyDiscount(10)}>Apply 10% Discount</button>
       <button style={{color:'blue'}} onClick={()=> applyDiscount(20)}>Apply 20% Discount</button>
       <button style={{color:'brown'}} onClick={()=> applyDiscount(30)}>Apply 30% Discount</button>
       <button style={{color:'red'}} onClick={()=> applyDiscount(0)}>Reset Price</button>
        </>

      )
}
export default Discount;
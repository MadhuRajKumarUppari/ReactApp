import { useState } from "react";

function Apples()
{
    const [AppleCount,setAppleCount]=useState(0);

    return(
        <>
         <hr></hr>
         <hr></hr> 
        <h1 style={{color:'red'}}> Number of Apples:{AppleCount}</h1>
        {AppleCount===0 ?(
            <p>No apples left!</p>) :(<p>Great! you have some apples.</p>
            ) }
            
        <button style={{color:'blue'}}onClick ={()=> setAppleCount(AppleCount+1)}> Add 1 Apple </button>
        <button style={{color:'green'}} onClick ={()=> setAppleCount(AppleCount>0 && AppleCount-1)}> Remove 1 Apple </button>
        <button style={{color:'skyblue'}} onClick ={()=> setAppleCoount(0)}> Reset </button>
        </>
    )
}
export default Apples;
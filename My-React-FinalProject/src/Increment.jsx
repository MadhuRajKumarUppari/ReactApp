import { useState } from "react";

function Increment(){
    const [count,setCount] = useState(0)

    const Increment = ()=>{
                    setCount(count + 1);
    }
    const Decrement = ()=>{
                    setCount(count - 1);
}

return(
    <>
    <hr></hr>
        <hr></hr>
        <hr></hr>
    <h1 style={{color:'red'}}>This is Counter Value : {count}</h1>
    <button style={{color:'green'}} onClick={Increment}>Increase by 1</button>
    <button style={{color:'blue'}} onClick={count>0 && Decrement}>Decrease by 1</button>
    </>
)
}
export default Increment;
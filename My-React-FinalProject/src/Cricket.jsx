import { useState } from "react";

function Cricket()
{
    const [score,setScore]=useState(0);
    
    // const score1 =() => { setScore(score+1)};
    // const score2 =() => { setScore(score+2)};
    // const score3 =() => { setScore(score+3)};
    // const score4 =() => { setScore(score+4)};
    // const score6 =() => { setScore(score+6)};

    // return(
    //     <>
    //     <h1>Score is:{score}</h1>
    //     <button style={{color:'green'}} onClick={score1}>+1</button>
    //     <button style={{color:'green'}} onClick={score2}>+2</button>
    //     <button style={{color:'green'}} onClick={score3}>+3</button>
    //     <button style={{color:'green'}} onClick={score4}>+4</button>
    //     <button style={{color:'green'}} onClick={score6}>+6</button>
       
    //     </>
    // )

    return(
        <>
         <hr></hr>
         <hr></hr>
        <h1 style={{color:'red'}}> Cricket Score:{score}</h1>
        <button style={{color:'green'}} onClick = {() => { setScore(score+1)}}>+1</button>
        <button style={{color:'green'}} onClick = {() => { setScore(score+2)}}>+2</button>
        <button style={{color:'green'}} onClick = {() => { setScore(score+3)}}>+3</button>
        <button style={{color:'green'}} onClick = {() => { setScore(score+4)}}>+4</button>
        <button style={{color:'green'}} onClick = {() => { setScore(score+6)}}>+6</button>
        </>
    )
}
export default Cricket;
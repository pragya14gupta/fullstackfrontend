import { useEffect, useState } from "react";

const IncCounter=()=>{
    const[counter,setcounter]=useState(0);

    useEffect(()=>{
        alert("hlw deer!!")
    },[counter]);
    return(
        <>
        <h1>counter:{counter}</h1>

        <button onClick={()=>setcounter(counter+1)}> inreament</button>



        </>
    )
}

export default IncCounter;
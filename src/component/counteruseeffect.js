import { useEffect, useState } from "react";

const IncCounter=()=>{
    const[counter,setcounter]=useState(0);

    useEffect(()=>{
        alert("hlw deer!!")
    },[counter]);
    return(
        <>
        <h1  className='rows'>counter:{counter}</h1>

        <button onClick={()=>setcounter(counter+1)}  className='rows'> inreament</button>



        </>
    )
}

export default IncCounter;


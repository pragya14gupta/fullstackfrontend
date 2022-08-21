import React, { useState } from "react";

const Counters =()=>{
    const[counter,setcounter]=useState(0);

    const increaser=()=>{
        setcounter(counter + 1)
    };

    const decreaser=()=>{
        setcounter(counter-1)
    };



     return(
        <>
        <div className="rows">

        <h1>counter:<span>{counter}</span></h1>

        {(counter <=5) ? 
        <h1>pressure:<span style={{color:"blue"}}>low</span></h1> 
        :
        (counter >5 && counter <=10) ? 
        <h1>pressure:<span style={{color:"green"}}>medium</span></h1>
        :
        <h1>pressure:<span style={{color:"red"}}>high</span></h1> }

        <button className="btn btn-success" onClick={()=>increaser()}>on click ++</button>
        <br/>
        <br/>

        <button className="btn btn-success" onClick={()=>decreaser()}>on click --</button>

        </div>
        </>
    )
}
export default Counters;
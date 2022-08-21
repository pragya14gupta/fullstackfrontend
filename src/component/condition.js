import React, { useEffect, useState } from "react";

const Condition=()=>{
    const[iscomplete,setiscomplete]=useState(false);

    // ternary operator
    // {a>b? console.log("abhay"): console.log("atul")}


    useEffect(()=>{
        // api calling
        setiscomplete(true)
    },[]);


    return(
        <>
        <div>
        {iscomplete === true ?
        <h1  className='rows'>Pragya</h1>
        : 
        <h1  className='rows'> profile not complete</h1>}
        </div>

        <button onClick={()=>setiscomplete(!iscomplete)}  className='rows'>edit profile</button>

        </>
    )
}
export default Condition;
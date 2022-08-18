
import React ,{ useState } from 'react'


const Clock=()=> {
    const[time ,settime]=useState(new Date().toTimeString());
    setInterval(()=>settime(new Date().toLocaleTimeString()),1000)

  return (
    <>
    <div>
    <br />
    <h1 className='rows'>Curent Time is <span style={{color:"lightgreen"}}>{time}</span></h1>
    </div>
    
    </>
    
  );
}


export default Clock;
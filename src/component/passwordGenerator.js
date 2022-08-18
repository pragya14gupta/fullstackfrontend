import React from 'react'
import { useState } from 'react';

function PasswordGenerator() {
const [password,setpassword]=useState(0) ;
const generatepass=()=>{
  let x= Math.random()*10000000;
  setpassword(Math.floor(x));
}
return (
    <div>
    <h1  className='rows' style={{color:"black"}}> Your generated password is {password}</h1>
    <button className='rows button' 
    onClick={()=>generatepass()}
    >Generate</button></div>
  )
}

export default PasswordGenerator;
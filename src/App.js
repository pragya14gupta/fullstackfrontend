import React from "react";
import Navbar from "./component/navbar";
import Center from "./component/center";
import List from "./component/list";
import PasswordGenerator from "./component/passwordGenerator";
import StopWatch from "./component/stopwatch";
import Clock from "./component/clock";
import IncCounter from "./component/counteruseeffect";
import './App.css';

const App =()=> {
  const pragya=()=>{
    alert("hello from parent")
  }
  return (
   <>
    <Navbar/>
   <Center/>
  <Clock/>
  <IncCounter/>
  <List pragya={pragya}/>
  <PasswordGenerator/>
   <StopWatch/>
 
   </>
  );
};

export default App;

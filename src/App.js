import React from "react";
import Navbar from "./component/navbar";
import Center from "./component/center";

import PasswordGenerator from "./component/passwordGenerator";
import StopWatch from "./component/stopwatch";
import Clock from "./component/clock";
import './App.css';

const App =()=> {
  return (
   <>

   <Navbar/>
   <Center/>
  <Clock/>
  <PasswordGenerator/>
   <StopWatch/>
 
   </>
  );
};

export default App;

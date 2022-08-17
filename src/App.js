import React from "react";
import Navbar from "./component/navbar";
import Center from "./component/center";
import Footer from "./component/footer";
import List from "./component/list";
//import Form from "./component/form";
import StopWatch from "./component/stopwatch";
import './App.css';

const App =()=> {
  return (
   <>

   <Navbar/>
   <Center/>
  
   <StopWatch/>
   <List/>
   <Footer/>
   </>
  );
};

export default App;

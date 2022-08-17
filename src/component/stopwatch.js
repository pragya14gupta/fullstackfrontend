import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [seconds, setseconds] = useState(0);
  const [minutes, setminutes] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setseconds(seconds + 1);
      if (seconds === 59) {
        setminutes(minutes + 1);
        setseconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const restart = () => {
    setseconds(0);
    setminutes(0);
  };

  const stop = () => {
    clearInterval(timer);
  };
  return (
<div className="row">

      <div className="container">
        <div className="timer_Container">
          <h1>
            {minutes < 10 ? "0" + minutes : minutes} : {seconds}
          </h1>
          <button className=" col start" onClick={restart}>
            Restart
          </button>
          <button className=" col stop" onClick={stop}>
            Stop
          </button>
        </div>
      </div>
    </div>
    
  );
};
export default StopWatch;

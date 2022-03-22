import React, { useState } from "react";

let adjustInterval = undefined;

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startWatch = () => {
    adjustInterval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setIsRunning(true);
  };
  const stopWatch = () => {
    clearInterval(adjustInterval);
    setIsRunning(false);
  };
  const resetWatch = () => {
    clearInterval(adjustInterval);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <h2>{time}</h2>
      <button
        className="btn btn-primary"
        disabled={isRunning}
        onClick={startWatch}
      >
        Click me
      </button>
      <button className="btn btn-secondary" onClick={stopWatch}>
        Click me
      </button>
      <button className="btn btn-success" onClick={resetWatch}>
        Click me
      </button>
    </div>
  );
}

export default Stopwatch;

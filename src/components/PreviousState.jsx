import React, { useState } from "react";

function PreviousState() {
  const [count, setCount] = useState(0);
  function incCount() {
    // let rand = Math.floor(Math.random() * 10);
    // setCount((prev) => {
    //   console.log(prev);
    //   if (prev < 5) {
    //     console.warn("prev < 5");
    //   }
    //   return rand;
    // });
    for (let i = 0; i < 5; i++) {
      setCount((prev) => {
        return prev + 1;
      });
    }
  }
  return (
    <div className="container">
      <h1>Previous State</h1>
      <h3>Count : {count}</h3>
      <button className="btn btn-primary" onClick={incCount}>
        Count Increase
      </button>
    </div>
  );
}

export default PreviousState;

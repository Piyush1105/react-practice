import React, { useState } from "react";

function Usestate() {
  const [num, setNum] = useState(0);
  return (
    <>
      <div className="container d-flex">
        <button className="btn btn-primary" onClick={() => setNum(num - 1)}>
          -
        </button>
        <h1 className="mx-5">{num}</h1>
        <button className="btn btn-primary" onClick={() => setNum(num + 1)}>
          +
        </button>
      </div>
    </>
  );
}

export default Usestate;

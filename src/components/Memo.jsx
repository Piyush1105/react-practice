import React from "react";
import D from "./subcomponents/D";

function Memo() {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState(100);
  return (
    <>
      <h1>Memo function {count} </h1>
      <D data={data} />
      <button onClick={() => setCount(count + 1)}>Click Memo</button>
      <button onClick={() => setData(data + 1)}>Click Memo Data</button>
    </>
  );
}

export default Memo;

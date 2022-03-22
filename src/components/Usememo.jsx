import React, { useMemo, useState } from "react";

function Usememo() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("multiCount");
      return count * 5;
    },
    [count]
  );

  return (
    <>
      <h1>Usememo</h1>
      <h3>count : {count}</h3>
      <h3>data : {data}</h3>
      <h3>{multiCountMemo}</h3>
      <button onClick={() => setCount(count + 1)}>Click Count</button>
      <button onClick={() => setData(data + 1)}>Click Data</button>
    </>
  );
}

export default Usememo;

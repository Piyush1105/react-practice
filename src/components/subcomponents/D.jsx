import React, { memo } from "react";

function D({ data }) {
  console.log("warn data", { data });
  return <div>D {data}</div>;
}

export default memo(D);

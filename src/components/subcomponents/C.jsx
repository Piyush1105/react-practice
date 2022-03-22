import React from "react";
import { NameContext } from "../Createcontext";

function C() {
  return (
    <>
      <NameContext.Consumer>
        {(name) => <h1>Context API ::: My name is {name}</h1>}
      </NameContext.Consumer>
    </>
  );
}

export default C;

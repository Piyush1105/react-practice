import React, { createContext } from "react";
import C from "./subcomponents/C";

const NameContext = createContext("");

function Createcontext() {
  return (
    <>
      <NameContext.Provider value="piyush">
        <C />
      </NameContext.Provider>
    </>
  );
}

export default Createcontext;
export { NameContext };

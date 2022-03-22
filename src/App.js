import React from "react";
import Createcontext from "./components/Createcontext";
import Memo from "./components/Memo";
import PreviousState from "./components/PreviousState";
import Stopwatch from "./components/Stopwatch";
import A from "./components/subcomponents/A";
import Usecallback from "./components/Usecallback";
import Useeffect from "./components/Useeffect";
import Usememo from "./components/Usememo";
import Useref from "./components/Useref";
import Usestate from "./components/Usestate";

function App() {
  return (
    <>
      <Useref />
      <Usestate />
      <A />
      <Createcontext />
      <Usecallback />
      <Memo />
      <Usememo />
      <PreviousState />
      <Useeffect />
      <Stopwatch />
    </>
  );
}

export default App;

import React, { useRef, useState } from "react";

function Useref() {
  const fname = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const sname = fname.current.value;
    sname === " " ? alert("Please enter your name") : setShow(true);
  };
  return (
    <>
      <div className="container my-5">
        <h1>UseRef</h1>
        <form onSubmit={submitForm}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={fname} />
          <button>Submit</button>
        </form>
        <p>{show ? `Your name is ${fname.current.value}` : ""}</p>
      </div>
    </>
  );
}

export default Useref;

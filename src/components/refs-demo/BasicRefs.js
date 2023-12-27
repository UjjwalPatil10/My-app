import React from "react";
import { useRef } from "react";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";

const BasicRefs = () => {
  const classRef = useRef(null); //useRef we give null value
  const funcRef = useRef(null);

  const handleClick = () => {
    console.log("Class Ref: ", classRef.current);
    console.log("Func Ref: ", funcRef.current);
  };
  return (
    <>
      <h2>Basic Refs</h2>
      <button onClick={handleClick}>Print Refs</button>
      {/* ref passed to the class component will refer  to the object of that class component */}
      <ClassComp ref={classRef} />
      {/* if ref is passed to a function component then it does not refer to anything so gives null
      if you  want to pass the 'ref' inside the function component then pass that function component to forwardRef()
      ) */}
      {/*  if you pass the function component to forwardRef()*method then that function component will receive two/}
      arguments,first will be props and second will be refs */}
      <hr />
      <FuncComp ref={funcRef} />
    </>
  );
};

export default BasicRefs;

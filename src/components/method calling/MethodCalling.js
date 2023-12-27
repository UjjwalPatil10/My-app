import React, { useRef } from "react";
import ClassComp from "./ClassComp";
import FunComp from "./FunComp";

const MethodCalling = () => {
  const classRef = useRef();
  const funRef = useRef(null);

  const greet = () => {
    alert("I am greet from parent component");
  };
  const callClassMethod = () => {
    classRef.current.display();
  };

  const callFunMethod = () => {
    funRef.current.print();
  };

  return (
    <>
      <h3>Method Calling</h3>

      <button onClick={callClassMethod}>call class child display method</button>
      <button onClick={callFunMethod}>call Func child print method</button>
      <hr />
      <ClassComp greet={greet} ref={classRef} />
      <hr />
      <FunComp greet={greet} ref={funRef} />
    </>
  );
};

export default MethodCalling;

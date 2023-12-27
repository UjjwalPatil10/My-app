import React, { forwardRef, useImperativeHandle } from "react";

const FunComp = ({ greet }, ref) => {
  const print = () => {
    alert("Hi from print() of func component");
  };

  useImperativeHandle(
    ref,
    () => {
      return { print };
    },
    []
  );

  return (
    <>
      <h3>Function Component</h3>
      <button onClick={greet}>call Function Method</button>
    </>
  );
};

export default forwardRef(FunComp);

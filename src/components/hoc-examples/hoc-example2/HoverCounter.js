import React from "react";
import UpdatedComponent from "./withCounter";

const HoverCounter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>My name is Ujjwal</h1>
      <h2>I have {count} bikes</h2>
      <button onMouseOver={() => increment(2)}>Buy</button>
      <button onMouseOver={() => decrement(1)}>Sell</button>
    </div>
  );
};

export default UpdatedComponent(HoverCounter);

import React from "react";
import UpdatedComponent from "./withCounter";

const ClickCounter = ({ city, count, increment, decrement }) => {
  return (
    <>
      <h1>My city is {city}</h1>
      <h3>I have {count} Cars</h3>
      <button onClick={() => increment(1)}>Buy</button>
      <button onClick={() => decrement(1)}>Sell</button>
    </>
  );
};

export default UpdatedComponent(ClickCounter);

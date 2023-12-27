import React, { useState } from "react";
import withCounter from "./withCounter";

const TotalCars = ({ count, increment, decrement }) => {
  return (
    <>
      <h3>I have {count} Cars</h3>
      <button onClick={() => increment(1)}>Buy</button>
      <button onClick={() => decrement(1)}>Sell</button>
    </>
  );
};

export default withCounter(TotalCars);

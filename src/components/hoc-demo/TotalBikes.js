import React, { useState } from "react";
import withCounter from "./withCounter";

const TotalBikes = ({ count, increment, decrement }) => {
  return (
    <>
      <h3>I have {count} Bikes</h3>
      <button onClick={() => increment(1)}>Buy</button>
      <button onClick={() => decrement(1)}>Sell</button>
    </>
  );
};

export default withCounter(TotalBikes);

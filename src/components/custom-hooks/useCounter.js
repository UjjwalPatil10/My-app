import React, { useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  const increment = (val) => {
    if (typeof val != "number") val = 1;
    setCount(count + val);
  };

  const decrement = (val) => {
    if (typeof val != "number") val = 1;
    setCount(count - val);
  };
  return [count, increment, decrement];
};

export default useCounter;

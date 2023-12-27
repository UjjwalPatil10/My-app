import React, { useState } from "react";

const Counter = ({ render, children }) => {
  // we pass func as props inside that props there is fun
  // const[count,setCount]=useState(0)

  // const increment = () =>{
  //   setCount(count+1)
  // }
  // const decrement = () =>{
  //   setCount(count-1)

  // }
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  return typeof render == "function"
    ? render(count, increment, decrement) // here we call fun and pass logic to it here sequence matter name of parameterwill be anything
    : children(count, increment, decrement);
};

export default Counter;

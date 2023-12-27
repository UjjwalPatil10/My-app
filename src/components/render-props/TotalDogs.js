import React, { useState } from "react";

const TotalDogs = ({ count, increment, decrement }) => {
  // const[count,setCount]=useState(0)

  // const increment = () =>{
  //   setCount(count+1)
  // }
  // const decrement = () =>{
  //   setCount(count-1)

  // }
  return (
    <>
      <h3>We have total {count} dogs</h3>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </>
  );
};

export default TotalDogs;

import React, { useState } from "react";

const TotalHorses = ({ total, inc, dec }) => {
  // const[total,setTotal]=useState(0)
  // const increment = ()=>{
  //   setTotal(total+1)

  // }

  // const decrement = ()=>{
  //   setTotal(total-1)

  // }
  return (
    <>
      <h2>Total horses are {total} </h2>
      <button style={{ margin: 4 }} onClick={inc}>
        add
      </button>
      <button style={{ color: "red" }} onClick={dec}>
        Remove
      </button>
    </>
  );
};

export default TotalHorses;

import React, { useState } from "react";
const StateInFun = () => {
  // const[state,Dispatch] = useState()
  //maintain a state
  // state:is the latest updated state
  //dispatch:the function to update the state,it replaces the existing state value with the given new value
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>++</button>
      <button onClick={() => setCount(count - 1)}>--</button>
      <h2>State is Function component,Count:{count}</h2>
    </div>
  );
};

export default StateInFun;

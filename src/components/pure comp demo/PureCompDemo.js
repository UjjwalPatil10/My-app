import React, { useState } from "react";
import ClassComp from "./ClassComp";
import FunComp from "./FunComp";

const PureCompDemo = () => {
  const [count, setCount] = useState(0);
  const [location, setLocation] = useState({
    city: "",
    newCity: "",
  });

  console.log("PureCompDemo");

  return (
    <>
      <h2>Pure Comp Demo-{count}</h2>
      <hr />
      <button onClick={() => setCount(count + 1)}>++</button>
      <input
        type="text"
        onChange={(e) => setLocation({ ...location, city: e.target.value })}
      />
      <button
        onClick={() =>
          setLocation((state) => ({ ...state, newCity: state.city }))
        }
      >
        Set City
      </button>
      <hr />
      <ClassComp address={{ city: location.newCity }} />
      <FunComp address={{ city: location.newCity }} />

      {/* <ClassComp address={location.newCity}/>
<FunComp address={location.newCity}/> */}

      {/* 
<ClassComp count={count}/>
<FunComp count={count}/> */}
    </>
  );
};

export default PureCompDemo;

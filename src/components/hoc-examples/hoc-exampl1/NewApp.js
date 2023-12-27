import React from "react";
import HOC from "./HOC";
// import HOC from "./HOC";

const NewApp = ({ value }) => {
  console.log(value);
  return (
    <div>
      <h2>HOC Demo</h2>
      <h2>My name is {value.name}</h2>
      <h2>I am {value.age} years old</h2>
      <h2>I live in {value.city}</h2>
    </div>
  );
};

export default HOC(NewApp);

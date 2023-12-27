import React from "react";
import TotalBikes from "./TotalBikes";
import TotalCars from "./TotalCars";
// import withCounter from "./withCounter";

const HOCDemo = () => {
  return (
    <>
      <h3>HOC Demo</h3>
      <TotalBikes />
      <hr />
      <TotalCars />
    </>
  );
};

export default HOCDemo;

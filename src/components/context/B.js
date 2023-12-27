import React from "react";
import C from "./C";

const B = ({ city }) => {
  return (
    <>
      <h2>B Component</h2>
      <C city={city} />
    </>
  );
};

export default B;

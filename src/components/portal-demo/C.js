import React from "react";
import ReactDom from "react-dom";
import D from "./D";

const C = () => {
  return (
    <>
      <h3>C Component</h3>
      {
        ReactDom.createPortal(
          <D city="dhule" />,
          document.getElementById("another")
        ) //create portal in curly braces {}
      }
      {/* <D city="dhule" /> */}
    </>
  );
};

export default C;

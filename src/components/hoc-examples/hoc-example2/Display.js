import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const Display = () => {
  return (
    <div>
      <h2>Success</h2>
      <ClickCounter />
      <hr />
      <HoverCounter />
    </div>
  );
};

export default Display;

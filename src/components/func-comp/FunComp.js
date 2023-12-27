import React from "react";
// import PropsInFun from "./PropsInFun";
import StateInFun from "./StateInFun";
// import EventHandling from "./EventHandling";
const FuncComp = () => {
  return (
    <div>
      <h3>Fun Comp</h3>

      {/* <EventHandling /> */}
      {/* below we give multiple props  */}
      {/* <PropsInFun city="pune" age={10} isActive={true} name="Topper Skills" /> */}
      <StateInFun />
    </div>
  );
};

export default FuncComp;

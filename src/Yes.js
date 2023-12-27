import React, { Component } from "react";
import StateDemo from "./components/state-demo/StateDemo";
// import StateDemo from "./components/state-demo/StateDemo";
// import PropsDemo from "./components/props-demo/propsDemo";
// import PropsDemo from "./components/props-demo/propsDemo";
// import TotalBikes from "./components/state-demo/TotalBikes";
class Yes extends Component {
  //here we direct use component not React.Component so in named import write { Component } like this
  render() {
    return (
      <div>
        {/* <p>Top</p> */}
        {/* App Component */}
        {/* <PropsDemo /> */}
        {/* <p>op</p> */}
        {/* <TotalBikes /> */}
        <StateDemo />
      </div>
    );
  }
}
export default Yes;

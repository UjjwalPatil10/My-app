import React, { Component } from "react";
class Image extends Component {
  //here we direct use component not React.Component so in named import write { Component } like this
  render() {
    //JSX
    return (
      <div>
        <img
          className="img-fluid"
          src="/images/olx.webp"
          alt=""
          style={{ width: 200 }}
        />

        {/* <Olx /> */}
        {/* <SimpleEvent />
        <Toggle /> */}
        {/* <BGChange /> */}
        {/* <SyntheticEventObj /> */}
        {/* <PropsDemo /> */}
        {/* <FreindList /> */}
        {/* <StateDemo /> */}
      </div>
    );
  }
}
export default Image;

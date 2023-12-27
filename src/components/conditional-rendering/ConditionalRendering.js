import { Component } from "react";
import OnOff from "./OnOff";
// import BasicConditions from "./BasicConditions";

class ConditionalRendering extends Component {
  state = {
    title: "Topper Skills",
  };
  render() {
    return (
      <div>
        <h3>Conditional Rendering...</h3>
        <OnOff />
        {/* <BasicConditions /> */}
      </div>
    );
  }
}
export default ConditionalRendering;

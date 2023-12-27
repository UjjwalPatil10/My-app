// import FreindList from "../freind-list/FreindList";
import { Component } from "react";
import TotalBikes from "./TotalBikes";
import TotalCars from "./TotalCars";

class StateDemo extends Component {
  render() {
    return (
      <div>
        {/* <h2>State Demo</h2> */}
        <TotalBikes />
        <TotalCars />
        {/* <FreindList /> */}
      </div>
    );
  }
}
export default StateDemo;

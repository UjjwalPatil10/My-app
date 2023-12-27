import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  state = {
    province: "mh",
    mount: true,
  };
  render() {
    return (
      <div>
        <h3>Parent Component</h3>
        <button
          onClick={() => this.setState((state) => ({ mount: !state.mount }))}
        >
          {this.state.mount ? "Unmount" : "Mount"}
        </button>
        <select onChange={(e) => this.setState({ province: e.target.value })}>
          <option value="mh">Maharashtra</option>
          <option value="mp">MP</option>
          <option value="up">UP</option>
          <option value="ap">AP</option>
          <option value="gj">GJ</option>
          <option value="rj">RJ</option>
        </select>
        <hr />
        {/* below we give parent properties(province i.e props) to child */}
        {this.state.mount && <Child province={this.state.province} />}
      </div>
    );
  }
}
export default Parent;

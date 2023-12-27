import { Component } from "react";

class OnOff extends Component {
  state = {
    switch: false,
  };
  handleOnOff = () => {
    this.setState((state) => ({ switch: !state.switch }));
  };
  render() {
    return (
      <div>
        <img
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "auto",
            width: 200,
            height: 200,
          }}
          src={this.state.switch ? "images/bulb-off.png" : "images/bulb-on.png"}
          alt=""
        />

        <hr />
        <button
          style={{ display: "flex", margin: "auto" }}
          onClick={this.handleOnOff}
        >
          {this.state.switch ? "Off" : "On"}
        </button>
      </div>
    );
  }
}
export default OnOff;

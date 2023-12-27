import { Component } from "react";

class BGChange extends Component {
  state = {
    x: 0,
    y: 0,
  };

  handlePosition = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  render() {
    const { x, y } = this.state;
    return (
      <div
        style={{ height: "90vh", backgroundColor: `rgb(${x},${y},100)` }}
        onMouseMove={this.handlePosition}
      ></div>
    );
  }
}
export default BGChange;

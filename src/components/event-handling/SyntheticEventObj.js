import { Component } from "react";

class SyntheticEventObj extends Component {
  handleClick = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>Synthetic Event</h2>
      </div>
    );
  }
}

export default SyntheticEventObj;

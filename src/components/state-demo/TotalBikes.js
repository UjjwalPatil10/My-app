import { Component } from "react";

class TotalBikes extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    //this.state.count++
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  decrement = () => {
    //this.state.count++
    this.setState({ count: this.state.count - 1 });
    console.log(this.state.count);
  };

  render() {
    //local variable
    //var count = 0;
    // const increment = () => {
    //     count = count + 1;
    //     console.log(count);
    //   };
    //   const decrement = () => {
    //     count = count - 1;
    //     console.log(count);
    //   };
    return (
      <div>
        <h2>I have Total {this.state.count} bikes</h2>
        <button
          style={{ backgroundColor: "green", margin: 10, padding: 5 }}
          onClick={this.increment}
        >
          Buy
        </button>
        <button
          style={{ backgroundColor: "red", padding: 5 }}
          onClick={this.decrement}
        >
          Sell
        </button>
      </div>
    );
  }
}
export default TotalBikes;

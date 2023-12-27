import { Component } from "react";

class TotalCars extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    // it works asynchoronously
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // when you want to use current state and props to calcute new state then instead object
    // pass a callback having state and props as parameters, the callback returns new state object
    this.setState((state, props) => {
      return { count: state.count + 1 };
    });

    this.setState((state) => ({ count: state.count + 1 }));
    this.setState((state) => ({ count: state.count + 1 }));
    this.setState((state) => ({ count: state.count + 1 }));
    this.setState((state) => ({ count: state.count + 1 }));
  };
  decrement = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h2>I have total {this.state.count} cars</h2>
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
export default TotalCars;

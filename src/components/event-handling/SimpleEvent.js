import { Component } from "react";

class SimpleEvent extends Component {
  state = {
    city: "pune",
    name: "Topper Skills",
  };

  constructor() {
    super(); // here we use inheritance property i.e parent property wiil apply to child element
    this.profile2 = this.profile2.bind(this); //bind is used to borrow a method from another object
  }

  greet() {
    alert("Hello Reactjs");
  }

  profile() {
    alert(`I am ${this.state.name} from ${this.state.city}`);
  }

  // bind this method will current class object

  profile2() {
    alert(`I am ${this.state.name} from ${this.state.city}`);
  }

  // use a arrow function as a event handler
  profile3 = () => {
    alert(`I am ${this.state.name} from ${this.state.city}`);
  };

  render() {
    return (
      <div>
        <h2>Simple Event Handling</h2>
        {/* html  */}
        {/* <button>Click Me</button> */}

        <button onClick={this.greet}>Click Me</button>
        <button onClick={this.profile}>Who i am</button>
        <button onClick={this.profile2}>Who i am - bind</button>
        <button onClick={this.profile3}>Who i am - arrow</button>
      </div>
    );
  }
}
export default SimpleEvent;

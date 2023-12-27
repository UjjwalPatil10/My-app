import { Component, useState } from "react";

// class FunComp extends Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     this.setState({ count: this.state.count + 1 }); // setState will update the state
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.increment}>++</button>
//         <h2>
//           Class Component, City {this.props.city},Total:{this.state.count}
//         </h2>
//       </div>
//     );
//   }
// }
// Function Component
const FunComp = (props) => {
  // const[state,setState]=useState()
  const [count, setCount] = useState(0); //to maintain state we use useState()
  const increment = () => {
    // this.setState({ count: state.count + 1 }); // setState will update the state
    setCount(count + 1); ////here setCount value(updated value) will be the current count valuei.e[count value]
  };
  const decrement = () => {
    // this.setState({ count: state.count + 1 }); // setState will update the state
    if (count > 0) {
      setCount(count - 1); ////here setCount value(updated value) will be the current count valuei.e[count value]
    }
  };
  return (
    <div>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
      <h2>
        Fun Component, City {props.city},Total:{count}
      </h2>
    </div>
  );
};

export default FunComp;

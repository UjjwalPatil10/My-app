import { Component } from "react";

// //state -> city
// //province -> city

// const citiesData = {
//   mh: ["Pune", "Mumbai", "Satara", "Sangli", "Nashik", "Nagpur"],
//   mp: ["Bhopal", "Ujjain", "Indore", "Saunsar"],
//   ap: ["Vijyawada", "Amravati", "tirupati", "Kadapa"],
//   up: ["Prayagraj", "Mirzapur", "Noida", "Lucknauw", "Kanpur"],
//   bihar: ["Patna", "Nalanda", "Gaya", "Dharbanga"],
//   gj: ["Surat", "Baroda", "Dwarka", "Abad", "Gandhinagar", "Bharuch"],
//   rj: ["Jayapur", "Udaypur", "alwar", "Kota"],
// };

// class Child extends Component {
//   //recommend way to initialize the state
//   state = {
//     //Initially in js to initialize state in class component like this is  not supported for that we use constructor function inside that we initialize the state
//     value: 0,
//     cities: [],
//   };

//   constructor() {
//     super();

//     //bind the event handler with "this"
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     alert(this.state.value);
//   }

//   static getDerivedStateFromProps(nextProps, prevProps) {
//     const cities = citiesData[nextProps.province];
//     return { cities };
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h3>Child Component</h3>
//         <h4>Cities of {this.props.province}</h4>
//         <ul>
//           {Array.isArray(this.state.cities) &&
//             this.state.cities.map((city, i) => <li key={city + i}>{city}</li>)}
//         </ul>
//       </div>
//     );
//   }
//   updateTime = () => {
//     const time = new Date().toLocaleTimeString();
//     this.setState({ time });
//     console.log("Timer..");
//   };
//   componentDidCatch() {
//     console.log("componentDidMount");
//     setInterval(() => {
//       this.updateTime();
//     }, 1000);
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("");
//   }
// }
// export default Child;

// state -> city
// province -> city
const citiesData = {
  mh: ["Pune", "Mumbai", "Satara", "Sangli", "Nashik", "Nagpur"],
  mp: ["Bhopal", "Ujjain", "Indore", "Saunsar"],
  ap: ["Vijaywada", "Amravati", "tirupati", "Kadapa"],
  up: ["Prayagraj", "Mirzapur", "Noida", "Lakhnaw", "Kanpur"],
  bihar: ["Patna", "Nalanda", "Gaya", "Darbhanga"],
  gj: ["Surat", "Baroda", "Dwarka", "Abad", "Gandhinagar", "Bharuch"],
  rj: ["Jaypur", "Ujaipur", "alwar", "Kota"],
};

class Child extends Component {
  // recommended way to initialize the state
  state = {
    value: 0,
    cities: [],
    time: "",
  };
  // - contructor will get executed only once at the time object creation of the compoennt
  // - The constructor of a compoent is useful in two cases
  // 1. to initialize the state
  // 2. to bind the event handler function
  // - If you do not have the above use cases then there is no need to use constructor

  constructor() {
    super();
    console.log("constructor");
    // state initialization
    // this.state = {
    //   value: 0,
    // };

    // bind the event handler with 'this'
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert(this.state.value);
  }

  // - it is used to update the state based on the values(props) received from parent component
  // - this method executes in mounting and updating phases
  // - this method will get executed before rendering the component(calling render() method to generate
  // UI)
  // - this method returns an object that will be merged with the state, if the state not to be
  // updated then it return null

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    const cities = citiesData[nextProps.province];
    <h2> Child Component</h2>;
    return { cities };
  }

  //   - it is used to control re renderings
  //   - it executes in updating phase and not in mounting
  //   - if it return true then the component will renrenders if it returns false then the component
  //   will not rerenders.
  // - it is used to make a component as pure to improve the performance by avoiding unnecessary
  // renderings

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  //   - it is the only mandatory method of class component
  //   - it return the UI
  //   - it will get executed whenever new UI it required
  //   - it can be executed when the parent component renders, changes in state and props, calling
  //   forceUpdate(), etc.
  //   - it can return String, number, boolean, Array, JSX, react elements, Fragments.
  //   - it cannot return the objects
  //   - it will execute in mounting and updating phase

  render() {
    console.log("render");
    //   return "abcd"
    //   return 100
    //   return true
    //   return ["abc","def",100]
    // return React.createElement("h1", null, "React element");
    // return <React.Fragment>Sample fragment</React.Fragment>;
    return (
      <div>
        <h3>Time: {this.state.time}</h3>
        <ul>
          {this.state.cities.map((city, i) => (
            <li key={city + i}>{city}</li>
          ))}
        </ul>
      </div>
    );
  }

  // - it accesses the DOM state(values) before updatation like scrollbar position
  // - it returns the values to componentDidUpdate as third parameter
  // - it is used to hold some old values of the DOM to be used after updating the DOM

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return "abc";
  }

  // - it is used to perform some operation after updating the UI Each time

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: ", snapshot);
  }

  //   - it will get executed only once after first time inserting the component in the DOM
  //   - it is used to initialize the resources to be used in the component like initializing the
  //   timer, fetching the data from server APIs, etc.

  updateTime = () => {
    const time = new Date().toLocaleTimeString();
    this.setState({ time });
    console.log("Timer..");
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  //   this.timer = setInterval(() => {
  //     this.updateTime();
  //   }, 1000);
  // }
  componentWillUnmount(nextProps, nextState) {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }
}

export default Child;

// updatings

// static getDerivedStateFromProps(nextProps, prevState)

// updates the state based on props

// shouldComponentUpdate(nextProps, nextState)
// decide whether to update the UI or not

// render()
// generate the UI

// getSnapshotBeforeUpdate(prevProps, prevState) {
//     access the old values of the DOM, like scrollbar position
//     return the value to componentDidUpdate
// }
// // Update the generated UI in the DOM

// componentDidUpdate(prevProps, prevState, snapshot) {

// }

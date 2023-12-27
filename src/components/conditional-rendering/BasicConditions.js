// in return statement only operators like(ternary operator and Logical operator(AND &&,OR || ))are allowed not statement

import React, { Component } from "react";
class BasicConditions extends React.Component {
  state = {
    isLogged: true,
  };

  //   using if else
  handleLogin = () => {
    this.setState((state) => ({ isLogged: !state.isLogged }));
  };
  render() {
    // if(this.state.isLogged){
    //     return <h2>Welcome Toppeer Skils</h2>
    // }else{
    //     return <h2>Welcome Guest</h2>
    // }

    let greetMessage = "";
    if (this.state.isLogged) {
      greetMessage = <h2>Welcome Topper Skills</h2>;
    } else {
      greetMessage = <h2>Welcome Guest</h2>;
    }
    return (
      <div>
        <h3>Basic Conditions</h3>
        <button onClick={this.handleLogin}>
          {this.state.isLogged ? "Logout" : "Login"}
        </button>
        <hr />
        {greetMessage}
        <hr />
        <h2>Welcome{this.state.isLogged ? "Topper Skills" : "Guest"}</h2>
        <hr />
        {this.state.isLogged ? (
          <p>{"Confidential information".repeat(50)}</p>
        ) : (
          ""
        )}
        <hr />
        {this.state.isLogged && <p>{"Confidential information".repeat(50)}</p>}
      </div>
    );
  }
}
export default BasicConditions;

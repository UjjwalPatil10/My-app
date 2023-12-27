import React, { Component } from "react";

class classComp extends React.Component {
  display() {
    alert(" I am display of class component");
  }
  render() {
    return (
      <div>
        <h3>Class child component</h3>
        <button onClick={this.props.greet}>call parent Method</button>
      </div>
    );
  }
}

export default classComp;

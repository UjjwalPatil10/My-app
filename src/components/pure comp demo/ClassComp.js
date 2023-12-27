import React, { Component } from "react";
// class ClassComp extends React.PureComponent{}
class ClassComp extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    //deep comparison
    if (this.props.address.city != nextProps.address.city) return true;
    else return false;
  }
  render() {
    console.log("ClassComp");
    return (
      <div>
        <h2>
          Class Component-{this.props.count}, City:{this.props.address.city}
        </h2>
      </div>
    );
  }
}

export default ClassComp;

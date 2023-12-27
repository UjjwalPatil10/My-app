import React, { Component, createRef } from "react";

class ClassComp extends React.Component {
  // there are two ways to use the refs
  // 1. by using callback ref
  // this is old way

  // 2. createRef()
  // this is new way added in React v 16.3

  inputRef1 = createRef(); //recommended
  refCb = (ele) => {
    this.inputRef2 = ele;
  };

  handleFocus1 = () => {
    this.inputRef1.current.focus(); //we do .current is like we get real dom
  };

  handleFocus2 = () => {
    this.inputRef2.focus(); //here we direct get dom node so need to give .current
    // alert("CallbackRef");
  };
  render() {
    return (
      <div>
        <h3>Class Component</h3>
        <input type="text" ref={this.inputRef1} />
        <button onClick={this.handleFocus1}>createRef focus</button>
        <br />

        <input type="text" ref={this.refCb} />
        <button onClick={this.handleFocus2}>Callback Ref focus</button>
      </div>
    );
  }
}

export default ClassComp;

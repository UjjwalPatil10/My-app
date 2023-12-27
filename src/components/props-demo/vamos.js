import { Component } from "react";

class Title extends Component {
  // here Component is a named export that's why we use { Component } in curly {} braces
  render() {
    return (
      <h2
        style={{
          backgroundColor: "pink",
          borderLeft: "10px solid yellow",
          borderRight: "10px solid yellow",
          padding: "5px 15px",
        }}
      >
        {/* below is quite extra code method so we cannot used */}
        {/* {this.props.content} */}

        {/* here children is in lowercase */}
        {this.props.children}
      </h2>
    );
  }
}
export default Title;

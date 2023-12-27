import { Component } from "react";
// // here we used named Component that's why while import we use { Component }
class Title extends Component {
  render() {
    return (
      <h2
        style={{
          backgroundColor: "cyan",
          borderLeft: "10px solid blue",
          padding: "5px 15px",
        }}
      >
        {/* {this.props.children} // content between opening and closing tag refer to children in this.props. object     */}
        {this.props.children}
      </h2>
    );
  }
}
// export default Title;

// import { Component } from "react";

// class Title extends Component {
//   render() {
//     return (
//       <h2
//         style={{
//           backgroundColor: "pink",
//           borderLeft: "10px solid yellow",
//           padding: "5px 15px",
//         }}
//       >
//         {/* here children is in lowercase */}
//         {this.props.children}
//       </h2>
//     );
//   }
// }
export default Title;

import { Component } from "react";
export default class OlxClassChild extends Component {
  // child class component
  render() {
    console.warn(this.props);
    return (
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          flexDirection: "column",
          border: "1px solid black",
          width: 250,
          marginLeft: 5,
        }}
      >
        <img
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            width: 210,
            height: 200,
            marginTop: 5,
          }}
          src={this.props.ImageURL}
          // src="https://apollo-singapore.akamaized.net/v1/files/9akrhdiasa8d1-IN/image;q=60"
        />
        <div style={{ marginLeft: 5 }}>
          <h3> {this.props.name}</h3>
          <h3> {this.props.price}</h3>
        </div>
      </div>
    );
  }
}

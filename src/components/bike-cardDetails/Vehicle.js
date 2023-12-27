import { Component } from "react";

class Vehicle extends Component {
  render() {
    const { model, image, price, brand } = this.props; // in object destructuring sequence is not matter
    return (
      <div
        style={{
          width: 400,
          margin: 10,
          border: "1px solid #9999",
          padding: 10,
        }}
      >
        <img src={image} alt={model} style={{ width: "100%", height: 250 }} />

        <h4>{model}</h4>
        <p>brand:{brand}</p>
        <p>price:{price}</p>
      </div>
    );
  }
}
export default Vehicle;

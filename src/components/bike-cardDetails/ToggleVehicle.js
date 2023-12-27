import { Component } from "react";
import Vehicle from "../bike-cardDetails/Vehicle";

class ToggleVehicle extends Component {
  state = {
    current: "bike",
  };
  setVehicle = (type) => {
    this.setState({ current: type });
  };
  render() {
    const bike = {
      model: "Bike model",
      brand: "TVS",
      price: 1000,
      image: "images/bike-image.png",
    };
    const car = {
      model: "Car model",
      brand: "Audi",
      price: 2000,
      image: "images/car-image.png",
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {this.state.current === "bike" ? (
          <Vehicle {...bike} /> //here we use spread operator ...bike gives all properties of bike object
        ) : (
          <Vehicle {...car} />
        )}

        <div>
          <button onClick={() => this.setVehicle("bike")}>Bike</button>
          <button onClick={() => this.setVehicle("car")}>Car</button>
        </div>
      </div>
    );
  }
}

export default ToggleVehicle;

import { Component } from "react";
class BikeCarDetails extends Component {
  state = {
    switch: false,
  };
  handleOnOff = () => {
    this.setState((state) => ({ switch: !state.switch }));
  };
  render() {
    return (
      <div className="image">
        <div className="figure">
          <img
            // className="img-fluid"
            style={{
              border: "5px solid #ddd",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "auto",
              width: 220,
              height: 220,
            }}
            src={
              this.state.switch
                ? "images/bike-image.png"
                : "images/car-image.png"
            }
            alt=""
          />
        </div>
        {/* <h2>sjhf5pohypo</h2> */}
        <hr />
        <button
          style={{ display: "flex", margin: "auto" }}
          onClick={this.handleOnOff}
        >
          {this.state.switch ? "Bike" : "Car"}
        </button>
      </div>
    );
  }
}
export default BikeCarDetails;

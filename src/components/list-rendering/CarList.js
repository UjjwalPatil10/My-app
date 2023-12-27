import { Component } from "react";
const carData = [
  {
    id: 1,
    model: "Car 1",
    brand: "Tata",
    price: 1111,
    image:
      "https://imgd.aeplcdn.com/0x0/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg",
  },
  {
    id: 2,
    model: "Car 2",
    brand: "Mahindra",
    price: 22222,
    image:
      "https://www.carlelo.com/laravel/public/uploads/model/vkcOZSr0r14z2LTEGmE2HBQj5byyPF7S1q20N4mV.jpeg",
  },
  {
    id: 3,
    model: "Car 3",
    brand: "Tata",
    price: 33333,
    image:
      "https://imgd.aeplcdn.com/0x0/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg",
  },
  {
    id: 4,
    model: "Car 4",
    brand: "Mahindra",
    price: 44444,
    image:
      "https://www.carlelo.com/laravel/public/uploads/model/vkcOZSr0r14z2LTEGmE2HBQj5byyPF7S1q20N4mV.jpeg",
  },
  {
    id: 5,
    model: "Car 5",
    brand: "Tata",
    price: 55555,
    image:
      "https://imgd.aeplcdn.com/0x0/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg",
  },
];
// IN ONE MODULE WE CAN TAKE MULTIPLE COMPONENTS
class CarProfile extends Component {
  render() {
    const { image, price, brand, model } = this.props;
    return (
      <div
        style={{
          width: 250,
          margin: 5,
          padding: 10,
          border: "1px solid #9999",
        }}
      >
        <img src={image} alt="menu" style={{ width: "100%" }} />
        <h3>{model}</h3>
        <h3>Brand:{brand}</h3>
        <h3>Price:{price}</h3>
      </div>
    );
  }
}
class CarList extends Component {
  state = {
    brand: "all",
  };
  render() {
    return (
      <section>
        <button onClick={() => this.setState({ brand: "tata" })}>Tata</button>
        <button onClick={() => this.setState({ brand: "mahindra" })}>
          Mahindra
        </button>
        <button onClick={() => this.setState({ brand: "all" })}>All</button>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {Array.isArray(carData) &&
            carData
              .filter(
                (car) =>
                  this.state.brand.toLowerCase() === "all" ||
                  this.state.brand.toLowerCase() === car.brand.toLowerCase() //.toLowerCase() we gave because in [{}] some 'brand' value are in lower or uppercase so to match that we give .toLowerCase()
              )
              .map((car, i) => <CarProfile key={car.id} {...car} />)}
        </div>
      </section>
    );
  }
}
export default CarList;

import { Component } from "react";
import PropTypes from "prop-types";
class Product extends Component {
  render() {
    console.log(this);

    const { Title, brand, price, disc } = this.props; // HERE (Title, brand, price, disc) all are properties  we use object destructuring to short the code
    return (
      <div
        style={{ border: "1px solid #9999", width: 250, margin: 5, padding: 5 }}
      >
        {/* we make product.js file to make code reusable */}
        {/* below we give style to Title it will apply to all */}
        <h4>{Title}</h4>
        <p>brand : {brand}</p>
        <p>price : {price}</p>
        <p>disc : {disc}</p>
        {/* <h4>{this.props.Title}</h4>
        <p>Name:{this.props.Name}</p>
        <p>Hobby:{this.props.Hobby}</p>
        <p>Education:{this.props.Education}</p> */}
      </div>
    );
  }
}

Product.propTypes = {
  //propTypes is for checking datatypes
  Title: PropTypes.string.isRequired,
  Name: PropTypes.string,
  Hobby: PropTypes.string.isRequired,
  Education: PropTypes.string,
};
export default Product;

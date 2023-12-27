import React, { Component } from "react";
import Title from "./vamos";
import Product from "./product";
class ProductList extends Component {
  render() {
    return (
      <div>
        {/* <h3>Product List</h3> */}
        {/* {/* <Title>Product List</Title> */}
        <Title>Product List</Title>
        {/* <Title>Product List</Title>
        <Title>Product List</Title>  */}
        {/* <h2 style={{ backgroundColor: "cyan" }}>Product List</h2>
        <h2 style={{ backgroundColor: "cyan" }}>Product List</h2>
        <h2 style={{ backgroundColor: "cyan" }}>Product List</h2>
        <h2 style={{ backgroundColor: "cyan" }}>Product List</h2> */}
        {/* try to reuse most of the code for that make component seperately here we reuse of title*/}
        {/* <title></title> opening and closing tag we take when there is child content otherwise we take self-closing tag  */}
        {/* to access a content between opening and closing tag there is special built in props i.e children internally   */}
        {/* below we create props which is inbuilt component to reuse our UI  */}
        {/* <Title>Freind List</Title> */}
        {/* <Title>Product List</Title> */}
        {/* <Title> List</Title>
        <Title>Product List</Title>
        <Title>Product List</Title> */}
        <section style={{ display: "flex", flexWrap: "wrap" }}>
          <Product
            // Name=" Rohan Ratan Suryawanshi"
            // Hobby="   playing cricket   "
            // Education="  B.A"
            Title=" Product 1"
            brand=" BRand 1"
            price={100}
            disc=" sample disc"
          />

          <Product
            //in product there is properties(props) an object internally create in that there is props:{properties} in that our properties include
            // Name=" Rohan Ratan Suryawanshi"
            // Hobby="   playing cricket   "
            // Education="  B.A"
            Title="Product 2"
            brand="BRand 2"
            price={200}
            disc="sample disc"
          />
          <Product
            // Name=" Rohan Ratan Suryawanshi"
            // Hobby="   playing cricket   "
            // Education="  B.A"
            Title="Product 3"
            brand="BRand 3"
            price={300}
            disc="sample disc"
          />
          <Product
            // Name=" Rohan Ratan Suryawanshi"
            // Hobby="   playing cricket   "
            // Education="  B.A"
            Title="Product 4"
            brand="BRand 4"
            price={400}
            disc="sample disc"
          />
          <Product
            // Name=" Rohan Ratan Suryawanshi"
            // Hobby="   playing cricket   "
            // Education="  B.A"
            Title="Product 5"
            brand="BRand 5"
            price={500}
            disc="sample disc"
          />
        </section>
      </div>
    );
  }
}
export default ProductList;

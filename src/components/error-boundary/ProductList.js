import React from "react";
import ErrorHandler from "./ErrorHandler";
import Product from "./Product";

const ProductList = () => {
  return (
    <>
      {/* with the help of error boundary we handle the error in the component tree */}
      <h3>Product List</h3>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {/* if we give ErrorHandler combinely to each Product component so for all content alternatively it give error message
      so for that every product component we give ErrorHandler seperatly so it give error message only to that component which has error */}
        <ErrorHandler>
          <Product
            model="AAAA"
            brand="aaaaa"
            price={1111}
            desc="sample description aaaa"
          />
        </ErrorHandler>
        <ErrorHandler>
          <Product
            model="BBBB"
            brand="bbbbb"
            price={2222}
            desc="sample description bbbb"
          />
        </ErrorHandler>
        <ErrorHandler>
          <Product
            model="CCCC"
            brand="cccc"
            // price={3333} //here we don't give property to C component but problem will happen to all .All will not display in UI .we don't want to display C component but A,B,D comp will not show in that there is no issue
            desc="sample description cccc"
          />
        </ErrorHandler>
        <ErrorHandler>
          <Product
            model="DDDD"
            brand="dddd"
            price={4444}
            desc="sample description dddd"
          />
        </ErrorHandler>
      </section>
    </>
  );
};

export default ProductList;

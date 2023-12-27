import React from "react";
import ProductList from "./ProductList";

const ErrorBoundary = () => {
  return (
    <>
      <h2>Error Boundary</h2>
      <ProductList />
    </>
  );
};

export default ErrorBoundary;

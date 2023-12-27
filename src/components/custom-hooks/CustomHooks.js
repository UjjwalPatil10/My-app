import React from "react";
import Customers from "./Customers";
import Patients from "./Patients";

const CustomHooks = () => {
  return (
    <>
      <h2>Custom Hooks</h2>
      <hr />
      <Patients />
      <hr />
      <Customers />
    </>
  );
};

export default CustomHooks;
